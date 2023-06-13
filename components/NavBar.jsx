import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="flex justify-center space-x-5 bg-gray-400 rounded-b-md mb-10">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </nav>
  );
};
