import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Phone, Pinterest, Twitter } from "@material-ui/icons";
import React from "react";

const Footer = () => {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';
  return (

    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">Dokyung Kim</h1>
        <p>
          Quality products, great prices, and fast shipping. Shop with us and enjoy a delightful shopping experience.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <Facebook />
          </div>
          <div className={socialStyle + ` bg-orange-500`}>
            <Instagram />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <Twitter />
          </div>
          <div className={socialStyle + ` bg-red-600`}>
            <Pinterest/>
          </div>
        </div>
      </div>


      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
            <LocationOnOutlined className="text-[#8a4af3]"/>
            <p className='pl-3'>Canada, Surrey</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined className="text-[#521da8]" />
          <a href="tel:+91 8264954234">
            <p className='pl-3'>+1 7788711130</p>
            </a>
        </div>
        <div className="flex m-3">
          <EmailOutlined className="text-[#8a4af3]" />
          <a href="mailto:lazylazylazywolf@gmail.com">
            <p className='pl-3'>cdokyung@gmail.com</p>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
