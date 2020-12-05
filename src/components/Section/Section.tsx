import React, { ReactNode } from 'react';
import styles from './Section.module.scss';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
