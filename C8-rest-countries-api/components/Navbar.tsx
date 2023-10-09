import ToggleTheme from '../helpers/ToggleTheme';

const Navbar: React.FC = () => {
  return (
    <section className="dark:bg-DarkBlueDM bg-White shadow text-lg">
      <nav className="flex justify-between items-center">
        <li className="font-bold list-none text-xl">
          Where in the world?
        </li>
        <li className='list-none'>
          <ToggleTheme />
        </li>
      </nav>
    </section>
  )
};

export default Navbar;