import BlogItem from "../../components/blog";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="my-[4rem] flex flex-col mx-10">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-h3 font-extra">All post</h3>
        <button><i className='bx bx-search text-h3'></i></button>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-4">
        <Link to='/blog/:id'>
          <BlogItem />
        </Link>
      </div>
    </div>
  );
};

export default Blog;