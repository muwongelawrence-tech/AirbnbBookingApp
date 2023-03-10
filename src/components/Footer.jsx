import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {
  HiOutlinePhoneOutgoing,
  HiOutlinePhoneIncoming,
  HiOutlineMail,
} from "react-icons/hi";

function Footer() {
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let time = `${date}/${month}/${year}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 pl-16 pr-16 py-14 bg-gray-800 text-gray-100">
      <div className="space-y-4 text-sm">
        <h5 className="font-bold"> MISSION </h5>

        <h5 className=" w-full  text-left">
          To Provide knowledge at the relatively, advocate{" "}
          for the green world planet and charity works through involving
          the communities
        </h5>

        <h5 className="my-2 text-sm justify-self-center md:justify-self-start">
          {" "}
          Follow us on .....
        </h5>
        <ul className="flex space-x-3 cursor-pointer justify-self-center md:justify-self-start">
          <li>
            <a href="https://facebook.com">
              <FacebookIcon />
            </a>
          </li>

          <li>
            <a href="https://twitter.com">
              <TwitterIcon />
            </a>
          </li>

          <li>
            <a href="https://instagram.com">
              <InstagramIcon />
            </a>
          </li>

          <li>
            <a href="https://youtube.com">
              <YouTubeIcon />
            </a>
          </li>
        </ul>

        <h5 className="text-sm mt-3 justify-self-center md:justify-self-start">
          On {time}{" "}
        </h5>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="font-bold">ADDRESS</h5>
        <p>Plot 14060 kayebe Road </p>
        <p>Gayaza , Wakiso , Uganda or</p>
        <p>Plot 32a X-ray Plaza Building</p>
        <p>Old Kampala Road </p>
        <p> Central Kampala, Uganda </p>
      </div>

      <div className=" space-y-4 text-sm">
        <h2 className="font-bold">
          <LanguageIcon /> LANGUAGES{" "}
        </h2>

        <ul className="flex space-x-3 ">
          <li className="">English</li>
          <li>Luganda</li>
        </ul>

        <p className="flex space-x-4 ">
          <img
            className="my-2 h-5 w-5"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg"
            alt="flag"
          />
          <img
            className="my-2 h-5 w-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Coat_of_arms_of_Uganda.svg/1200px-Coat_of_arms_of_Uganda.svg.png"
            alt="flag"
          />
          <img
            className="my-2 h-5 w-5"
            src="data:image/png;base64,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"
            alt="flag"
          />
        </p>
      </div>

      <div className="space-y-4 text-sm">
        <h5 className="font-bold">CONTACT</h5>
        <p className=" flex items-center space-x-2">
          <HiOutlinePhoneOutgoing className="w-4 h-4 text-white" />
          <span>+447399086652</span>
        </p>
        <p className=" flex items-center space-x-2">
          <HiOutlinePhoneIncoming className="w-4 h-4 text-white" />
          <span>+256 41 434 5095 </span>
        </p>
        <p className=" flex items-center space-x-2">
          <HiOutlineMail className="w-4 h-4 text-white" />
          <span>Admin@infinitefoundation.com</span>
        </p>
      </div>

      <div className="mt-2 col-span-full text-center text-sm md:text-base mb-2">
        Copyright &copy;
        <span>{year}</span>
        All rights reserved | cc Uganda
      </div>
      
    </div>
  );
}

export default Footer;
