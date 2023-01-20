import { React, useState, useEffect } from "react";
import logoLight from "../../images/logo-light.png";
import logoDark from "../../images/logo-dark.png";
import { ImEnter } from "react-icons/im";
import { BiChevronDown } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 10 ? setIsSticky(true) : setIsSticky(false)
    );
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky" : null}`}>
      <div className="navbar-logo">
        <img
          src={isSticky ? logoDark : logoLight}
          alt="logo"
          className="logo-img"
        />
      </div>
      <div className="navbar-items">
        <ul>
          <li>
            <a href="#">
              <span>TIZIM HAQIDA</span>
              <BiChevronDown className="navbar-icons" />
            </a>{" "}
            <ul className="dropdown">
              <li className="dropdown-items">Xizmat haqida batafsil</li>
              <li className="dropdown-items">Billing tizimi haqida <FaAngleRight /></li>
              <li className="dropdown-items">Xavfsizlik va maxfiylik</li>
              <li className="dropdown-items">Qo'shimcha ilovalarni yuklab olish</li>
              <li className="dropdown-items">FAQ</li>
              <li className="dropdown-items">Infografika</li>
              <li className="dropdown-items">Mobil ilova</li>
              <li className="dropdown-items">Axolini qamrovi diagrammasi</li>
            </ul>
          </li>
          <li>
            <a href="#">
              <span>HAMKORLARGA</span>
              <BiChevronDown className="navbar-icons" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>ABONENTLARGA</span>
              <BiChevronDown className="navbar-icons" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>BOG'LANISHLAR</span>
              <BiChevronDown className="navbar-icons" />
            </a>
          </li>
          <li>
            <a href="#">
              <span>O'Z</span>
              <BiChevronDown className="navbar-icons" />
            </a>
          </li>
        </ul>
        <button className="navbar-btn">
          <ImEnter /> XODIM UCHUN KIRISH
        </button>
      </div>
    </div>
  );
};

export default Navbar;
