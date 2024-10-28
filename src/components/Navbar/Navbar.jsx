import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' }
      ];

    return (
        <nav className="text-black bg-yellow-400 ">
           <div className="md:hidden" onClick={()=> setOpen(!open)}>
            {
                open === true 
                ?
                <MdClose></MdClose>
                 :
                  <CiMenuBurger></CiMenuBurger>
            }
           
           </div>
            <ul className={`md:flex duration-1000 md:static bg-yellow-400
                 absolute ${open ? 'top-16' : '-top-60'}  px-6 shadow-lg`}>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;