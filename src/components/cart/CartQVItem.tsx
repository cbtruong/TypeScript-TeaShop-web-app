import Product1 from "../../assets/Product1.jpg";

const CartItem = () => {
  return (
    <div className="flex flex-row justify-center group">
      <div className="w-2/5">
        <div className="w-full relative">
          <img
            src={Product1}
            alt="Product1"
            className="w-[70%] h-[70%] object-cover"
          />
        </div>
      </div>
      <div className="w-2/5 flex flex-col">
        <p className="font-extra">Hibicus Flower</p>
        <p className="font-bold">7đ</p>
        <div className="border border-gray flex items-center px-1 justify-between w-fit">
          <button className="text-lightGray">-</button>
          <input
            type="text"
            value={'1'}
            className="mx-3 text-black border-none focus:outline-none focus:ring-0 w-2"
          />
          <button className="text-lightGray">+</button>
        </div>
      </div>
      <div className="w-1/5 text-end">
        <button className="opacity-0 group-hover:opacity-100 transitionMain"><i className='bx bx-x-circle text-h2 text-lightGray'></i></button>
      </div>
    </div>
  );
}

export default CartItem;
