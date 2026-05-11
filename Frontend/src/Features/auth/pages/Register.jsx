//  import module
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/authStyle.scss";
import AuthHook from "../Hook/authHook";
import Profile from "../../profile/Pages/Profile";

function Register() {
  const { loading, error, result, registerFunction } = AuthHook()
 const navigate = useNavigate();  
  // need to perform 2-way binding
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // function  calling
  async function formHandle(e) {
    e.preventDefault();
    const response = await registerFunction(UserName, email, password, age, confirmPassword)

    if (!response) {
      return;
    }
  navigate("/profile")
    setUserName("");
    setEmail("");
    setPassword("");
    setAge("");
    setConfirmPassword("");
  }

  return (
    // form  to take input  // 
    <main>
      <div className="formWrapper">
        {error && <p className="error">{error}</p>}
        {result && <p className="result">{result}</p>}
        <form
          onSubmit={(e) => {
            formHandle(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            value={UserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter Your Age"
            required
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter ConfirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button>{loading ? "Loading" : "Register"}</button>
        </form>
        <p>
          If you have already account? <Link className="link" to="/login">Login</Link>{" "}
        </p>
      </div>
    </main>
  );
}

export default Register;
