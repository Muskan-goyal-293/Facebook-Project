import "../style/authStyle.scss"
import {Link} from "react-router-dom"
import {useState} from "react"
function Login() {
  const [userName , setUserName] = useState("");
  const[password , setPassword] = useState("")
  function formHandle(e){
 e.preventDefault();
 console.log(userName , password)
 setUserName("");
 setPassword("")
  }


  return (
    
<main>
  <div className="formWrapper">
    <form onSubmit={(e)=>{formHandle(e)}} >
      <input type="text" placeholder='Enter Name/Email' required value={userName} onChange={(e)=>{
        setUserName(e.target.value)
      }}/>
   <input type="password" placeholder='Enter Password' required value={password} onChange={(e)=>{
    setPassword(e.target.value)
   }}/>
   <button>Login</button>
    </form>
    <p>If you have already account ? <Link className="link" to="/">register</Link></p>
  </div>
</main>
  )
}

export default Login
