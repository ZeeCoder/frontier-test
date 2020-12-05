import React from 'react';
import styles from './TextElement.module.scss';

type Props = Frontier.ControlledElement &
  Pick<
    Frontier.ElementMeta,
    'required' | 'placeholder' | 'format' | 'pattern' | 'step'
  >;

const TextElement = ({ format, ...props }: Props) => {
  return <input {...props} type={format} className={styles.root} />;
};

export default TextElement;
