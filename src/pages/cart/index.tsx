import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import "boxicons/css/boxicons.min.css";
import CartItem from "./CartItem";
import { useState } from "react";

const Cart = () => {
  const [addVoucher, setAddVoucher] = useState(false);
  const [addNote, setAddNote] = useState(false);
  return (
    <div className="relative">
      <div className="bg-cover bg-center bg-fixed bg-headerHome displayCenter pt-[323px]">
        <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
          Shop Your Favorite Tea
        </h1>
      </div>
      <Header />
      <div className="mt-[5.5rem] flex flex-row justify-center mx-[350px] mb-8 space-x-14">
        <div className="w-3/5 flex flex-col space-y-4">
          <h3 className="font-extra text-h3 italic">My cart</h3>
          <span className="w-full h-[0.2px] bg-gray"></span>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <button
            onClick={() => {
              setAddVoucher(!addVoucher);
            }}
            className="flex flex-row items-center space-x-3"
          >
            <i className="bx bx-purchase-tag text-h3"></i>
            <p className="text-normal font-extra">Enter a promotional code</p>
          </button>
          {addVoucher && (
            <div className="w-2/3 flex flex-row">
              <input
                type="text"
                placeholder="Enter your code"
                className="w-[70%] border border-gray py-1 px-2 text-normal font-extra placeholder:font-extra placeholder:text-normal"
              />
              <button className="w-[30%] border py-1 px-4 border-l-0 text-normal font-extra hover:text-lightGray hover:transitionMain">
                Apply
              </button>
            </div>
          )}
          <button
            onClick={() => {
              setAddNote(!addNote);
            }}
            className="flex flex-row items-center space-x-3"
          >
            <i className="bx bx-file text-h3"></i>
            <p className="text-normal font-extra">Add notes</p>
          </button>
          {addNote && (
            <textarea
              placeholder="Instruct? Special request? Add them here."
              className="w-2/3 border border-gray py-1 px-4 text-normal font-extra placeholder:font-extra placeholder:text-normal"
            ></textarea>
          )}
        </div>
        {/* order summary */}
        <div className="w-1/4 flex flex-col space-y-4">
          <h3 className="font-extra text-h3 italic">Order summary</h3>
          <span className="w-full h-[0.2px] bg-gray"></span>
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-extra text-h3">Total amount</h3>
            <h3 className="font-extra text-h3">28đ</h3>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-extra text-h3">Delivery</h3>
            <h3 className="font-extra text-h3">FREE</h3>
          </div>
          <h3 className="font-extra text-h3 underline decoration-1">
            VIET NAM
          </h3>
          <span className="w-full h-[0.2px] bg-gray"></span>
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-extra text-h3">Total</h3>
            <h3 className="font-extra text-h3">28đ</h3>
          </div>
          <Button className="bg-black text-white text-h3 font-extra hover:bg-gray hover:transitionMain">
            Checkout
          </Button>
          <div className="flex flex-row justify-center items-center space-x-3">
            <i className="bx bxs-lock-alt text-h3"></i>
            <p className="font-extra text-h3">Secure payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
