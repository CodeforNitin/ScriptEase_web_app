import LinkedInIcon from "../../public/assets/icons/linkedin.svg";
import EmailIcon from "../../public/assets/icons/email.svg";
import { redirect } from 'next/navigation';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            ©2024 Your Company, Inc. All rights reserved"
          </div>
          <ul className="flex justify-center items-center gap-2.5 cursor cursor-pointer">
            <li>
              <Link href="https://www.linkedin.com/in/nitinjadhav25"><LinkedInIcon/></Link>
            </li>
            <li>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=nitinanant.jadhav@gmail.com&su=Contact&body=Hello,%20I%20would%20like%20to%20get%20in%20touch." passHref><EmailIcon /></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
