import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

import { navbardata } from "../utils/navbardata";
const SecondNavBar = () => {
  const [hoverItem, setHoverItem] = useState(null);
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);

  return (
    <>
      <div className="nav-container">
        <div className="nav-wrapper">
          <div>
            <img src="assets/logo/Zimra.jpg" alt="logo" className="nav-logo" />
          </div>
          <div className="nav-link-wrapper">
            <ul className="ul-container">
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
                          hoverItem === index + 1 ? "flex" : "hidden"
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
            <div
              className="icon"
              onClick={() => setOpenDropDownMenu(!openDropDownMenu)}
            >
              <IoMenu size={34} color="white" />
            </div>
          </div>
        </div>
      </div>
      {openDropDownMenu && <DropDown />}
    </>
  );
};
const DropDown = () => {
  const [accordianIndex, setAccordianIndex] = useState({
    id: null,
    open: false,
  });
  const ref = useRef(null);
  const expand = (id) => {
    setAccordianIndex((prev) => ({
      id: prev.id === id ? null : id,
      open: !prev.open,
    }));
  };

  return (
    <div className="sm-dropdown">
      <div className="sm-dropdown-container flex flex-col">
        {navbardata.map((item) => (
          <>
            <div
              className={`accordian w-full  ${
                accordianIndex.id === item.id
                  ? "bg-[#114b91] text-white"
                  : "text-black"
              } `}
              onClick={() => expand(item.id)}
            >
              <p>{item.navtitle}</p>
              <MdKeyboardArrowDown size={18} color="black" />
            </div>
            <div
              ref={ref}
              className={`
              ${
                accordianIndex.open === true && accordianIndex.id === item.id
                  ? "h-auto"
                  : "h-[0rem]"
              }
              submenu-container transition-all ease-in-out duration-300`}
            >
              <div className="h-auto w-full flex flex-col">
                {item.page?.length > 0 ? (
                  item.page.map((item) => (
                    <div className="submenu ">
                      <p>{item.name}</p>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SecondNavBar;
