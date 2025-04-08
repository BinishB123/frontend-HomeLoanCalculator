import { FaCalculator } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[100%] h-[90px] bg-white flex justify-center items-center shadow-sm">
        <div className="w-[45%] h-full flex items-center space-x-2 sm:space-x-3">
          <FaCalculator className="text-2xl sm:text-3xl md:text-4xl text-blue-700" />
          <h1 className="text-blue-700 text-xs sm:text-sm md:text-base font-bold tracking-wide md:tracking-wider">
            Home Loan Repayment Scheduler
          </h1>
        </div>

        <div className="w-[50%] h-full flex justify-end items-center">
          <h1
            className="md:hidden text-md font-semibold text-blue-800"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </h1>
          <button
            className="hidden sm:flex md:w-[20%] md:h-[40px] hover:border-b-2 hover:border-blue-600 rounded-sm cursor-pointer justify-center items-center text-blue-950 font-semibold text-base md:text-xl"
            onClick={() => {
              navigate("/login");
            }}
          >
            <IoIosPerson className="text-blue-700 mt-1 mr-1" />
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
