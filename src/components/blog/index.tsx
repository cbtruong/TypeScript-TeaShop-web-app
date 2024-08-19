import { useState } from "react";

const BlogItem = () => {
  const [onHeart, setOnHeart] = useState(false);
  const [onEdit, setOnEdit] = useState(false);

  return (
    <div className="w-[450px] flex flex-col border p-5 space-y-4 relative">
      <div className="flex flex-row items-center">
        <div className="w-2/3 flex flex-row space-x-5">
          <img src="https://via.placeholder.com/150" alt="blog" className="w-9 h-9 rounded-[50%]" />
          <div className="flex flex-col">
            <p className="text-smaller">Trường CB</p>
            <p className="text-smaller">4 ngày trước</p>
          </div>
        </div>
        <div className="w-1/3 flex flex-row justify-end relative">
          <button onClick={() => setOnEdit(!onEdit)}>
            <i className='bx bx-dots-vertical-rounded text-h3'></i>
          </button>
          {onEdit && (
            <div className="absolute w-[200px] top-6 right-6 bg-white shadow-lg p-2 z-10">
              <button className="flex items-center space-x-2 p-2">
                <i className='bx bx-message-alt-add text-h3'></i>
                <p className="text-normal font-extra">Follow this article</p>
              </button>
              <span className="w-full h-[0.2px] bg-gray"></span>
              <button className="flex items-center space-x-2 p-2">
                <i className='bx bx-share text-h3'></i>
                <p className="text-normal font-extra">Share this article</p>
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-normal font-extra text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nec turpis non felis iaculis ultrices.
          Donec in nunc id nunc convallis tincidunt.
          Nulla facilisi.
          Sed auctor, justo id ultricies tincidunt,
          purus velit sollicitudin libero,
          et dictum odio nunc in libero.
          Donec in nunc id nunc convallis tincidunt.
          Nulla facilisi.
          Sed auctor, justo id ultricies tincidunt,
          purus velit sollicitudin libero,
          et dictum odio nunc in libero.
        </p>
      </div>
      <span className="w-full h-[0.2px] bg-lightGray"></span>
      <div className="flex flex-row items-center">
        <div className="w-1/2 flex flex-row space-x-3">
          <p className="text-small font-extra">0 lượt xem</p>
          <p className="text-small font-extra">0 bình luận</p>
        </div>
        <div className="w-1/2 flex flex-row justify-end">
          <button onClick={() => setOnHeart(!onHeart)}>
            <i className={`bx ${onHeart ? 'bxs-heart ' : 'bx-heart'} text-[red] text-h3`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
