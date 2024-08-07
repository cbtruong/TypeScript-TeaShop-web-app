import Product1 from "../../assets/Product1.jpg";
import Product1_tea from "../../assets/Product1_tea.jpg";

import './Product.css';
const Product = () => {
	return (
		<div className="w-[24%] product-swapper cursor-pointer">
			<div className="w-[100%] relative overflow-hidden">
				<img className="productImg" src={Product1} alt="" />
        <img className="productImg_tea hidden absolute top-0 left-0" src={Product1_tea} alt="" />
				<div
					className="absolute  w-[100%] bottom-[-60px] z-10 bg-[rgba(255,255,255,0.3)] 
                        text-center font-small py-4 shows transitionMain"
				>
					<span>Xem nhanh</span>
				</div>
			</div>
			<h3 className="text-h2 mt-4 mb-1 text-center font-extra italic">
				Hibiscus Flower
			</h3>
			<p className=" text-center">7d</p>
		</div>
	);
};

export default Product;
