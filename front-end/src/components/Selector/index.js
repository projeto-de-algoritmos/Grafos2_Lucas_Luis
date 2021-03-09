import React from 'react';

import Select from 'react-select';

import { Container } from './styles';

const customStyles = {
  control: styles => ({
    ...styles,
    width: '160px',
    // height: '48px',
    borderRadius: '8px',
    border: 0,
    border: '1px solid lightgray',
  }),
  menu: styles => ({
    ...styles,
    width: '160px',
    borderRadius: '8px',
    
  }),
  option: styles => ({ ...styles }),
};

export default function Selector({ options, onChange, name, value, ref }) {
  const curr = options;

  const currencies = [];

  if (curr) {
    for (let i = 0; i < curr.length; i += 1) {
      currencies.push({ value: curr[i], label: curr[i] });
    }
  }

  return (
    <Container>
      <Select
        // defaultValue={{ value: name, label: name }}
        ref={ref}
        value={value}
        name={name}
        defaultValue={currencies[0]}
        styles={customStyles}
        label="Single select"
        options={currencies}
        onChange={onChange}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#639BDC',
            primary50: '#639BDC',

            primary: '#01579B',
          },
        })}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </Container>
  );
}
