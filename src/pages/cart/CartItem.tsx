import Product1 from '../../assets/Product1.jpg';

const CartItem = () => {
  return (
    <div className='flex flex-col'>
      <div className="flex flex-row justify-center space-x-5">
        <div className="w-1/2 flex flex-row space-x-8">
          <div className="w-1/3 border border-lightGray border-opacity-50">
            <div className="w-full relative">
              <img
                src={Product1}
                alt="tea"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-2/3 flex flex-col">
            <h3 className='text-normal font-extra'>Hibiscus Flower</h3>
            <p className='text-normal font-extra'>7đ</p>
            <p className='text-normal font-extra opacity-70'>Size: 125Gr</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-row">
          <div className="w-1/3">
            <div className="ml-auto border border-gray flex items-center px-1 justify-between w-fit">
              <button className="text-lightGray">-</button>
              <input
                type="text"
                value={'1'}
                className="mx-5 text-black border-none focus:outline-none focus:ring-0 w-2"
              />
              <button className="text-lightGray">+</button>
            </div>
          </div>
          <div className="w-1/3 text-end">
            <p className='text-normal font-extra'>7đ</p>
          </div>
          <div className="w-1/3 text-end text-h2 text-lightGray">
            <button><i className='bx bx-trash' ></i></button>
          </div>
        </div>
      </div>
      <span className="mt-4 w-full h-[0.2px] bg-gray"></span>
    </div>
  );
}

export default CartItem;