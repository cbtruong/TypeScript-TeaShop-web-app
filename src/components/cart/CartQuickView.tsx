import Button from "../button/Button";
import CartQVItem from "./CartQVItem";

interface CartProps {
  onClose: () => void;
}

const CartQuickView: React.FC<CartProps> = ({ onClose }) => {
  return (
    <>
      <style>
        {`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Safari and Chrome */
        }
      `}
      </style>
      <div className="w-full h-full flex flex-col">
        <div className="flex flex-row justify-between items-center bg-black py-5">
          <button onClick={onClose} className="focus:-rotate-180 transitionMain"><i className='bx bx-chevron-right text-white text-h1'></i></button>
          <h1 className="text-h1 font-extra text-white italic">Cart</h1>
          <div className="text-black">cart</div>
        </div>
        <div className="px-10 mt-10 space-y-5 h-full overflow-y-scroll hide-scrollbar">
          <CartQVItem />
          <CartQVItem />
          <CartQVItem />
          <CartQVItem />
        </div>
        <div className="mt-auto space-y-5">
          <div className="px-10">
            <h2 className="pt-3 text-h2 font-extra italic">Total</h2>
            <p className="text-h2 font-extra">7đ</p>
          </div>
          <div className="p-10 border-t">
            <Button className='w-full bg-lightBlack hover:bg-lightGray text-white text-small border-none'>View Cart</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartQuickView;