import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
function tempHandler() {
  localStorage.removeItem("token");
  return redirect("/home");
}

function HomeNav() {
  return (
    <div className="navbar cust-flex md:mx-3 mt-2 h-[3rem] w-[25rem] text-[1rem] bg-gray-100 rounded-md gap-4 font-bold sticky top-0 md:text-[1.3rem] md:h-[3rem] md:w-full md:items-center">
      <div className=" logo p-1 cust-flex md:px-5 self-start md:pt-0">
        <p className="px-2">logo</p>
        <p className="hidden md:block">BiteBuzz</p>
      </div>

      <div className="flex h-8 bg-white rounded-md">
        <IoSearch className="px-2 size-9 md:size-9" />
        <input
          placeholder="Search Canteen"
          className="w-[8rem] h-7 md:w-[25rem] md:h-7 px-2 py-4 rounded-md self font-normal"
          type="text"
        />
      </div>

      <div className="cust-flex md:px-7 md:w-[30%]">
        <MdOutlineShoppingCart className="md:mx-5 size-10" />
        <p className="w-[50%]">welcome @user</p>
        <IoSettingsSharp className=" md:mx-2 md:size-7" />
        <Link onClick={tempHandler}>
          <RiLogoutCircleLine className="md:mx-2 size-7" />
        </Link>
      </div>
    </div>
  );
}

export default HomeNav;
