import React from 'react';

type message = {
	data: string;
	onClick: () => void;
};

const ChoiceBoard = ({ data, onClick }: message): JSX.Element => {
	return (
		<div
			className="bg-[url('assets/img/ballon_wide.png')] w-[300px] h-[100px] bg-cover flex flex-row items-center justify-center"
			onClick={onClick}
		>
			<span className="bg-[url('assets/img/right_arrow_black.png')] w-[7px] h-[10px] bg-cover mr-4"></span>
			<div className="text-[12px] w-[207px] h-[40px]">{data}</div>
		</div>
	);
};

export default ChoiceBoard;
