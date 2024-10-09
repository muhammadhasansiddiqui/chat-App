import Navbar from "../components/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase.config";

export default function Home() {
  const [messeges, setmesseges] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const param = useLocation()
  console.log("🚀 ~ Home ~ param:", param);

  useEffect(() => {
    getMesseges();
  }, []);
  const getMesseges = async () => {
   
  };

 

  return (
<div>

<div className=" bg-[khaki] w-full p-6 mb-16">
<h1 className=" text-2xl font-bold  text-blue-800 ">Chat with {param.state?.name} 
   </h1>

</div>
</div>
  );
}
