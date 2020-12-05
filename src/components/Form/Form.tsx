import React, { useMemo } from 'react';
import styles from './Form.module.scss';
import Section from '../Section/Section';
import Element from '../Element/Element';
import Button from '../Button/Button';
import { useFormik } from 'formik';

const Form = ({ sections }: { sections: Frontier.Section[] }) => {
  const initialValues = useMemo(() => {
    const values: { [key: string]: string | boolean } = {};
    const sectionCount = sections.length;
    for (let i = 0; i < sectionCount; i++) {
      const contentCount = sections[i].content.length;
      for (let j = 0; j < contentCount; j++) {
        const element = sections[i].content[j];
        values[element.id] = element.type === 'boolean' ? false : '';
      }
    }

    return values;
  }, [sections]);

  const formik = useFormik({
    initialValues,
    // If html5 validation is not enough, then further validation functions
    // could be implemented here, as "validate".
    onSubmit: values => {
      console.log(values);
    },
  });

  const renderSection = (section: Frontier.Section) => {
    return (
      <Section title={section.title} key={section.id}>
        {section.content.map((element: Frontier.Element) => (
          <Element
            {...element}
            key={element.id}
            onChange={formik.handleChange}
            value={formik.values[element.id]}
            error={formik.errors[element.id]}
          />
        ))}
      </Section>
    );
  };

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      {sections.map(renderSection)}
      <div className={styles.actions}>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default Form;
