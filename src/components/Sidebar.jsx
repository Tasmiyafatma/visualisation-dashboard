import dashboardIcon from "../assets/dashboard.png";
import rightArrow from "../assets/right-arrow.png";
import pagesIcon from "../assets/pages.png";
import cartIcon from "../assets/cart.png";
import academyIcon from "../assets/academy.png";
import logisticIcon from "../assets/logistic.png";
import emailIcon from "../assets/email.png";
import chatIcon from "../assets/chat.png";
import calendarIcon from "../assets/calendar.png";
import invoiceIcon from "../assets/invoice.png";
import userIcon from "../assets/user.png";
import lockIcon from "../assets/lock.png";
import pageIcon from "../assets/page.png";
import authenticationIcon from "../assets/authentication.png";
import dotIcon from "../assets/dot.png";
import squareIcon from "../assets/square.png";
import typographyIcon from "../assets/typography.png";
import terminalIcon from "../assets/terminal.png";
import cardIcon from "../assets/card.png";
import reactIcon from "../assets/react-native.png";
import extensionIcon from "../assets/extension.png";
import formIcon from "../assets/form.png";
import layoutIcon from "../assets/layout.png";
import shareIcon from "../assets/share.png";
import validationIcon from "../assets/clipboard.png";
import tableIcon from "../assets/table.png";

const Sidebar = () => {
  const topMenuData = [
    {
      name: "Dashboard",
      icon: dashboardIcon,
    },
    {
      name: "Pages",
      icon: pagesIcon,
    },
  ];

  const appsPagesMenuData = [
    {
      name: "Ecommerse",
      icon: cartIcon,
    },
    {
      name: "Academy",
      icon: academyIcon,
    },
    {
      name: "Logistic",
      icon: logisticIcon,
    },
    {
      name: "Email",
      icon: emailIcon,
    },
    {
      name: "Chat",
      icon: chatIcon,
    },
    {
      name: "Calendar",
      icon: calendarIcon,
    },
    {
      name: "Invoice",
      icon: invoiceIcon,
    },
    {
      name: "User",
      icon: userIcon,
    },
    {
      name: "Roles & Permissions",
      icon: lockIcon,
    },
    {
      name: "Pages",
      icon: pageIcon,
    },
    {
      name: "Authentication",
      icon: authenticationIcon,
    },
    {
      name: "Wizard Examples",
      icon: dotIcon,
    },
    {
      name: "Dialog Examples",
      icon: squareIcon,
    },
  ];

  const uiElementsMenuData = [
    {
      name: "Typography",
      icon: typographyIcon,
    },
    {
      name: "Icons",
      icon: terminalIcon,
    },
    {
      name: "Cards",
      icon: cardIcon,
    },
    {
      name: "Components",
      icon: reactIcon,
    },
    {
      name: "Extensions",
      icon: extensionIcon,
    },
  ];

  const formsTableMenuData = [
    {
        name: "Form Element",
        icon: formIcon
    },
    {
        name: "Form Layout",
        icon: layoutIcon
    },
    {
        name: "Form Wizard",
        icon: shareIcon
    },
    {
        name: "Form Validation",
        icon: validationIcon
    },
    {
        name: "Tables",
        icon: tableIcon
    }
  ]

  return (
    <div className="p-3">
      <div className="flex justify-center items-center p-2">
        <p className="text-slate-800 text-lg font-semibold">
          Data Visualisation
        </p>
      </div>
      {topMenuData.map((menu, index) => (
        <div className="flex mt-4" key={index}>
          <div className="w-1/4 flex justify-center items-center">
            <img src={menu.icon} alt="dashbaord-icon" width={24} />
          </div>
          <div className="w-2/4">
            <p className="text-gray-400 text-lg font-semibold">{menu.name}</p>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <img src={rightArrow} alt="right-arrow" width={16} />
          </div>
        </div>
      ))}
      <div className="flex justify-start items-center p-2 my-3">
        <p className="text-gray-300 text-sm font-semibold">APPS & PAGES</p>
      </div>
      {appsPagesMenuData.map((menu, index) => (
        <div className="flex mt-4" key={index}>
          <div className="w-1/4 flex justify-center items-center">
            <img src={menu.icon} alt="dashbaord-icon" width={24} />
          </div>
          <div className="w-2/4">
            <p className="text-gray-400 text-lg font-semibold">{menu.name}</p>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <img src={rightArrow} alt="right-arrow" width={16} />
          </div>
        </div>
      ))}
      <div className="flex justify-start items-center p-2 my-3">
        <p className="text-gray-300 text-sm font-semibold">UI ELEMENTS</p>
      </div>
      {uiElementsMenuData.map((menu, index) => (
        <div className="flex mt-4" key={index}>
          <div className="w-1/4 flex justify-center items-center">
            <img src={menu.icon} alt="dashbaord-icon" width={24} />
          </div>
          <div className="w-2/4">
            <p className="text-gray-400 text-lg font-semibold">{menu.name}</p>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <img src={rightArrow} alt="right-arrow" width={16} />
          </div>
        </div>
      ))}
            <div className="flex justify-start items-center p-2 my-3">
        <p className="text-gray-300 text-sm font-semibold">FORMS & TABLES</p>
      </div>
      {formsTableMenuData.map((menu, index) => (
        <div className="flex mt-4" key={index}>
          <div className="w-1/4 flex justify-center items-center">
            <img src={menu.icon} alt="dashbaord-icon" width={24} />
          </div>
          <div className="w-2/4">
            <p className="text-gray-400 text-lg font-semibold">{menu.name}</p>
          </div>
          <div className="w-1/4 flex justify-center items-center">
            <img src={rightArrow} alt="right-arrow" width={16} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
