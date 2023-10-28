import { Outlet } from "react-router-dom";
import { Header, Footer } from "./component/layout";

const Outets = ()=>{
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Outets;