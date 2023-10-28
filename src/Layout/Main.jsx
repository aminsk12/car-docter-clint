import { Outlet } from "react-router-dom";
import Footer from "../Pagess/Shared/Footer/Footer";
import Navber from "../Pagess/Shared/Navber/Navber";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;