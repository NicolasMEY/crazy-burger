import React from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';

export default function SelectInput({ value, options, name, className, id, onChange, Icon, onFocus, onBlur}) {
  return (
    <SelectInputStyled className={className} > 

    {Icon && <div className='icon'>{Icon}</div>}

    <select 
    value={value} 
    name={name} 
    
    id={id}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}>
    
    {options.map(({optionValue, label}) => (
      <option key={label} value={optionValue}>{label}</option>
   
      ))}
         </select>

    </SelectInputStyled>
  )
}

const SelectInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    font-size: ${theme.fonts.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex; // Permet de centrer l'icone
  }

  select {
    background-color: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
`;



