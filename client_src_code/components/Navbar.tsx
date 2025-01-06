import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import auth from '../utils/auth';
import './Navbar.css';

interface MenuItem {
  label: string;
  subMenu?: MenuItem[];
  onClick?: () => void;
}

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const menuItems: MenuItem[] = [
    { label: 'Home', onClick: () => console.log('Navigating to Home') },
    {
      label: isLoggedIn ? 'Log Out' : 'Log In',
      onClick: toggleLogin,
    },
    {
      label: 'Tracking Data',
      subMenu: [
        { label: 'Symptoms to Track', onClick: () => console.log('Navigating to Symptoms to Track') },
        { label: 'View Graphs', onClick: () => console.log('Navigating to View Graphs') },
      ],
    },
    {
      label: 'Diary',
      subMenu: [
        { label: 'Add an Entry', onClick: () => console.log('Navigating to Add an Entry') },
        { label: 'View Diary Entries', onClick: () => console.log('Navigating to View Diary Entries') },
      ],
    },
    {
      label: 'About',
      subMenu: [
        { label: 'About This Program', onClick: () => console.log('Navigating to About This Program') },
        { label: 'Contact Us', onClick: () => console.log('Navigating to Contact Us') },
      ],
    },
  ];

  const renderMenu = (items: MenuItem[]) => {
    return (
      <ul className="menu">
        {items.map((item, index) => (
          <li key={index} className="menu-item">
            <span onClick={item.onClick}>{item.label}</span>
            {item.subMenu && <ul className="sub-menu">{renderMenu(item.subMenu)}</ul>}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="navigation-bar">
      {renderMenu(menuItems)}
    </nav>
  );
};

export default Navbar;
