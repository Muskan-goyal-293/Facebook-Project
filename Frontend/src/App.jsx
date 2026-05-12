import RouterFun from "./Router.jsx";
import "./style.scss";
import { AuthContext } from "./Features/auth/Context/AuthContext.jsx";
import { ProfileContext } from "./Features/profile/Context/ProfileContext.jsx";
import { LoginContext } from "./Features/auth/Context/LoginContext.jsx";
import { CreatePostContext } from "./Features/post/Context/CreatePostContext.jsx";
import { GetAllPostContext } from "./Features/post/Context/GetAllPostContext.jsx";
import { LikeAndDislikeContext } from "./Features/post/Context/LikeAndDislikeContext.jsx";
import { AllUserContext } from "./Features/auth/Context/allUserContext.jsx";
function App() {
  return (
    <>
      <AuthContext>
        <LoginContext>
          <ProfileContext>
            <GetAllPostContext>
              <CreatePostContext>
                <LikeAndDislikeContext>
                  <AllUserContext>
                    <RouterFun />
                  </AllUserContext>
                </LikeAndDislikeContext>
              </CreatePostContext>
            </GetAllPostContext>
          </ProfileContext>
        </LoginContext>
      </AuthContext>
    </>
  );
}

export default App;
