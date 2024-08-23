// pages/blog/BlogDetail.tsx
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import CommentItems from "../../components/blog/CommentItem";
import CommentInput from "../../components/blog/CommentInput";
import { LuDot } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

type CommentFormInputs = {
  comment: string;
};

const BlogDetail = () => {
  const [onHeart, setOnHeart] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [onComment, setOnComment] = useState(false);

  const onSubmit: SubmitHandler<CommentFormInputs> = (data) => {
    console.log("Comment Submitted:", data);
  };

  return (
    <div className="relative">
      <div className="bg-cover bg-center bg-fixed bg-headerHome displayCenter">
        <div className="w-full mx-[450px] py-3 px-5 bg-white box-border">
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-h3 font-extra">All post</h3>
            <button>
              <i className="bx bx-search text-h3"></i>
            </button>
          </div>
          <div className="mt-10 py-10 px-14 border border-gray border-opacity-30 relative">
            <div className="absolute inset-0 bg-white opacity-35"></div>
            <div className="relative">
              <div className="flex flex-row items-center">
                <div className="w-11/12 flex flex-row items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="blog"
                    className="w-9 h-9 rounded-[50%]"
                  />
                  <p className="text-smaller">Trường CB</p>
                  <LuDot />
                  <p className="text-smaller">4 minutes before</p>
                  <LuDot />
                  <p className="text-smaller">0 minutes reading</p>
                </div>
                <div className="w-1/12 flex flex-row justify-end relative">
                  <button onClick={() => setOnEdit(!onEdit)}>
                    <i className="bx bx-dots-vertical-rounded text-h3"></i>
                  </button>
                  {onEdit && (
                    <div className="absolute w-[200px] top-6 right-6 bg-white shadow-lg p-2 z-10">
                      <button className="flex items-center space-x-2 p-2">
                        <i className="bx bx-message-alt-add text-h3"></i>
                        <p className="text-normal font-extra">
                          Follow this article
                        </p>
                      </button>
                      <span className="w-full h-[0.2px] bg-gray"></span>
                      <button className="flex items-center space-x-2 p-2">
                        <i className="bx bx-share text-h3"></i>
                        <p className="text-normal font-extra">
                          Share this article
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className="mt-10 text-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                vel quam delectus enim maxime culpa temporibus ipsa saepe itaque
                quos!
              </p>
              <div className="mt-10 border-t border-b border-gray border-opacity-30 py-4 flex flex-row items-center space-x-6">
                <i className="bx bxl-facebook text-h3"></i>
                <FaXTwitter className="text-h3" />
                <i className="bx bxl-linkedin text-h3"></i>
                <i className="bx bx-link-alt text-h3"></i>
              </div>
              <div className="mt-5 flex flex-row items-center">
                <div className="w-1/2 flex flex-row space-x-3">
                  <p className="text-small font-extra">0 views</p>
                  <button
                    onClick={() => setOnComment(!onComment)}
                    className="text-small font-extra"
                  >
                    0 comments
                  </button>
                </div>
                <div className="w-1/2 flex flex-row justify-end">
                  <button onClick={() => setOnHeart(!onHeart)}>
                    <i
                      className={`bx ${
                        onHeart ? "bxs-heart " : "bx-heart"
                      } text-[red] text-h3`}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {onComment && (
            <div className="mt-5 py-10 px-14 border border-gray border-opacity-30 relative">
              <div className="flex flex-row justify-between items-center border-b border-gray border-opacity-30 pb-5 mb-10">
                <h3 className="text-h3 font-extra italic">2 comments</h3>
                <img
                  src="https://via.placeholder.com/150"
                  alt="blog"
                  className="w-9 h-9 rounded-[50%]"
                />
              </div>
              <CommentInput onSubmit={onSubmit} />
              <div className="mt-10">
                <div className="flex flex-row items-center space-x-3">
                  <p className="text-normal">Sort by:</p>
                  <select className="outline-none">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
                <div className="mt-5 flex flex-col space-y-5">
                  <CommentItems />
                  <CommentItems />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
