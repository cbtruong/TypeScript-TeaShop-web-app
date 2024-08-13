import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import "boxicons/css/boxicons.min.css";
import ProductShowcase from "../../components/home/productShowcase/ProductShowcase";

const Home = () => {
	return (
		<div className="relative">
			<div className="bg-cover bg-center bg-fixed bg-headerHome displayCenter flex-col pt-[323px]">
				<h1 className="text-big text-white font-small tracking-wide">
					It’s Always Tea Time
				</h1>
				<h1 className="text-bigger font-small italic text-white tracking-wide font-extra">
					With Bloom’s Herbal Tea
				</h1>
				<Button
					className={
						"text-white mt-8 mb-[200px] border-white hover:bg-darkWhite hover:border-transparent"
					}
				>
					SHOW NOW
				</Button>
			</div>
			<Header />
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
		</div>
	);
};

export default Home;
