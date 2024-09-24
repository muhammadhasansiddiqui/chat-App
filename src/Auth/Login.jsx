import { useState } from "react";
import Button from "../components/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebase.config";
import { useNavigate } from "react-router";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      console.log(email, password);
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <div className="container items-center justify-center mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="my-3 font-bold">Sign krke apne Kartoot Dekhlo</h1>
        <input
          className="w-full p-2 my-2 border rounded-md lg:w-1/2"
          placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-2 my-2 border rounded-md lg:w-1/2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button onClick={handleSignIn} isLoading={loading} text={"Login"} />
      </div>
    </div>
  );
}
export default SignIn;