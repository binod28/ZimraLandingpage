import { IoIosArrowDown } from "react-icons/io";

export const navbardata = [
  {
    id: 1,
    navtitle: "Product",
    path: "/",
    icon: <IoIosArrowDown size={16} color="white" />,
    // pages: ["Octopus12", "iReporter"],
    page: [
      {
        id: 1,
        path: "/Octopus12",
        name: "Octopus12",
      },
      {
        id: 2,
        path: "/iReporter",
        name: "iReporter",
      },
    ],
  },
  {
    id: 2,
    navtitle: "Customer",
    path: "/",
    icon: <IoIosArrowDown size={16} color="white" />,
    page: [
      {
        id: 1,
        path: "/Octopus12",
        name: "Customer List",
      },
      {
        id: 2,
        path: "/iReporter",
        name: "Success stories",
      },
    ],
  },
  {
    id: 3,
    navtitle: "Technology Partner",
    path: "/",
    icon: <IoIosArrowDown size={16} color="white" />,
    page: [
      {
        id: 1,
        path: "/Octopus12",
        name: "Tele promoter",
      },
      {
        id: 2,
        path: "/iReporter",
        name: "MAM/playout/Automation",
      },
      {
        id: 2,
        path: "/iReporter",
        name: "Tele promoters",
      },
      {
        id: 2,
        path: "/iReporter",
        name: "Web CMS System",
      },
      {
        id: 2,
        path: "/iReporter",
        name: "Social Media",
      },
      {
        id: 2,
        path: "/iReporter",
        name: "AI technology",
      },
    ],
  },
  {
    id: 4,
    navtitle: "Company",
    path: "/",
    icon: <IoIosArrowDown size={16} color="white" />,
    page: [
      {
        id: 1,
        path: "/Octopus12",
        name: "Teams",
      },
      {
        id: 2,
        path: "/iReporter",
        name: "Jobs",
      },
    ],
  },
  {
    id: 5,
    navtitle: "Whats new",
    path: "/",
    icon: <IoIosArrowDown size={16} color="white" />,
    page: [
      {
        id: 1,
        path: "/Octopus12",
        name: "Event",
      },
      {
        id: 2,
        path: "/iReporter",
        name: "News",
      },
    ],
  },
  {
    id: 6,
    navtitle: "Contact",
    path: "/",
    dropdown: [],
  },
];
