import React from "react";
import { GiTerror } from "react-icons/gi";
import { FiRefreshCw } from "react-icons/fi";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-[100%]  h-[742px] flex justify-center items-center flex-col space-y-4">
          <h2 className="flex text-4xl">
            Something went wrong <GiTerror className="text-5xl"></GiTerror>{" "}
            !!!!!!
          </h2>
          <p className="flex text-xl">
            Please try refreshing the page.{" "}
            <FiRefreshCw className="text-2xl"></FiRefreshCw>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
