import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import profile_img from "../../assets/profile_img.png";

export default function Icons() {
  return (
    <div className="icon-container">
      <Search />
      <p className="icon-children">Children</p>
      <Bell />
      <Dropdown />
    </div>
  );
}

function Sinup() {
  return <button className="login">Sign out of Netflix</button>;
}

function Search() {
  return (
    <div className="search-icon">
      <IoIosSearch />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="drop-down-icon">
      <div className="profile-drop-down-container">
        <Profile />
        <IoMdArrowDropdown />
      </div>
      <Sinup />
    </div>
  );
}

function Bell() {
  return (
    <div className="bell-icon-container">
      <FaRegBell />
    </div>
  );
}

function Profile() {
  return (
    <div>
      <div className="profile-img">
        <img src={profile_img} alt="" />
      </div>
    </div>
  );
}
