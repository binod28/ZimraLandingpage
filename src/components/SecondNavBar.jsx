import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { navbardata } from "../utils/navbardata";
const SecondNavBar = () => {
  const [hoverItem, setHoverItem] = useState(null);

  return (
    <>
      <div className="nav-container">
        <div className="nav-wrapper">
          <div>
            <img src="assets/logo/Zimra.jpg" alt="logo" className="nav-logo" />
          </div>
          <div className="nav-link-wrapper">
            <ul className="ul-container relative">
              {navbardata.map((item, index) => (
                <a href={item.link} className="drop-down e">
                  <li
                    className="li-item"
                    onMouseEnter={() => setHoverItem(index + 1)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    <p>{item.navtitle}</p>
                    {item.icon ?? item.icon}
                    {item.page ? (
                      <ul
                        className={`${
                          hoverItem === index + 1 ? "" : "hidden"
                        } dropdown-container`}
                      >
                        {item?.page.map((sub_item, key) => (
                          <li className="dropdown-li-item py-2">
                            {sub_item.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <></>
                    )}
                  </li>
                </a>
              ))}
            </ul>

            <div className="nav-btn">Get In Touch</div>
            <div className="icon">
              <IoMenu size={34} color="white" />
            </div>
          </div>
        </div>
      </div>
      <DropDown />
    </>
  );
};
const DropDown = () => {
  const [accordianIndex, setAccordianIndex] = useState(null);
  function expand(id) {
    setAccordianIndex(id);
  }
  return (
    <div className="sm-dropdown">
      <div className="sm-dropdown-container">
        {navbardata.map((item) => (
          <div className="accordian " onClick={() => expand(item.id)}>
            <p>{item.navtitle}</p>
            <MdKeyboardArrowDown size={18} color="black" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondNavBar;
