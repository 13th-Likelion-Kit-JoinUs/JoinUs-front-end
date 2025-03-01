import { BluePalm, GrayPalm } from "./Palm";

type PalmInfo = {
	progressNum: number;
};

const Palms = ({ progressNum }: PalmInfo): JSX.Element => {
	const palms = Array.from({ length: 10 }).map((_, index) => {
		const isOdd = index % 2 === 1;
		return (
			<div
				key={index}
				className={`${
					isOdd ? "mt-4" : "mb-4"
				} flex justify-center items-center`}
			>
				{index < progressNum ? <BluePalm /> : <GrayPalm />}
			</div>
		);
	});

	return <div className="flex flex-wrap justify-center">{palms}</div>;
};

export default Palms;
