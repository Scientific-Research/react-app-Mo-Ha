import React, { ReactNode } from 'react';
import styles from './button.module.css';

interface IProps {
	children: string;
	Color?: 'primary' | 'secondary' | 'danger' | 'success';
	onClick: () => void;
}
const button = ({ children, onClick, Color = 'primary' }: IProps) => {
	return (
		// <button type="button" className={'btn btn-' + Color} onClick={onClick}>
		<button
			type="button"
			className={[styles.btn, styles['btn-' + Color]].join(' ')}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default button;
