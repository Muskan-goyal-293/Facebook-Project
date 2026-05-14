import "../style/alluserStyle.scss";
import AllUserHook from "../Hook/allUserHook";
import { useEffect } from "react";
import FollowHook from "../Hook/FollowHook";
function AllUser() {
  const { error, loading, allUser, allUserGetFun } = AllUserHook();
 const {err , load , result , followFun} = FollowHook()
  async function getData() {
    const res = await allUserGetFun();
    if (!res) {
      return "Something went wrong";
    }
  }

  useEffect(() => {
    getData();
  }, []);


async  function followUserFun(id){
  const response = await  followFun(id)
   if(!response){
    console.log(err)
    return; 
   }
} 

  return (
    <main>
      <div className="parent">
        {error && <p className="error">{error}</p>}
        {loading && <p>Loading...</p>}
        {allUser.map((val) => {
          return (
            <div key ={val._id} className="outer">
              <div className="left">
                <div className="imgWrapper">
                  <img src={val.profile.profileImage} alt="" />
                </div>
                <h5>{val.UserName}</h5>
              </div>
              <button onClick={()=>{
                followUserFun(val._id)
              }} >{result? result : "Follow" }</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default AllUser;
