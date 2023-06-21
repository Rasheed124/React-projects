   "use client";


import Footer from "../Footer";
import NavbarMain from "./NavBarMain";
import Navbar from "./Navbar";


const Layout = (
    
   {
    children, route 
}: {
    children: React.ReactNode,

    route: string;

   
}) => {
    return (

        <div>
            { route == '/' &&  <Navbar />}
        
          {route != '/'  && route != '/about'  &&  <NavbarMain />}   

            {children}

          {route != '/' && route == '/about'  &&  <Footer />}   
        </div>
    );
}

export default Layout;
