import { useThemeStore } from "../../store/useThemeStore";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 left-0 w-full z-10 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-start">
          <h1 className=" text-lg font-bold">Devfolio</h1>
        </div>
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/test_page" className="hover:text-gray-300">
                TestPage
              </a>
            </li>
            {/* <li>
              <a href="/services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
        <div className="flex-1 flex justify-end">
          <button
            onClick={toggleTheme}
            // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
            className="text-2xl ml-4"
          >
            {isDarkMode ? (
              <Icon icon="ph:moon-bold" className="text-yellow-400" />
            ) : (
              <Icon icon="ph:sun-bold" className="text-yellow-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
