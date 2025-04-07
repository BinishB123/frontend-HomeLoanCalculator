import { FaCalculator } from "react-icons/fa";
import Signup from "../components/signUp";
import Login from "../components/login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { urgentreset } from "../redux/slice";

function LoginOrSignUp({ value }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo, success, message, error, errormessage } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (userInfo?.id) {
      navigate("/");
      return;
    }
    if (success && message) {
      toast.success(message);
    }
    if (error && errormessage) {
      toast.error(errormessage);
    }
    dispatch(urgentreset());
  }, [value, success, error]);

  return (
    <>
      <div className=" w-min-screen h-auto flex">
        <div className="w-[40%] h-[740px] bg-green-400 flex flex-col ">
          <div className="w-[100%] mt-3 h-[50px]  flex  ml-4 space-x-1 ">
            <FaCalculator className=" text-4xl text-white" />
            <h1 className="pt-2 text-white font-semibold text-sm font-dm letter-spacing-2 tracking-wider">
            Home Loan Repayment Scheduler
            </h1>
          </div>
          <div className="w-[100%] h-[200px]  flex justify-center text-center  items-end mb-5">
            <h1 className=" text-white text-3xl">
              {value ==="signup"
                ? "Create Your Account and Get Started!"
                : "WELCOME BACK !"}
            </h1>
          </div>
          <div className="w-[100%]  h-[400px]  ">
            <h1 className="text-md  text-white text-center font-semibold ">
              {value ==="signup"
                ? "Sign up for HomeLoan Planner and unlock powerful tools to plan, track, and manage your home loan like a pro—EMIs made easy, savings made smarter!"
                : "Log in to HomeLoan Planner and take control of your financial journey—secure access to your personalized loan schedules and smart EMI tracking!"}
            </h1>
          </div>
        </div>
        <div className="w-[60%] h-[740px]  flex flex-col justify-center items-center   ">
          {value ==="signup" ? <Signup value={value} /> : <Login />}
        </div>
      </div>
    </>
  );
}

export default LoginOrSignUp;
