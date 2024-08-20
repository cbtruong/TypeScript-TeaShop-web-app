import "boxicons/css/boxicons.min.css";
import Product from "../../components/product/Product";
import Product1 from "../../assets/Product1.jpg";
import Product1_tea from "../../assets/Product1_tea.jpg";
import Button from "../../components/button/Button";
import { Carousel, Select } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const ProductDetail = () => {
  const sizeOptions = [
    {
      label: "125Gr",
      value: "125Gr",
    },
    {
      label: "200Gr",
      value: "200Gr",
    },
    {
      label: "300Gr",
      value: "300Gr",
    },
  ];

  const products = [
    {
      title: "Hibiscus Flower 1",
      price: 20,
      image: Product1,
      image_hover: Product1_tea,
    },
    {
      title: "Hibiscus Flower 2",
      price: 20,
      image: Product1,
      image_hover: Product1_tea,
    },
    {
      title: "Hibiscus Flower 3",
      price: 20,
      image: Product1,
      image_hover: Product1_tea,
    },
    {
      title: "Hibiscus Flower 4",
      price: 20,
      image: Product1,
      image_hover: Product1_tea,
    },
    {
      title: "Hibiscus Flower 5",
      price: 20,
      image: Product1,
      image_hover: Product1_tea,
    },
    {
      title: "Hibiscus Flower 6",
      price: 20,
      image: Product1,
      image_hover: Product1_tea,
    },
  ];

  return (
    <div className="mt-[5.5rem] mx-[400px]">
      <div className="flex flex-row justify-between">
        <p className="text-normal">Home page / Tea / Chamomile Tea</p>
        <div className="flex flex-row items-center space-x-5 text-normal">
          <button className="flex items-center">
            <i className="bx bx-chevron-left"></i>
            <span>Prev</span>
          </button>
          <p>|</p>
          <button className="flex items-center">
            <span>Next</span>
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="mt-[3rem] flex flex-row justify-center space-x-10">
        {/* product image */}
        <div className="w-3/5 flex flex-row space-x-5">
          {/* others image */}
          <div className=" flex flex-col space-y-5">
            <div className="w-14 h-14 bg-black"></div>
            <div className="w-14 h-14 bg-black"></div>
            <div className="w-14 h-14 bg-black"></div>
          </div>
          {/* main image */}
          <div className="w-full relative">
            <img
              src={Product1}
              alt="Product1"
              className="w-full h-[70%] object-cover"
            />
          </div>
        </div>
        {/* product Info */}
        <div className="w-2/5 flex flex-col space-y-5">
          <h2 className="font-extra italic text-big">Chamomile Tea</h2>
          <p className="text-normal">8đ</p>
          <p>
            I'm a product description. I'm a great place to add more details
            about your product such as sizing, material, care instructions and
            cleaning instructions.
          </p>
          <div className="space-y-3">
            <p>Size</p>
            <Select
              defaultValue="125Gr"
              className="w-full h-10 border-[1px] border-gray rounded-none"
              onChange={handleChange}
              options={sizeOptions}
            />
          </div>
          <div className="space-y-3">
            <p>Quantity</p>
            <input
              type="number"
              className="w-20 h-11 px-2 border-[1px] border-gray"
              defaultValue={1}
            />
          </div>
          <div className="space-y-2">
            <Button className="w-full p-2 border-[1px] border-[gray] text-small text-black hover:text-lightGray">
              Add to Cart
            </Button>
            <Button className="w-full p-2 bg-lightBlack hover:bg-lightGray text-white text-small border-none">
              Buy now
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-big flex flex-row justify-center space-x-10">
        <div className="space-y-3">
          <h3 className="text-h3 font-extra italic">Product Info</h3>
          <p className="text-normal text-justify">
            I'm a product detail. I'm a great place to add more information
            about your product such as sizing, material, care and cleaning
            instructions. This is also a great space to write what makes this
            product special and how your customers can benefit from this item.
          </p>
        </div>
        <div className="border-l-[1px] border-r-[1px] border-black px-10 space-y-3">
          <h3 className="text-h3 font-extra italic">
            Return & Refund Policy
          </h3>
          <p className="text-normal text-justify">
            I’m a return and refund policy. I’m a great place to let your
            customers know what to do in case they are dissatisfied with their
            purchase. Having a straightforward refund or exchange policy is a
            great way to build trust and reassure your customers that they can
            buy with confidence.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-h3 font-extra italic">Shipping Info</h3>
          <p className="text-normal text-justify">
            I'm a shipping policy. I'm a great place to add more information
            about your shipping methods, packaging and cost. Providing
            straightforward information about your shipping policy is a great
            way to build trust and reassure your customers that they can buy
            from you with confidence.
          </p>
        </div>
      </div>
      <div className="mt-[3rem] space-y-5">
        <h3 className="text-center font-extra italic text-h3">
          Other products
        </h3>
        <Carousel
          arrows
          infinite={true}
          autoplay={true}
          slidesToShow={4}
          slidesToScroll={1}
          className="w-full flex flex-row "
        >
          {products.map((product, index) => (
            <Product {...product} pathname="" key={index+1} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetail;
