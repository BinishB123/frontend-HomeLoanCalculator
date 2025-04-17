import Header from "../components/header";
import Home from "../components/home";
import Modal from "../components/modal";
import ViewInDetailModal from "../components/viewDetailModal";
import { useLoanContext } from "../context/loanContext";

function HomePage() {
  const {view,setView,add} = useLoanContext()
  return (
   <>
    <div className="w=[100%] h-auto ">
      <Header></Header>
      <Home></Home>
    </div>
    {
      add&&(<Modal></Modal>)

    }
    {
      view&&(<ViewInDetailModal></ViewInDetailModal>)
    }
   </>
  );
}

export default HomePage;
