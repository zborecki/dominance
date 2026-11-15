import Logo from '#/components/Logo';
import Panel from '#/components/Panel';

export default function Header() {
  return (
    <Panel className='py-6' as='header' border='bottom'>
      <Logo />
    </Panel>
  );
}
