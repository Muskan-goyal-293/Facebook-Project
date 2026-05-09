import {  Route , Routes}  from "react-router-dom";
import Register from "./Features/auth/pages/Register";
import Login from "./Features/auth/pages/Login";
import Profile from "./Features/profile/Pages/Profile";
function RouterFun() {
  return (
    <div>     
<Routes>
<Route path="/" element={<Register/>} />
<Route path="/login" element={<Login/>}/>
<Route path="/profile" element={<Profile/>}/>
</Routes>
</div>
  )
}

export default RouterFun
 
