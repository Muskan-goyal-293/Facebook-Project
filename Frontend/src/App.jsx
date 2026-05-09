
import  RouterFun from "./Router.jsx" 
import  "./style.scss"
import {AuthContext} from "./Features/auth/Context/AuthContext.jsx"
import {ProfileContext} from "./Features/profile/Context/ProfileContext.jsx"
function App() {
  return (
    <>
    <AuthContext>
      <ProfileContext>
  <RouterFun/>

      </ProfileContext>
    </AuthContext>
         </>
  )
}

export default App
