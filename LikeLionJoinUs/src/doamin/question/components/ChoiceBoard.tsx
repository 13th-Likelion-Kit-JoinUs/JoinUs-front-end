import React from 'react';

type message = {
	data: string;
	onClick: () => void;
};

const ChoiceBoard = ({ data, onClick }: message): JSX.Element => {
	return (
		<div
			className="bg-[url('assets/img/ballon_wide.png')] w-[18rem] h-[6rem] bg-cover flex flex-row items-center justify-center"
			onClick={onClick}
		>
			<span className="bg-[url('assets/img/right_arrow_black.png')] w-[0.5rem] h-[0.7rem] bg-cover mr-4"></span>
			<div className="text-[0.7em] w-[13rem] h-[2.6rem]">{data}</div>
		</div>
	);
};

export default ChoiceBoard;
