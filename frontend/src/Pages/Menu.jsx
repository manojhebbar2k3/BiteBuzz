/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../store/Cart.js";

function MenuPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const canteenId = useParams().canteenId;

  function handleClick() {
    navigate("..");
  }

  useEffect(() => {
    dispatch(
      initialize({
        userID: localStorage.getItem("student"),
        canteenID: canteenId,
      })
    );
  }, [dispatch, canteenId]);

  const initialMenuItems = useLoaderData().menu;
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  function handleAdd(dishName) {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.dishName === dishName
          ? { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
          : item
      )
    );
  }

  console.log(menuItems[0]);

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="flex justify-between mb-5">
        <button
          className="py-2 px-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300"
          onClick={handleClick}
        >
          Back
        </button>
        <Link
          className="py-2 px-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300"
          to="history"
        >
          History
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-green-900 mb-10 text-center">
        Menu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {menuItems.map((item, ind) => (
          <div
            key={item._id}
            className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <img
                src={item.photo}
                alt={item.dishName}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-semibold text-green-900">
                  {item.dishName}
                </h2>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="text-green-700">
                    {item.rating.currRating}
                  </span>
                </div>
              </div>
              <p className="text-lg text-green-700 mb-4">₹{item.price}</p>
              <p className="text-green-600">{item.description}</p>
            </div>
            {!item.quantity ? (
              <button
                className="mt-4 w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300"
                onClick={() => handleAdd(item.dishName)}
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex flex-row justify-center gap-8 m-5">
                <button className="bg-green-700 hover:bg-green-800 h-8 w-10 flex justify-center items-center rounded-sm transition duration-300">
                  {" "}
                  <FaPlus className="size-3 text-white " />{" "}
                </button>
                <p> {item.quantity} </p>
                <button className="bg-green-700 hover:bg-green-800 h-8 w-10  flex justify-center items-center rounded-sm transition duration-300">
                  {" "}
                  <FaMinus className="size-3 text-white group:hover:text-black" />{" "}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
