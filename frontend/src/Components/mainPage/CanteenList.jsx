/* eslint-disable react/prop-types */
// import canteenInfo from "../../assets/CanteenInfo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MainPage({ onclick }) {
  function handleCanteenClick(ind) {
    onclick(ind);
  }

  const canteenInfo = useSelector((state) => state.canteenInfo.data);
  console.log("in mainpage", canteenInfo);
  return (
    <div className="w-full md:mx-4 md:w-1/5 max-h-[89vh] p-5 text-center border-r border-green-600 box-border overflow-scroll pb-12 overflow-x-hidden">
      <h1 className="text-3xl font-bold text-green-900">Canteen List</h1>
      {canteenInfo.map((element) => {
        return (
          <>
            <div
              onClick={() => handleCanteenClick(element._id)}
              key={element._id}
              className="hidden md:flex group bg-green-200 my-4 w-full h-60  items-center justify-center flex-col rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-300 cursor-pointer border-2 border-green-900"
            >
              <img
                src={element.photo}
                alt="canteen"
                className="box-border h-40 w-48 rounded-sm transition duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-lg"
              />
              <h2 className="font-bold mt-2 text-green-900">{element.name}</h2>
            </div>
            <Link
              key={element._id + "1"}
              to={`/${element._id}`}
              className="md:hidden group bg-green-200 my-4 w-full h-60 flex items-center justify-center flex-col rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-300 cursor-pointer border-2 border-green-900"
            >
              <img
                src={element.photo}
                alt="canteen"
                className="box-border h-40 w-48 rounded-sm transition duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-lg"
              />
              <h2 className="font-bold mt-2 text-green-900">{element.name}</h2>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default MainPage;
