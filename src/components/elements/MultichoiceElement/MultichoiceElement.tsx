import React from 'react';
import styles from './MultichoiceElement.module.scss';

type Props = Frontier.ControlledElement &
  Pick<Frontier.ElementMeta, 'required' | 'placeholder'> &
  Required<Pick<Frontier.ElementMeta, 'options'>>;

const MultichoiceElement = ({ options, required, ...props }: Props) => {
  return (
    <select {...props} className={styles.root} required={required}>
      {required ? null : <option value="">-</option>}
      {options.map(({ label, value }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default MultichoiceElement;
