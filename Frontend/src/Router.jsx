import {  Route , Routes}  from "react-router-dom";
import Register from "./Features/auth/pages/Register";
import Login from "./Features/auth/pages/Login";
import Profile from "./Features/profile/Pages/Profile";
import CreatePost from "./Features/post/Pages/CreatePost";
import AllPost from "./Features/post/Pages/AllPost";
import AllUser from "./Features/auth/pages/AllUser";
import Detail from "./Features/profile/Pages/Detail";
function RouterFun() {
  return (
    <div>     
<Routes>
<Route path="/" element={<Register/>} />
<Route path="/login" element={<Login/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/all-post" element={<AllPost/>}  />
<Route path="/create-post" element={<CreatePost/>}/>
<Route path="/all-user" element={<AllUser/>}/>
<Route path="/detail" element={<Detail/>}></Route>
</Routes>
</div>
  )
}

export default RouterFun
 
