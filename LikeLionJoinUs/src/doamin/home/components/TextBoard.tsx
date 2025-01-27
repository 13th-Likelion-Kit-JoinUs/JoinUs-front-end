import React from 'react';

const TextBoard: React.FC = () => {
	return (
		<div className="bg-[url('assets/img/ballon_wide.png')] w-[280px] h-[90px] bg-cover flex flex-row items-center justify-around">
			<div className="text-[15px] w-[185px] h-[40px]">
				멋쟁이사자처럼 동아리에서 초대장을 보내왔다!
			</div>
			<span className="bg-[url('assets/img/right_arrow_black.png')] rotate-90 w-[7px] h-[10px] bg-cover ml-2 mt-6"></span>
		</div>
	);
};

export default TextBoard;
