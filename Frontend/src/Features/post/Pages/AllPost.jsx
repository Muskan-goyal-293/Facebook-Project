import "../Style/allPost.scss";
import GetAllPostHook from "../Hook/GetAllPostHook";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LikeAnDisLikeHook from "../Hook/LikeAnDisLikeHook";

//  get all post function
function AllPost() {
  const { error, loading, result, getAllPostFunc } = GetAllPostHook();
  const [reaction, setReaction] = useState({});
  useEffect(() => {
    getAllPostFunc();
  }, []);

  //  like function
  const { likeFunction, dislikeFunction } = LikeAnDisLikeHook();
  async function likeFun(postId) {
    setReaction((prev) => ({
      ...prev,
      [postId]: "like",
    }));

    const response = await likeFunction(postId);

    if (!response) {
      return;
    }
  }

  // dislike function
  async function dislikeFun(postId) {
    setReaction((prev) => ({
      ...prev,
      [postId]: "dislike",
    }));

    const response = await dislikeFunction(postId);

    if (!response) {
      return;
    }
  }

  const navigate = useNavigate();
  return (
    <main>
      <nav>
        <button
          onClick={() => {
            navigate("/create-post");
          }}
          className="cretePost"
        >
          Create Post
        </button>

        <button
          onClick={() => {
            navigate("/all-user");
          }}
          className="exploreUser"
        >
          Explore User
        </button>
      </nav>

      <div className="allPostWrapper">
        {error && <p className="error">{error} </p>}
        {loading && <p> Loading....</p>}
        {result.map((val) => {
          return (
            <div key={val._id} className="outer">
              <div className="top">
                <div className="imgDiv">
                  <img src={val.user?.profile?.profileImage} alt="" />
                </div>
                <div>
                  <h5>{val.user?.UserName}</h5>
                  <h6 className="emoji">(❁´◡`❁)(●'◡'●)</h6>
                </div>
              </div>
              <div className="center">
                <img src={val?.image} alt="" />
              </div>
              <div className="caption">
                <h5>{val?.caption}</h5>
              </div>

              <div className="bottom">
                <div className="left">
                  {/*  like btn */}
                  <button
                    onClick={() => {
                      likeFun(val._id);
                    }}
                    className={reaction[val._id] === "like" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"></path>
                    </svg>
                  </button>

                  {/*  disLike btn*/}
                  <button
                    type="submit"
                    onClick={() => {
                      dislikeFun(val._id);
                    }}
                    className={reaction[val._id] === "dislike" ? "active" : ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9.40017 16H3C1.89543 16 1 15.1046 1 14V11.8957C1 11.6344 1.05118 11.3757 1.15064 11.1342L4.24501 3.61925C4.3993 3.24455 4.76447 3 5.16969 3H22C22.5523 3 23 3.44772 23 4V14C23 14.5523 22.5523 15 22 15H18.5182C18.1932 15 17.8886 15.1579 17.7012 15.4233L12.2478 23.149C12.1053 23.3508 11.8367 23.4184 11.6157 23.3078L9.80163 22.4008C8.74998 21.875 8.20687 20.6874 8.49694 19.548L9.40017 16ZM17 13.4125V5H5.83939L3 11.8957V14H9.40017C10.7049 14 11.6602 15.229 11.3384 16.4934L10.4351 20.0414C10.3771 20.2693 10.4857 20.5068 10.6961 20.612L11.3572 20.9425L16.0673 14.27C16.3172 13.9159 16.6366 13.6257 17 13.4125ZM19 13H21V5H19V13Z"></path>
                    </svg>
                  </button>

                  {/* comment btn */}
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.7134 8.12811L20.4668 8.69379C20.2864 9.10792 19.7136 9.10792 19.5331 8.69379L19.2866 8.12811C18.8471 7.11947 18.0555 6.31641 17.0677 5.87708L16.308 5.53922C15.8973 5.35653 15.8973 4.75881 16.308 4.57612L17.0252 4.25714C18.0384 3.80651 18.8442 2.97373 19.2761 1.93083L19.5293 1.31953C19.7058 0.893489 20.2942 0.893489 20.4706 1.31953L20.7238 1.93083C21.1558 2.97373 21.9616 3.80651 22.9748 4.25714L23.6919 4.57612C24.1027 4.75881 24.1027 5.35653 23.6919 5.53922L22.9323 5.87708C21.9445 6.31641 21.1529 7.11947 20.7134 8.12811ZM10 3H14V5H10C6.68629 5 4 7.68629 4 11C4 14.61 6.46208 16.9656 12 19.4798V17H14C17.3137 17 20 14.3137 20 11H22C22 15.4183 18.4183 19 14 19V22.5C9 20.5 2 17.5 2 11C2 6.58172 5.58172 3 10 3Z"></path>
                    </svg>
                  </button>

                  {/* share btn  */}

                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z"></path>
                    </svg>
                  </button>
                </div>

                {/* save btn */}
                <div className="right">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default AllPost;
