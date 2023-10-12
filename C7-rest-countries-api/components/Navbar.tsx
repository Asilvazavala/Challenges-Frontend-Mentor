import ToggleTheme from '../helpers/ToggleTheme';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <section className="dark:bg-DarkBlueDM bg-White shadow lg:text-lg">
      <nav className="flex justify-between items-center">
        <li className="font-bold list-none text-lg lg:text-xl">
          <Link href={'/'}>
            Where in the world?
          </Link>
        </li>
        <li className='list-none'>
          <ToggleTheme />
        </li>
      </nav>
    </section>
  )
};

export default Navbar;