import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { navbardata } from "../utils/navbardata";
const SecondNavBar = () => {
  const [hoverItem, setHoverItem] = useState(null);

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <img src="assets/logo/Zimra.jpg" alt="logo" className="nav-logo" />
        <div className="nav-link-wrapper ">
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
        </div>
      </div>
    </div>
  );
};

export default SecondNavBar;
