import React, { useContext } from 'react';
import styles from './Button.module.scss';
import { ThemeContext } from '../../context/ThemeContext';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      {...props}
      className={styles.root}
      style={{
        backgroundColor: theme.primary_color,
        color: theme.secondary_color,
      }}
    />
  );
};

export default Button;
