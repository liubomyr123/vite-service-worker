import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import RightMenu from "./RightMenu";

export const Layout = () => {
    return (
        <>
            <Header />
            <RightMenu />
            <Outlet />
            <Footer />
        </>
    );
};