type textProps = {
  text: string;
};

const TextBoard = ({ text }: textProps): JSX.Element => {
  return (
    <div className="bg-[length:100%_100%] bg-[url('assets/img/ballon_wide.png')]  w-[20rem] h-[6.4rem] flex flex-row items-center justify-center medium:w-[29rem] medium:h-[8rem] tablet:w-[35rem] tablet:h-[10rem]">
      <div className='text-[1em] w-[14rem] medium:text-[1.2em] medium:w-[16em] tablet:text-[1.4em] tablet:w-[17em]'>
        {text.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}{' '}
      </div>
      <div
        className="bg-[url('assets/img/right_arrow_black.png')]  
				rotate-90 w-[0.6rem] h-[0.9rem] bg-cover ml-10 mt-4"
      ></div>
    </div>
  );
};

export default TextBoard;
