import Header from "../../components/header/Header";
import "boxicons/css/boxicons.min.css";
import ProductFilter from "../../components/filter/ProductFilter";
import Product from "../../components/product/Product";
import Product1 from "../../assets/Product1.jpg";
import Product1_tea from "../../assets/Product1_tea.jpg";

const Teas = () => {
	const products = [
		{
			title: "Hibiscus Flower",
			price: 20,
			image: Product1,
			image_hover: Product1_tea,
		},
		{
			title: "Hibiscus Flower",
			price: 20,
			image: Product1,
			image_hover: Product1_tea,
		},
		{
			title: "Hibiscus Flower",
			price: 20,
			image: Product1,
			image_hover: Product1_tea,
		},
		{
			title: "Hibiscus Flower",
			price: 20,
			image: Product1,
			image_hover: Product1_tea,
		},
	];

	return (
		<div className="relative">
			<div className="bg-cover bg-center bg-fixed bg-headerHome displayCenter pt-[323px]">
				<h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
					Shop Extras
				</h1>
			</div>
			<Header />
			<div className="m-5 flex flex-row justify-between space-x-5">
				<div className="w-1/6">
					<ProductFilter
						FilterByTag={true}
						FilterByPrice={true}
						FilterBySize={true}
						FilterByColor={false}
					/>
				</div>
				<div className="w-5/6 ">
					<div className="grid gap-4 grid-cols-custom">
						{products.map((product, index) => (
							<Product
								key={index + 1}
								{...product}
								isShowButton={true}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teas;
