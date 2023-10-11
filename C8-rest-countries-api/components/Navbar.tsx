import ToggleTheme from '../helpers/ToggleTheme';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <section className="dark:bg-DarkBlueDM bg-White shadow text-lg">
      <nav className="flex justify-between items-center">
        <li className="font-bold list-none text-xl">
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