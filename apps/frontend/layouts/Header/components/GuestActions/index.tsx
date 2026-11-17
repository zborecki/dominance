import Button from '#/components/Button';

const GuestActions = () => (
  <div className='flex items-center gap-3'>
    <Button label='button.sign_in' size='sm' variant='ghost' />
    <Button label='button.get_started' size='sm' />
  </div>
);

export default GuestActions;
