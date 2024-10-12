import {
  addDoc,
  collection,
  query,
  where,
  onSnapshot,getDocs
} from "firebase/firestore";
import Navbar from "../components/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../database/firebase.config";
import moment from "moment";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState([]);
  const [chatList, setChatList] = useState([]);

  const { state } = useLocation();
  console.log("🚀 ~ Home ~ state:", state);
  let myUid = localStorage.getItem("userId");
  console.log("🚀 ~ sendMsg ~ myUid:", myUid);

  useEffect(() => {
    const q = query(
        collection(db, "chat"),
        where(state.uid, "==", true),
        where(myUid, "==", true));

    const unsubscribe = onSnapshot(q, (docSnap) => {
        const list = [];
        docSnap.forEach((doc) => {
            list.push(doc.data());
          });
            setChatList(list);
     });

    return () => unsubscribe()
}, [])


  

  const sendMsg = async () => {
  
    addDoc(collection(db, "chat"), {
      message,
      [myUid]: true,
      [state.uid]: true,
      senderUid: myUid,

      time: new Date(),
    });

    setMessage("");
  };

  return (
    <div>
      <div className=" bg-[khaki] w-full p-6 mb-16 items-center flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4zD3DLKLZRCpd0-1v7EQzRm1hdZJaqgojg&s"
          alt="back btn"
          className="w-8 mr-10 rounded-xl cursor-pointer"
          onClick={() => navigate("/home")}
        />
        <img
          src="data:image/jpeg;base64,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"
          className=" w-12 h-12  mr-3 rounded-full border-2 border-blue-800"
          alt="img"
        />
        <h1 className=" text-2xl font-bold  uppercase text-blue-900 ">
          {state.name}
        </h1>
      </div>
      <div className="bg-gray-100 h-[67vh]">

      {chatList.map((item, index) => (
                    <div key={index} onClick={() => navigate('/chat', { state: { ...item, myUid } })} className={`w-full flex px-10 ${item.senderUid == state.myUid ? 'justify-end' : 'justify-start'}`}>
                        <div className=" shadow-md border border-black bg-blue-50 shadow-gray-300 rounded-md mt-4 py-5 px-10 ">
                            <h1 className="font-semibold text-xl">{item.message}</h1>
                            <h1 className="text-gray-700">{moment(item.createdAt).startOf('seconds').fromNow()}</h1>
                        </div>
                    </div>
                ))}

      </div>

      <div className="flex items-center justify-center pt-5">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Message"
          className="w-10/12 border border-gray-500 rounded-lg px-6 py-2 text-xl"
        />
        <button
          onClick={sendMsg}
          className="text-xl w-40 py-2 ml-2 rounded-lg bg-red-200 text"
        >
          Send
        </button>
      </div>
    </div>
  );
}
