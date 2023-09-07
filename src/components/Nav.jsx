import { Link } from 'react-router-dom';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  return (
    <nav className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
      <Link to='/'>
        <AiOutlineHome />
      </Link>
      <Link to='/about'>
        <AiOutlineUser />
      </Link>
      <Link to='/work'>
        <RiServiceLine />
      </Link>
    </nav>
  );
};

export default Nav;
