import Button from "../components/button/Button";
import Header from "../components/header/Header";
import { useLocation, Outlet } from "react-router-dom";

const renderContent = (pathname: string) => {
  if (pathname === '/') {
    return (
      <>
        <h1 className="text-big text-white font-small tracking-wide">
          It’s Always Tea Time
        </h1>
        <h1 className="text-bigger font-small italic text-white tracking-wide font-extra">
          With Bloom’s Herbal Tea
        </h1>
        <Button
          className={
            "text-white mt-8 mb-[200px] border-white hover:bg-darkWhite hover:border-transparent"
          }
        >
          SHOW NOW
        </Button>
      </>
    );
  } else if (pathname.toLocaleLowerCase().includes('/teas') || pathname === '/cart') {
    return (
      <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
        Shop Your Favorite Tea
      </h1>
    );
  } else if (pathname.toLocaleLowerCase().includes('/extras')) {
    return (
      <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
        Shop Extras
      </h1>
    );
  } else if (pathname === '/blog') {
    return (
      <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
        Bloom's Blog
      </h1>
    );
  } else if (pathname === '/about') {
    return (
      <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
        Our Story
      </h1>
    );
  } else if (pathname === '/contact') {
    return (
      <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
        Contact Us
      </h1>
    );
  } else if (pathname === '/faq') {
    return (
      <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
        FAQ
      </h1>
    );
  } else if (pathname === '/shipping-returns') {
    return (
      <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
        Shipping & Returns
      </h1>
    );
  } else if (pathname === '/store-policy') {
    return (
      <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
        Store Policy
      </h1>
    );
  } else {
    return null;
  }
};

const UserLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="relative">
      <div className="bg-cover bg-center bg-fixed bg-headerHome flex flex-col justify-center items-center pt-[323px]">
        {renderContent(pathname)}
      </div>
      <Header />
      <Outlet />
    </div>
  );
}

export default UserLayout;