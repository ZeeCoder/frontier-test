import React from 'react';
import styles from './BooleanElement.module.scss';

type Props = Frontier.ControlledElement &
  Pick<Frontier.ElementMeta, 'required'>;

const BooleanElement = (props: Props) => {
  return <input {...props} type="checkbox" className={styles.root} />;
};

export default BooleanElement;
