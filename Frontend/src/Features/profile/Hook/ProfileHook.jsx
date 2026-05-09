import { profileCreateFun } from "../Api/profileApi";
import { useContext } from "react";
import { ProfileProviderContext } from "../Context/ProfileContext";

function ProfileHook() {
  const data = useContext(ProfileProviderContext);
  const { error, setError, loading, setLoading, result, setResult } = data;
  const profileFunction = async (bio, isPrivate, gender, profileImage) => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);
      const response = await profileCreateFun(
        bio,
        isPrivate,
        gender,
        profileImage,
      );
      setResult(response.data.message);
      return true;
    } catch (err) {
      setError(err.response?.data || "something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, result, profileFunction };
}

export default ProfileHook;
