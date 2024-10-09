import "./Product.css";
import Button from "../button/Button";
import { useState } from "react";
import { Modal } from "antd";
import ProductQuickView from "../../pages/Product/ProductQuickView";
import { Link } from "react-router-dom";
interface ProductProps {
	title: string;
	price: number;
	image: string;
	image_hover: string;
	isShowButton?: boolean;
	pathname: string;
}

const Product: React.FC<ProductProps> = ({ pathname, ...props }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	return (
		<>
			<div className="w-full product-swapper cursor-pointer">
				<Link
					to={pathname}
					className="w-[24%] product-swapper cursor-pointer space-x-1"
				>
					<div className="w-[100%] relative overflow-hidden">
						<img className="productImg" src={props.image} alt="" />
						<img
							className="productImg_tea hidden absolute top-0 left-0"
							src={props.image_hover}
							alt=""
						/>
						<div
							className="absolute  w-[100%] bottom-[-60px] z-10 bg-[rgba(255,255,255,0.3)] 
                        text-center font-small py-4 shows transitionMain"
						>
							<button
								className="border-none p-0 m-0"
								onClick={() => {
									setIsOpenModal(true);
								}}
							>
								Xem nhanh
							</button>
						</div>
					</div>
					<h3 className="text-h2 mt-4 mb-1 text-center font-extra italic">
						{props.title}
					</h3>
					<p className=" text-center">${props.price}</p>
					{props.isShowButton && (
						<Button className="my-3 w-full bg-lightBlack hover:bg-lightGray text-white text-small border-none">
							Add to Cart
						</Button>
					)}
				</Link>
				<Modal
					open={isOpenModal}
					onCancel={() => setIsOpenModal(false)}
					cancelButtonProps={{
						className: "hidden",
					}}
					okButtonProps={{
						className: "hidden",
					}}
					width={1000}
				>
					<ProductQuickView />
				</Modal>
			</div>
		</>
	);
};

export default Product;
