import React from 'react';
import styles from './Element.module.scss';
import TextElement from '../elements/TextElement/TextElement';
import TextAreaElement from '../elements/TextAreaElement/TextAreaElement';
import MultichoiceElement from '../elements/MultichoiceElement/MultichoiceElement';
import BooleanElement from '../elements/BooleanElement/BooleanElement';

type ElementProps = Frontier.Element &
  Frontier.ControlledElement & {
    onChange: React.ChangeEventHandler;
    value?: string | boolean;
    error?: string;
  };

const Element = ({ error, ...props }: ElementProps) => {
  const renderElement = () => {
    const { metadata } = props;

    // Could probably make TS infer types based on a property value.
    if (props.type === 'textarea') {
      return (
        <TextAreaElement
          id={props.id}
          required={metadata.required}
          placeholder={metadata.placeholder}
          format={metadata.format}
          pattern={metadata.pattern}
          onChange={props.onChange}
        />
      );
    } else if (props.type === 'multichoice') {
      const options = metadata.options || [];
      return (
        <MultichoiceElement
          id={props.id}
          required={metadata.required}
          placeholder={metadata.placeholder}
          options={options}
          onChange={props.onChange}
        />
      );
    } else if (props.type === 'boolean') {
      return (
        <BooleanElement
          id={props.id}
          required={metadata.required}
          onChange={props.onChange}
        />
      );
    }

    return (
      <TextElement
        id={props.id}
        required={metadata.required}
        placeholder={metadata.placeholder}
        format={metadata.format}
        pattern={metadata.pattern}
        step={metadata.step}
        onChange={props.onChange}
      />
    );
  };

  return (
    <div className={styles.root}>
      <label htmlFor={props.id} className={styles.label}>
        {props.question_text}
      </label>
      {error ? <div className={styles.error}>{error}</div> : null}
      {renderElement()}
    </div>
  );
};

export default Element;
