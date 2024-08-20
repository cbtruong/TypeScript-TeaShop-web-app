import Facebook from "../../assets/facebook.png";
import Pinter from "../../assets/pinter.png";
import Instagram from "../../assets/instagram.png";
import CartQuickView from "../cart/CartQuickView";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const menuItems: string[] = ["Teas", "Extras", "About", "Blog", "Contact"];
  const [selectMenu, setSelectMenu] = useState<string>("");
  
  const handleMenuClick = (item: string) => {
    setSelectMenu(item);
  }
  return (
    <>
      <header
        className=" h-header w-full border-b-[1px] bg-blackHeader 
		border-white fixed  top-0 left-0 z-50"
			>
				{/* header top */}
				<div className="h-[3.375rem] border-b-[1px] border-white ">
					<div className="h-full mx-2-5 flex items-center justify-between ">
						{/*  input search */}
						<div className="h-[70%] relative flex items-center">
							<i className="bx bx-search z-10 left-3 absolute text-white font-normal "></i>
							<input
								type="text"
								className="h-full w-[200px] pl-9 outline-none  
							bg-transparent font-small text-white 
							placeholder:text-white focus:border-b-2 focus:bg-gray text-smaller transitionMain"
                placeholder="Search..."
              />
            </div>
            {/* Account */}
            <div className="flex gap-4 items-center">
              <i className="bx bxs-user px-0.5 pt-1 text-h3 cursor-pointer  bg-white rounded-full"></i>
              <Link to="/auth/login" className="text-white font-small hover:text-lightGray cursor-pointer">
                Đăng nhập
              </Link>
              <button onClick={() => setIsOpenCart(true)} className="relative cursor-pointer">
                <i className="bx bxs-cart text-h1 text-white "></i>
                <span className="top-[50%] left-[50%] absolute text-smaller font-medium translate-y-[-50%]">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

				{/* header bottom */}
				<div className="h-[4.75rem] border-b-[1px] border-white">
					<div className="h-full mx-2-5 relative">
						<ul
							className="flex gap-4 text-small text-white font-small top-[50%]
					translate-y-[-50%] absolute"
            >
              {menuItems.map((item, index) => (
                <li
                  key={index+1}
                  className={`${item === selectMenu
                    ? "text-yellow"
                    : "cursor-pointer transitionMain"
                    }`}
                >
                  <Link to={`/${item.toLowerCase()}`} onClick={() => handleMenuClick(item)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className=" absolute h-full left-[50%] translate-x-[-50%] 
					 text-white font-[200] text-h2 border-x-2 pb-1"
						>
							<h1 className="tracking-wide top-[50%] translate-y-[50%] px-8 ">
								BLOOM'S TEA
							</h1>
						</div>
						<div
							className="right-3 top-[50%]
					translate-y-[-50%] absolute text-white flex gap-5"
						>
							<img
								src={Facebook}
								alt=""
								className="cursor-pointer text-h2"
							/>
							<img
								src={Pinter}
								alt=""
								className="cursor-pointer text-h2"
							/>
							<img
								src={Instagram}
								alt=""
								className="cursor-pointer text-h2"
							/>
						</div>
					</div>
				</div>
			</header>
			{/* Sliding Cart */}
			<div
				className={`w-[350px] h-screen fixed top-0 z-50 bg-white transition-transform transform transitionMain ${
					isOpenCart ? "translate-x-0" : "translate-x-full"
				} right-0`}
			>
				<CartQuickView onClose={() => setIsOpenCart(false)} />
			</div>
		</>
	);
};

export default Header;
