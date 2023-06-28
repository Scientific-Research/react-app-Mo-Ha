import { ReactNode, useState } from 'react';

interface IProps {
	// text: string;
	// children: string;
	children: ReactNode;
	onClose: () => void;
}
// const [close, setClose] = useState(false);

// const handleVisibilityClick = () => {
// 	console.log('clicked!');
// 	// setClose(true);
// };
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
