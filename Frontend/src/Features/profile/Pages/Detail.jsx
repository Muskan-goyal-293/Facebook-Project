import "../Style/detail.scss";
import DetailHook from "../Hook/DetailHook";
import { useEffect } from "react";

function Detail() {

const {error, result, loading, detailFun} = DetailHook();

async function details(){

   await detailFun();

}

useEffect(()=>{

   details();

},[]);

return (

<div className="profile-container">
 {loading && <p>Loading...</p>}
   <div className="profile-card">

      {/* profile image */}
      <div className="profile-image">
         <img
            src={result?.profile?.profileImage}
            alt="profile"
         />
      </div>

      {/* profile info */}
      <div className="profile-info">

         <h2>{result?.UserName}</h2>

         <p className="bio">
            {result?.profile?.bio}
         </p>
         <p className="bio">
            {result?.profile?.gender}
         </p>
<p className="created">
   {
      new Date(result?.createdAt).toDateString()
   }
</p>
      </div>

    
   </div>

</div>

);

}

export default Detail;