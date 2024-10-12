import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase.config";
import { useNavigate, useLocation } from "react-router-dom";

export default function ChatList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [myUid, setUid] = useState('');
  console.log("🚀 ~ ChatList ~ myUid:", myUid);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let uid = await localStorage.getItem("userid");
    setUid(uid);

    const list = [];
    const dbSnap = await getDocs(collection(db, "users"));
    dbSnap.forEach((item) => {
      list.push(item.data());
    });
    setUsers(list);
  };

  let myuid = localStorage.getItem("userid");
  console.log("🚀 ~ sendMsg ~ myuid:", myuid);

  return (
    <div className="container mx-auto p-4">
      {/* <Navbar /> */}
      <div className="mt-6 cursor-pointer">
        {users.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/chat`, { state: { ...item, myUid } })}
            className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src="https://media.istockphoto.com/id/837345268/photo/noir-movie-character.jpg?s=612x612&w=0&k=20&c=WGaAh-xWelYuEoxhUE69T4e4k45Bp-MTC6KLG7edN8Y="
                alt={item.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
