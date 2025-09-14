import Image from "next/image";
import logo from "@/assets/logo.png";
import "./footer.scss";
import fb from "@/assets/Facebook.png";
import ln from "@/assets/Linkedin.png";
import tw from "@/assets/Twitter.png";
import { ArrowRight } from "lucide-react";
function Footer() {
  return (
    <footer className="footer padding">
      <div className="boxed">
        <div className="footer__top">
          <div className="footer__top__column">
            <div className=" footer__logo">
              <Image
                src={logo}
                alt="Fintrix Logo"
                className="footer__logo__image"
                width={36}
                height={36}
              />
              <span className="body-xl wt-500">Fintrix</span>
            </div>
            <p className="body-xl foottext">
              Track spending, grow savings, and stay in control of your money.
            </p>
            <div className="footer__socials">
              <Image
                src={fb}
                alt="Fintrix Logo"
                className="footer__socials__icon"
                width={39}
                height={39}
              />{" "}
              <Image
                src={ln}
                alt="Fintrix Logo"
                className="footer__socials__icon"
                width={39}
                height={39}
              />{" "}
              <Image
                src={tw}
                alt="Fintrix Logo"
                className="footer__socials__icon"
                width={39}
                height={39}
              />
            </div>
          </div>
          <div className="footer__top__column">
            <h3 className="body-xl wt-500">Product</h3>
            <a href="#" className="body-lg">
              Features
            </a>
            <a href="#" className="body-lg">
              Pricing
            </a>
            <a href="#" className="body-lg">
              Dashboard
            </a>
            <a href="#" className="body-lg">
              Integrations
            </a>
          </div>
          <div className="footer__top__column">
            {" "}
            <h3 className="body-xl wt-500">Company</h3>
            <a href="#" className="body-lg">
              About Us
            </a>
            <a href="#" className="body-lg">
              Careers
            </a>
            <a href="#" className="body-lg">
              Privacy Policy
            </a>
            <a href="#" className="body-lg">
              Contact Us
            </a>
          </div>
          <div className="footer__top__column">
            <h3 className="body-xl wt-500">Newsletter</h3>
            <div className="email-container">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="email-input body-m"
              />
              <button className="icon">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="footer__bottom">
          <p className="body-m">© 2025 Fintrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
