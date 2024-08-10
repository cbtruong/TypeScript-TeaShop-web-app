import './Product.css';
import Button from '../button/Button';
interface ProductProps {
  title: string;
  price: number;
  image: string;
  image_hover: string;
  isShowButton?: boolean;
};

const Product: React.FC<ProductProps> = ({ ...props }) => {
  return (
    <>
      <div className="w-[24%] product-swapper cursor-pointer">
        <div className="w-[100%] relative overflow-hidden">
          <img className="productImg" src={props.image} alt="" />
          <img className="productImg_tea hidden absolute top-0 left-0" src={props.image_hover} alt="" />
          <div
            className="absolute  w-[100%] bottom-[-60px] z-10 bg-[rgba(255,255,255,0.3)] 
                        text-center font-small py-4 shows transitionMain"
          >
            <span>Xem nhanh</span>
          </div>
        </div>
        <h3 className="text-h2 mt-4 mb-1 text-center font-extra italic">
          {props.title}
        </h3>
        <p className=" text-center">${props.price}</p>
        {props.isShowButton && <Button className='my-3 w-full bg-lightBlack hover:bg-lightGray text-white text-small border-none'>Add to Cart</Button>}
      </div>
    </>
  );
};

export default Product;
