import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick }) => {
	return (
		<button onClick={onClick} classNameName={styles.primary}>
			{children}
		</button>
	);
};

export default Button;