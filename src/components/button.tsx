import React, { ReactNode } from 'react';

interface IProps {
	children: string;
	Color?: 'primary' | 'secondary' | 'danger' | 'success';
	onClick: () => void;
}
const button = ({ children, onClick, Color = 'primary' }: IProps) => {
	return (
		<button type="button" className={'btn btn-' + Color} onClick={onClick}>
			{children}
		</button>
	);
};

export default button;
