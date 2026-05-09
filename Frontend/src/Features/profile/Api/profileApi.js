import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export function profileCreateFun(bio, isPrivate, gender, profileImage) {
  const formData = new FormData();
  formData.append("bio", bio);
  formData.append("isPrivate", isPrivate);
  formData.append("gender", gender);
  formData.append("profileImage", profileImage);

  const response = api.post("/create-profile", formData);

  return response;
}
