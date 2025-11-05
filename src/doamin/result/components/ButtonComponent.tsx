import { useNavigate } from 'react-router-dom';
import { handleApplyClick, handleShareClick } from '../hook/HandleShareClick';

export function ButtonComponent() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex justify-center w-full '>
        <img
          src='./assets/img/left_btn.png'
          alt='Left Button'
          className='w-full max-w-[250px] small:max-w-[160px] medium:max-w-[180px] tablet:max-w-[180px] laptop:max-w-[250px] h-auto object-cover hover:cursor-pointer'
          onClick={handleApplyClick}
        />
        <img
          src='./assets/img/right_btn.png'
          alt='Right Button'
          className='w-full max-w-[250px] small:max-w-[160px] medium:max-w-[180px] tablet:max-w-[180px] laptop:max-w-[250px] h-auto object-cover hover:cursor-pointer'
          onClick={handleShareClick}
        />
      </div>
      <img
        src='./assets/img/restart_button.png'
        alt='Restart Button'
        className='w-full max-w-[500px] small:max-w-[320px] medium:max-w-[340px] tablet:max-w-[360px] laptop:max-w-[500px] h-auto object-cover hover:cursor-pointer'
        onClick={() => navigate('/')}
      />
    </div>
  );
}
