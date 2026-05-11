import "../Style/postStyle.scss";
import CreatePostHook from "../Hook/CreatePostHook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const { error, loading, result, createPost } = CreatePostHook();
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  async function createPostFormHandle(e) {

    e.preventDefault();
    let response
    try{
     response = await createPost(caption, image);
      navigate("/all-post");
    }
    catch(err){
      if (!response) {
        return;
    }
    }
  }
  return (
    <main>
      <div className="postWrapper">
        {error && <p className="error">{error}</p>}
        {result && <p className="result">{result}</p>}
        <form onSubmit={(e) => createPostFormHandle(e)}>
          <div className="info">
            <label htmlFor="image">
              Choose your image
              <input
                type="file"
                name="image"
                id="image"
                hidden
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </label>
          </div>
          <div className="info">
            <label htmlFor="caption">
              Caption :) &nbsp;
              <input
                type="text"
                placeholder="Caption"
                id="caption"
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                }}
              />
            </label>
          </div>
          <button>{loading ? "Loading..." : " Create Post"}</button>
        </form>
      </div>
    </main>
  );
}

export default CreatePost;
