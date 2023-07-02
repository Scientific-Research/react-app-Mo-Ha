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
				<p>
					{children.substring(0, maxChars)}...
					<button>More</button>
				</p>
				{/* <div>{children.length}</div> */}
			</div>
		</>
	);
};

export default ExpandableText;
