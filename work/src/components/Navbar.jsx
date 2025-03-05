import React, { useState } from 'react';
import { NavLink, replace, useNavigate ,} from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate();
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-700">
          Naukari-Hub
        </a>

        {/* Nav Items */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'hover:text-blue-500'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'hover:text-blue-500'
              }
            >
              About
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/job"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'hover:text-blue-500'
              }
            >
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'hover:text-blue-500'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Get Started Button */}
        <button
  onClick={(e) => {
    // Prevents unintended navigation issues
    navigate('/start', { replace: true });
  }}
  className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
>
  Get Started
</button>



        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/job"
            className={({ isActive }) =>
              `block ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`
            }
          >
            Contact
          </NavLink>
          <a
            href="#"
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;