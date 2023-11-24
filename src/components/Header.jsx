import React from "react";
import Banner from "./Banner";
import Caption from "./Caption";

const Header = () => {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <Banner banner="Shop in style"/>
          <Caption caption="With this shop homepage templete"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
