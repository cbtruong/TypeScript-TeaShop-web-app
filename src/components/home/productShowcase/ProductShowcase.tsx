import Button from '../../button/Button';
import Product from '../../product/Product';
import Product1 from "../../../assets/Product1.jpg";
import Product1_tea from "../../../assets/Product1_tea.jpg";
import './ProductShowcase.css';

const ProductShowcase = () => {
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
    <div className="my-[5.5rem] displayCenter flex-col">
      <div className="w-full displayCenter relative mb-8">
        <h2 className="font-extra italic text-h1 z-10 bg-white px-12 font-tiny">
          New Arrivals
        </h2>
        <span className="w-[65%] h-[0.2px] bg-black absolute z-0"></span>
      </div>
      <span className="font-extra italic font-thin tracking-wide w-[40%] text-h3 text-center mb-12">
        I'm a paragraph. Click here to add your own text and edit me.
        Let your users get to know you.
      </span>

      <div className=" w-[70%] grid gap-4 grid-cols-custom pb-10 mb-8 ">
        {products.map((product, index) => (
          <Product key={index} {...product} isShowButton={false} />
        ))}
      </div>

      <Button className='bg-black text-white px-14 font-small hover:bg-[rgba(0,0,0,0.6)]'>Shop All</Button>
    </div>
  );
};

export default ProductShowcase;
