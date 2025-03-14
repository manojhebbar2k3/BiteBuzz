/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function OrderList({ setIndex }) {
  const orderItems = useSelector((state) => state.canteen.currOrders);
  return (
    <div className="w-[20%] h-screen overflow-scroll border-2 border-green-950 bg-green-100 dark:bg-[#181818] pb-20">
      <motion.div
        className="h-fit flex gap-4 flex-col justify-center items-center"
        layout
      >
        <h1 className="text-green-900 dark:text-green-200 font-bold text-2xl mt-4">
          Order List
        </h1>

        {orderItems.length == 0 ? (
          <div className="flex justify-center items-center">
            <h1 className="dark:text-green-100 text-xl">No current Orders</h1>
          </div>
        ) : (
          orderItems.map((element, index) => {
            return (
              <motion.div
                layout
                key={index}
                onClick={() => setIndex(index)}
                initial={{ scale: [0, 1] }}
                animate={{ scale: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ mass: 4, damping: 1 }}
                className="h-fit w-[80%] flex flex-col justify-center items-center bg-green-200 dark:bg-[#282828] rounded-lg cursor-pointer transition duration-500 ease-in-out hover:bg-green-300 dark:hover:bg-[#3a3a3a] hover:text-green-900 hover:shadow-2xl group border-2 border-green-900 dark:border-green-700"
              >
                <img
                  src={element.orders[0].photo}
                  alt={`${element.name.split(" ")[0]}'s order`}
                  className="h-[5rem] w-[5rem] m-1 mt-3 rounded-md group-hover:border-[#535252] group-hover:border-2"
                />
                <div className="flex flex-col justify-center mt-2">
                  <div className="flex mx-3 w-fit h-fit justify-evenly">
                    <p className="text-[1.1rem] font-bold mx-5 text-green-900 dark:text-green-200">
                      {element.name.split(" ")[0]}
                    </p>
                    <p className="text-[1.1rem] text-green-900 dark:text-green-200">
                      {element.usn}
                    </p>
                  </div>
                  <div className="text-[1.1rem] mb-2 h-fit flex justify-center items-center">
                    <p className="text-green-900 dark:text-green-200">
                      Arrival Time :
                    </p>
                    <p className="text-green-900 dark:text-green-200 ml-1">
                      {element.arrivalTime}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </motion.div>
    </div>
  );
}

export default OrderList;
