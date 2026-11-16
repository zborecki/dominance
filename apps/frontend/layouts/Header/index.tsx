import Logo from '#/components/Logo';
import Panel from '#/components/Panel';
import NavigationList from '#/layouts/Header/components/NavigationList';

export default function Header() {
  return (
    <Panel
      className='py-6'
      as='header'
      border='bottom'
      classNames={{
        wrapper: 'flex items-center gap-10'
      }}
    >
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
          },
          {
            href: '/link-2',
            name: 'Link #2'
          }
        ]}
      />
    </Panel>
  );
}
