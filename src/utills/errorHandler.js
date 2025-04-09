import { useNavigate } from "react-router";
import { toast } from "sonner";

export const handleApiError = (error, navigate, dispatch, reset) => {
  if (!error) return;
  const status = error?.status;

  switch (status) {
    case 401:
      toast.error("Unauthorized. Please login again.");
      dispatch(reset());
      localStorage.removeItem("user");
      navigate("/login");
      break;

    case 403:
      toast.error("Forbidden. You don't have permission.");
      break;

    case 404:
      toast.error("Resource not found.");
      break;

    case 500:
      toast.error("Server error. Please try again later.");
      break;

    default:
      toast.error(error.response?.data?.message || "Something went wrong!");
  }
};
