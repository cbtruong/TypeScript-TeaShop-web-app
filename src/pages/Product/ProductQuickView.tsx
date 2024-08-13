import { Carousel, Select } from "antd";
import Button from "../../components/button/Button";
import Product1 from "../../assets/Product1.jpg";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

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

const ProductQuickView = () => {
  return (
    <div className="my-8 flex flex-row justify-between space-x-10">
      <div className="w-3/5">
        <Carousel
          arrows
          slidesToShow={1}
          slidesToScroll={1}
        >
          <div className="w-full relative">
            <img
              src={Product1}
              alt="Product1"
              className="w-full h-[70%] object-cover"
            />
          </div>
          <div className="w-full relative">
            <img
              src={Product1}
              alt="Product1"
              className="w-full h-[70%] object-cover"
            />
          </div>
        </Carousel>
      </div>
      <div className="w-2/5 space-y-5">
        <h2 className="font-extra italic text-big">Chamomile Tea</h2>
        <p className="text-normal">8đ</p>
        <p>
          SKU:1
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
  );
}

export default ProductQuickView;