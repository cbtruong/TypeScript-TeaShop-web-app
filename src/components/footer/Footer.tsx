//UNDONE: Add link for <a> tag, function for 'Let's Talk!' button and 'Subscribe now' button

import { FaArrowUp } from "react-icons/fa";
import Button from "../button/Button";

const Footer : React.FC = () => {
  return (
    <footer className="bg-[#E6E7EA]">
      <div className="flex px-20 pt-4">

        {/* Menu shortcut */}
        <div className="mx-20 my-10">
          <h3 className="text-3xl bold italic">Get to Know</h3>
          <h3 className="text-3xl bold italic">Bloom's Tea Better</h3>

          <ul className="text-sm my-10">
            <li>
              <a href="" className="hover:text-blue-900">Shop</a>
            </li>
            <li className="my-3">
              <a href="" className="hover:text-blue-900">Extras</a>
            </li>
            <li className="my-3">
              <a href="" className="hover:text-blue-900">About</a>
            </li>
            <li className="my-3">
              <a href="" className="hover:text-blue-900">Blog</a>
            </li>
            <li className="my-3">
              <a href="" className="hover:text-blue-900">Contact</a>
            </li>
          </ul>

          <a href="" className="text-sm my-10 underline hover:text-blue-900">Visit Our Store</a>
          <p className="text-sm my-3">Customer Service: 123-456-7890</p>
        </div>

        <div className="my-16">
          <div className="flex flex-row">
            {/* Help */}
            <div className="mx-10">
              <h3 className="text-xl italic">Help</h3>
              <hr className="my-2 w-48"/>

              <ul className="text-sm my-12">
                <li className="my-2">
                  <a href="" className="hover:text-blue-900">FAQ</a>
                </li>
                <li className="my-2">
                  <a href="" className="hover:text-blue-900">Shipping & Return</a>
                </li>
                <li className="my-2">
                  <a href="" className="hover:text-blue-900">Store Policy</a>
                </li>
                <li className="my-2">
                  <a href="" className="hover:text-blue-900">Payment Methods</a>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div className="mx-32 w-48" >
              <h3 className="text-xl italic">Follow us</h3>
              <hr className="my-2"/>

              <ul className="text-sm my-12">
                <li className="my-2">
                  <a href="" className="hover:text-blue-900">Facebook</a>
                </li>
                <li className="my-2">
                  <a href="" className="hover:text-blue-900">Instagram</a>
                </li>
                <li className="my-2">
                  <a href="" className="hover:text-blue-900">Pinterest</a>
                </li>
              </ul>
            </div>
          </div>

          { /* Email input */}
          <div className="flex flex-row mx-10 pt-10">
            <input type="text"
            className="border pl-4 h-12 w-96"
            placeholder="Enter your email here*"/>
            <Button className='mx-4 bg-lightBlack hover:bg-lightGray text-white text-small border-none'>Subscribe now</Button>
          </div>
        </div>
      </div>

      {/* Border line */}
      <div>
        <hr className="my-0.5"/>
        <hr className="border-2"/>
      </div>
      <div className="flex flex-row justify-between px-40 py-2">
        <p className="text-slate-600">@2035 by Bloom’s Tea. Powered and sercured by Wix</p>
        <a href= "" className="flex flex-row hover:text-blue-900 pr-48">
          <FaArrowUp className="pt-1 size-4"/>
          <p className="px-2">Back to top</p>
        </a>
      </div>

      {/* Floating button */}
      <div className="fixed bottom-0 right-10 p-4">
        <Button className="bg-lightBlack hover:bg-lightGray text-white text-small border-none h-16 w-72 italic">Let's Talk!</Button>
      </div>
    </footer>
  )
}

export default Footer;