import Logo from '#/components/Logo';
import NavigationList from '#/layouts/Header/components/NavigationList';

const Navbar = () => (
  <div className='flex items-center gap-10'>
    <Logo />
    <NavigationList
      items={[
        {
          href: '/',
          name: 'Home'
        },
        {
          href: '/link-1',
          name: 'Link #1'
        }
      ]}
    />
  </div>
);

export default Navbar;
