import Panel from '#/components/Panel';
import GuestActions from '#/layouts/Header/components/GuestActions';
import Navbar from '#/layouts/Header/components/Navbar';

export default function Header() {
  return (
    <Panel
      className='py-6'
      as='header'
      border='bottom'
      classNames={{
        wrapper: 'flex items-center justify-between'
      }}
    >
      <Navbar />
      <GuestActions />
    </Panel>
  );
}
