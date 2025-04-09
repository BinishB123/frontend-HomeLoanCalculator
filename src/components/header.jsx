import { FaCalculator } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutthunk } from "../redux/thunk/auth";

function Header() {
  const dispatch = useDispatch();
  const onClickLogout = () => {
    dispatch(logoutthunk());
  };

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
            onClick={onClickLogout}
          >
            Logout
          </h1>
          <button
            className="hidden sm:flex md:w-[20%] md:h-[40px] hover:border-b-2 hover:border-blue-600 rounded-sm cursor-pointer justify-center items-center text-blue-950 font-semibold text-base md:text-xl"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
