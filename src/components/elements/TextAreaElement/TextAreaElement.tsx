import React from 'react';
import styles from './TextAreaElement.module.scss';

type Props = Frontier.ControlledElement &
  Pick<Frontier.ElementMeta, 'required' | 'placeholder' | 'format' | 'pattern'>;

const TextAreaElement = ({ ...props }: Props) => {
  return <textarea {...props} className={styles.root} />;
};

export default TextAreaElement;
