import "../style/authStyle.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginHook from "../Hook/loginHook";
import AllPost from "../../post/Pages/AllPost";

function Login() {
  const navigate = useNavigate();
  const { error, result, loading, loginFunction } = LoginHook();
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  async function formHandle(e) {
    e.preventDefault();
    const response = await loginFunction(UserName, password);
    if (!response) {
      return;
    }
    setUserName("");
    setPassword("");
    navigate("/all-post");
  }

  return (
    <main>
      <div className="formWrapper">
        {error && <p>{error}</p>}
        {result && <p>{result}</p>}
        <form
          onSubmit={(e) => {
            formHandle(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter Name/Email"
            required
            value={UserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button>{loading ? "loading..." : "Login"}</button>
        </form>
        <p>
          If you have already account ?{" "}
          <Link className="link" to="/">
            register
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
