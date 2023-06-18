   "use client";


import Footer from "../Footer";
import NavbarMain from "./NavBarMain";
import Navbar from "./Navbar";
import NavbarAbout from "./NavbarAbout";

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
            { route == '/about' &&  <NavbarAbout />}

          {route != '/'  && route != '/about'  &&  <NavbarMain />}   



            {children}


          {route != '/'  &&  <Footer />}   
        </div>
    );
}

export default Layout;
// const Layout = (
    
//     { children, route }) => {
//     return (

//         <div>
//             { navbarType == 1 &&  <Navbar />}
//             { navbarType == 2 &&  <NavbarAbout />}
//             { navbarType == 3 &&  <NavbarMain />}


//             {children}


//             <Footer />
//         </div>
//     );
// }

// export default Layout;