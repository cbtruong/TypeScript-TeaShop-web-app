import { useState } from "react";
import CommentInput from "./CommentInput";
import { SubmitHandler } from "react-hook-form";

type CommentFormInputs = {
  comment: string;
};

const CommentItems = () => {
  const [onHeart, setOnHeart] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [onComment, setOnComment] = useState(false);

  const onSubmit: SubmitHandler<CommentFormInputs> = (data) => {
    console.log("Comment Submitted:", data);
  };

  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="w-11/12 flex flex-row items-center space-x-10">
          <img
            src="https://via.placeholder.com/150"
            alt="blog"
            className="w-7 h-7 rounded-[50%]"
          />
          <div className="flex flex-col">
            <p className="text-small">Nguyen Quoc Dung</p>
            <p className="text-small text-gray text-opacity-70">2 hours ago</p>
          </div>
        </div>
        <div className="w-1/12 flex flex-row justify-end">
          <button onClick={() => setOnEdit(!onEdit)}>
            <i className="bx bx-dots-vertical-rounded text-h3"></i>
          </button>
          {onEdit && (
            <div className="absolute w-[200px] top-6 right-6 bg-white shadow-lg p-2 z-10">
              <button className="flex items-center space-x-2 p-2">
                <i className="bx bx-link-alt text-h3"></i>
                <p className="text-normal font-extra">Copy link</p>
              </button>
              <span className="w-full h-[0.2px] bg-gray"></span>
              <button className="flex items-center space-x-2 p-2">
                <i className="bx bx-pencil text-h3"></i>
                <p className="text-normal font-extra">Edit</p>
              </button>
              <button className="flex items-center space-x-2 p-2">
                <i className="bx bx-trash text-h3"></i>
                <p className="text-normal font-extra">Delete</p>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="ml-16 mt-5 flex flex-col space-y-5">
        <p className="text-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          voluptates.
        </p>
        <div className="flex flex-row items-center space-x-10">
          <button onClick={() => setOnHeart(!onHeart)} className="flex flex-row space-x-2 hover:text-lightGray">
            <i className={`bx ${onHeart ? 'bxs-heart text-[red]' : 'bx-heart text-[gray]'} text-h3`}></i>
            <p className="text-normal font-extra">Like</p>
          </button>
          <button onClick={() => setOnComment(!onComment)} className="flex flex-row space-x-2 hover:text-lightGray items-center">
            <i className='bx bx-message-add text-h3'></i>
            <p className="text-normal font-extra">Reply</p>
          </button>
        </div>
        {onComment && (
          <CommentInput onSubmit={onSubmit} />
        )}
      </div>

    </div>
  );
};

export default CommentItems;
