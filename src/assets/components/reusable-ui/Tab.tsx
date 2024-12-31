import styled from 'styled-components';
import { theme } from '../../theme/theme';

type tabProps = {
  label : string, 
  Icon : React.JSX.Element,
  onClick? : React.MouseEventHandler<HTMLButtonElement>,
  className? : string
} 

export default function Tab({label, Icon, onClick, className} : tabProps) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className='icon'>{Icon}</div>
    {label && <span className='label'>{label}</span>}</TabStyled>
  )
}

const TabStyled = styled.button`
  height: 43px;
  padding: 0 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;
  left: 5%;
  top: 1px;

  font-size: ${theme.fonts.P0};
  color: ${theme.colors.greySemiDark};

  background-color:${theme.colors.white} ;
  box-shadow:${theme.shadows.subtle} ;

  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  border-radius: 5px 5px 0px 0px;

  &:hover{
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }

 .icon{
display: flex;
 }

 .label{
  padding-left: 13px;
 }
`;
