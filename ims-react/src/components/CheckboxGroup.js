import React from 'react';
import PropTypes from 'prop-types';

const InputFeedback = ({error}) =>
  error ? <div className={"input-feedback"}>{error}</div> : null;

const Checkbox = ({
  field: {name, value, onChange, onBlur},
  form: {errors, touched, setFieldValue},
  id,
  label,
  className,
  ...props
}) => {
  return (
    <span class="margin-right-60">
      <input
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className="margin-right-5"
      />
      <label htmlFor={id} className="">{label}</label>
      {touched[name] && <InputFeedback error={errors[name]} />}
    </span>
  );
};

class CheckboxGroup extends React.Component {
  handleChange = event => {
    const target = event.currentTarget;
    let valueArray = [...this.props.value] || [];

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }

    this.props.onChange(this.props.id, valueArray);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.id, true);
  };

  render() {
    const {value, error, touched, label, className, children} = this.props;

    const classes = `input-field ${className}`;

    return (
      <div className={classes}>
        <fieldset>
          <legend>{label}</legend>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              field: {
                value: value.includes(child.props.id),
                onChange: this.handleChange,
                onBlur: this.handleBlur
              }
            });
          })}
          {touched && <InputFeedback error={error} />}
        </fieldset>
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

export {CheckboxGroup, Checkbox};