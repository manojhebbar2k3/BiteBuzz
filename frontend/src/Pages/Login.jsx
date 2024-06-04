import { useState } from "react";
import Header from "../Components/homepage/Header";
import { motion } from "framer-motion";
import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function Login() {
  const [student, setStudent] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const actionData = useActionData();

  const navigator = useNavigate();
  const isNavigating = useNavigation().state;

  function handleClick() {
    navigator("..");
  }
  useEffect(() => {
    if (actionData)
      toast.error(actionData.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  }, [actionData]);

  return (
    <>
      <Header actionData={actionData} />
      <ToastContainer limit={5} />
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <motion.div
          className="flex flex-col items-center border-2 border-gray-800 rounded-md bg-white p-8 shadow-lg relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <motion.button
            className="absolute right-0 top-0 p-2  border-l-2 border-b-2 border-stone-900 rounded-sm"
            whileHover={{ backgroundColor: "lightgreen" }}
            transition={{ type: "spring", duration: 1 }}
            onClick={handleClick}
          >
            X
          </motion.button>
          <div className="flex mb-4">
            <button
              className={`px-8 py-2 mr-2 rounded-l-md ${
                !student
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800 border-gray-800"
              }`}
              onClick={() => setStudent(false)}
              disabled={!student}
            >
              Student
            </button>
            <button
              onClick={() => setStudent(true)}
              disabled={student}
              className={`px-8 py-2 ml-2 rounded-r-md ${
                student
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800 border-gray-800"
              }`}
            >
              Canteen
            </button>
          </div>
          <Form className="flex flex-col" method="post">
            <input
              name="USN"
              type="text"
              placeholder="USN"
              className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
              required
              minLength={10}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              required
              // minLength={10}
            />
            <input
              type="text"
              name="userType"
              defaultValue={!student ? "student" : "canteen"}
              className=" hidden"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
              disabled={isNavigating === "submitting"}
            >
              {`${isNavigating === "submitting" ? "Validating..." : "Login"}`}
            </button>
          </Form>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
