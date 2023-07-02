import React from 'react';

interface IProps {
	children: string;
	maxChars: number;
	onShort: () => void;
}

// const ExpandableText = ({ maxChars, onShort }: IProps) => {
const ExpandableText = ({ children, maxChars, onShort }: IProps) => {
	return (
		<>
			<div>
				{/* <button onClick={() => onShort()}>More</button> */}
				{/* <button>More</button> */}
				<div>{children}</div>
			</div>
		</>
	);
};

export default ExpandableText;
