import{ Link } from "react-router-dom";                                     
import { HomeIcon,BarChart, Users } from "lucide-react"; 
const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const items = [
    { icon: <HomeIcon className="h-5" />, label: "Home", href: "/" },
    { icon: <BarChart className="h-5" />, label: "Admin", href: "/admin" },
    { icon: <Users className="h-5" />, label: "User", href: "/user" },
  ];

  return (
    <nav className="fixed bottom-0 right-0 w-[20%] bg-black text-white flex flex-col justify- h-screen">
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className="h-16 px-6 flex items-center gap-3 hover:bg-teal-700"
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
      <div className="px-6 py-3 text-sm text-gray-400">
        {isLoggedIn ? "Logged In" : "Guest"}
      </div>
    </nav>
  );
};
export default Navbar;
