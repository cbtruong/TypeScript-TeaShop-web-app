import "boxicons/css/boxicons.min.css";
import ProductShowcase from "../../components/home/productShowcase/ProductShowcase";

const Home = () => {
  return (
    <>
      <ProductShowcase />
      <div className="text-center bg-cover bg-fixed bg-center bg-[url('./assets/bg_blog.jpg')] cursor-pointer">
        <h1 className="py-48 font-extra text-white text-h1 italic font-tiny">
          Read Our Blog
        </h1>
      </div>
      <div className="text-center bg-cover bg-fixed bg-center bg-black cursor-pointer displayCenter flex-col">
        <h1 className="pt-32 pb-4 w-[45%] font-extra text-white text-h2 italic font-tiny">
          “I'm a testimonial. Click to edit me and add text that says
          something nice about you and your services.”
        </h1>
        <p className="pb-32 text-white font-[200] tracking-wide">
          Ella Davidson
        </p>
      </div>

      <div className="text-center bg-cover bg-fixed bg-center  cursor-pointer">
        <h1 className="py-48 font-extra text-black text-h1 italic font-tiny">
          Read Our Blog
        </h1>
      </div>
    </>
  );
};

export default Home;
