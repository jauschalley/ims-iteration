import React from 'react';
import {Field} from 'formik';

const RadioButtonGroup = ({
  id, labelPrefix = '', label, value, error, touched, options, includeOther = false, disabled
}) => {
  return(
    <Group
      id={id}
      label={label}
      value={value}
      error={error}
      touched={touched}
    >
      { options.map((option) => (
        <Field
          key={`${label}-${option}`}
          component={RadioButton}
          name={id}
          id={option.value || option}
          label={`${labelPrefix}${option.label || option}`}
          disabled={disabled}
        />
      ))}
      {includeOther &&
        <div>
          <div className="margin-bottom-105">
            <Field
              key={`other-other`}
              component={RadioButton}
              name={id}
              id={'other'}
              label={'Other'}
            />
          </div>
          <Field
            key={`other-other`}
            name={id.replace('value', 'otherExplain')}
            id={'other'}
            label={'Other'}
          />
        </div>
      }
      
    </Group>
  );
};

const RadioButton = ({...props}) => {
  return (
    radioButtonHtml({...props})
  );
};

const radioButtonHtml = ({
  field: {name, value, onChange, onBlur},
  id,
  label,
  className,
  ...props
}) => (
  <label className="margin-right-60" htmlFor={`${name}-${id}`}>
    <input
      name={name}
      id={`${name}-${id}`}
      type="radio"
      value={id}
      checked={id.toString() === value.toString()}
      onChange={onChange}
      onBlur={onBlur}
      className={"usa-radio margin-right-5"}
      {...props}
    />
    <span className={`${'margin-right-105'}`}>{label}</span>
  </label>
);

const Group = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {

  return (
    <div className={className}>
      <fieldset className="no-border no-padding">
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  );
};

const InputFeedback = ({error}) =>
  error ? <div className={'test'}>{error}</div> : null;


export default RadioButtonGroup;