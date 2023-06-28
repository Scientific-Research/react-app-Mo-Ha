import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	onClose: () => void;
}

const Alert = ({ children, onClose }: IProps) => {
	return (
		<div className="alert alert-primary alert-dismissible">
			{children}
			<button
				onClick={onClose}
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
	);
};

export default Alert;
