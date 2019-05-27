import React from 'react';
import { Formiz, useFormiz } from '@formiz/core';

const Input = (props) => {
  const {
    value, setValue, errorMessage, isValid,
  } = useFormiz(props);
  const { label } = props;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block' }}>
        {label}
      </label>
      <input
        style={{ borderColor: isValid ? null : 'red' }}
        defaultValue={value}
        onChange={e => setValue(e.target.value.trim())}
      />
      {!isValid && (
        <div style={{ color: 'red' }}>
          <small>
            {errorMessage}
          </small>
        </div>
      )}
    </div>
  );
};

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isValid, setIsValid] = React.useState(true);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <Formiz
          onSubmit={handleSubmit}
          onValid={() => setIsValid(true)}
          onInvalid={() => setIsValid(false)}
        >

          <Input
            name="name"
            label="Name"
            defaultValue="john"
            validations={[
              {
                rule: x => (x || '').toLowerCase() !== 'john',
                message: 'Not john',
              },
              {
                rule: x => !!x,
                message: 'Required',
              },
            ]}
          />

          {isVisible && (
            <Input
              name="job"
              label="Job"
              validations={[
                {
                  rule: x => (x || '').toLowerCase() !== 'john',
                  message: 'Not john',
                },
                {
                  rule: x => !!x,
                  message: 'Required',
                },
              ]}
            />
          )}

          <button type="button" onClick={() => setIsVisible(!isVisible)}>
            Toggle Job
          </button>

          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </Formiz>
      </div>

      <div style={{ padding: '2rem' }}>
        <Formiz onSubmit={handleSubmit}>
          <Input name="name" label="Name" />

          <button type="submit">
            Submit
          </button>
        </Formiz>
      </div>
    </div>
  );
}

export default App;
