import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase.config";
import { useNavigate , useLocation} from "react-router-dom";

export default function ChatList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const list = [];
    const dbSnap = await getDocs(collection(db, "users"));
    dbSnap.forEach((item) => {
      list.push(item.data());
    });
    setUsers(list);
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="mt-6 cursor-pointer">
        {users.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/chat` , {state:item})}
            className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src="data:image/jpeg;base64,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"
                className="w-12 h-12 rounded-full"
                alt="User Avatar"
              />
              <div>
                <h1 className="uppercase font-semibold text-xl">{item.name}</h1>
                <h1 className="text-gray-600">{item.email}</h1>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
