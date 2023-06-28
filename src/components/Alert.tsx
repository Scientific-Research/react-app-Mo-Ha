import { ReactNode } from 'react';

interface IProps {
	// text: string;
	// children: string;
	children: ReactNode;
}

const Alert = ({ children }: IProps) => {
	return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
