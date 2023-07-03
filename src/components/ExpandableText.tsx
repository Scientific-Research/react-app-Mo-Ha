import React, { useState } from 'react';

interface IProps {
	children: string;
	maxChars: number;
	// onShort: () => void;
}

// const ExpandableText = ({ maxChars, onShort }: IProps) => {
const ExpandableText = ({ children, maxChars }: IProps) => {
	const [ExpandableButton, setExpandableButton] = useState(false);
	if (children.length <= maxChars) {
		return <p>{children}</p>;
	}
	const handleShortWords = () => {
		//when OFF/False => display 100 Words
		console.log('Clicked!');
		setExpandableButton(!ExpandableButton);
		console.log(ExpandableButton);

		// setmaxChars1({ maxChars1: 1000 });

		//when ON/True => display what the user entered already!
		//const [wordNumber, setWordNumber] = useState('false');
	};

	return (
		<>
			<p>
				{/* {ExpandableButton && children}
				{!ExpandableButton && children.substring(0, maxChars)} */}
				{ExpandableButton ? children : children.substring(0, maxChars)}
				...
				<button onClick={() => handleShortWords()}>
					{/* {ExpandableButton && <span>Less</span>}
					{!ExpandableButton && <span>More</span>} */}
					{/* {ExpandableButton ? <span>Less</span> : <span>More</span>} */}
					{ExpandableButton ? 'Less' : 'More'}
				</button>
				{/* <button onClick={() => children.substring(0,10)}>More</button> */}
				{/* <button>More</button> */}
				{/* <div>{children.length}</div> */}
			</p>
		</>
	);
};

export default ExpandableText;
