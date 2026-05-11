import { useState } from "react";
import "../Style/profileStyle.scss";
import ProfileHook from "../Hook/ProfileHook";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { error, loading, result, profileFunction } = ProfileHook();
  const navigate = useNavigate();
  // need to perform 2-way binding
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  //

  async function profileFormHandlerFun(e) {
    e.preventDefault();
    const response = await profileFunction(
      bio,
      isPrivate,
      gender,
      profileImage,
    );
    if (!response) {
      return;
    }
    navigate("/all-post");
  }
  return (
    <main>
      <div className="profileFormWrapper">
        {error && <p className="error">{error}</p>}
        {result && <p className="result">{result}</p>}
        <form
          onSubmit={(e) => {
            profileFormHandlerFun(e);
          }}
        >
          <div className="info">
            <label htmlFor="bio">
              Bio
              <br></br>
              <input
                type="text"
                className="bio"
                id="bio"
                placeholder="Enter Bio"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="info">
            <label htmlFor="profileImage">
              <input
                hidden
                type="file"
                className="profileImage"
                id="profileImage"
                onChange={(e) => {
                  setProfileImage(e.target.files[0]);
                }}
              />
              Choose your profile image
            </label>
          </div>
          <div className="info">
            Gender
            <label htmlFor="female">
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              &nbsp;Female
            </label>
            <label htmlFor="male">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              &nbsp;Male
            </label>
            <label htmlFor="other">
              <input
                type="radio"
                name="gender"
                id="other"
                value="other"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              &nbsp;Other
            </label>
          </div>
          <div className="info">
            Account
            <label htmlFor="public">
              <input
                type="radio"
                name="isPrivate"
                id="public"
                value="false"
                onChange={(e) => {
                  setIsPrivate(e.target.value === "true");
                }}
              />
              &nbsp;Public
            </label>
            <label htmlFor="private">
              <input
                type="radio"
                name="isPrivate"
                id="private"
                value="true"
                onChange={(e) => {
                  setIsPrivate(e.target.value === "true");
                }}
              />
              &nbsp;Private
            </label>
          </div>
          <button>{loading ? "Loading.." : "Submit"}</button>
        </form>
      </div>
    </main>
  );
}
export default Profile;
