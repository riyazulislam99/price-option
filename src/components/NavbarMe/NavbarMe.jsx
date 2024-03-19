import { useState } from "react";
import Link from "../Link/Link";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const NavbarMe = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:username", name: "UserProfile" },
  ];

  return (
    <nav className="bg-orange-800">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
          open === true ? <RxCross2></RxCross2> : <MdOutlineMenu></MdOutlineMenu>
        }

      </div>
      <ul className={`md:flex bg-orange-800 gap-10 md:static absolute duration-500 ${open ? 'top-6' : '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarMe;
