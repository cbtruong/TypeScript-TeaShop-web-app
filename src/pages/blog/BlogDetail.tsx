import { useState } from "react";
import { LuDot } from "react-icons/lu";

const BlogDetail = () => {
  const [onEdit, setOnEdit] = useState(false);

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
          <div className="mt-10 py-10 px-14 border border-gray relative">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
