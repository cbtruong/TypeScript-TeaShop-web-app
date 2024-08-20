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
    <div className="m-5 flex flex-row justify-between space-x-5">
      <div className="w-1/6">
        <ProductFilter FilterByTag={true} FilterByPrice={true} FilterBySize={true} FilterByColor={false} />
      </div>
      <div className="w-5/6 flex flex-row gap-6">
        {products.map((product, index) => (
          <Product key={index + 1} {...product} isShowButton={true} pathname="/teas/product" />
        ))}
      </div>
    </div>
  );
};

export default Teas;
