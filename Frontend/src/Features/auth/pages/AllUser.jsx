import "../style/alluserStyle.scss";
import AllUserHook from "../Hook/allUserHook";
import { useEffect } from "react";
function AllUser() {
  const { error, loading, allUser, allUserGetFun } = AllUserHook();
  async function getData() {
    const res = await allUserGetFun();
    if (!res) {
      return "Something went wrong";
    }
  }

  useEffect(() => {
    getData();
  }, []);


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
              <button >Follow</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default AllUser;
