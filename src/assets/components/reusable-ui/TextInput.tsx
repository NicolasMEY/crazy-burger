import React, { JSX } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

type TextInputVersion =  "normal" | "minimalist"


type TextInputProps =  {
  onChange? : React.ChangeEventHandler<HTMLInputElement>,
  Icon : JSX.Element, 
  className? : string, 
  version? : TextInputVersion,
  ...extraProps : unknown
}

 const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({
    onChange, Icon, className, version = "normal", ...extraProps} : TextInputProps, ref) =>  {
  return (
    <TextInputStyled className={className} version={version} >
         <div className="icon">{Icon && Icon}</div>
            <input ref={ref}
              onChange={onChange}
              type="text"
              {...extraProps}
            />
          </TextInputStyled>
  )
})

type TextInputStyledProps = { version : TextInputVersion}

export default  TextInput


const TextInputStyled = styled.div<TextInputStyledProps>`
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    /* padding: 18px 24px;  */
  
  .icon {
    display: flex;
    font-size: ${theme.fonts.SM};
    margin: 0 13px 0 8px ;
    /* justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark}; */
  }

  input {
    border: none;
    font-size: ${theme.fonts.SM};
    width: 100%;
  
  &::placeholder {
    color: ${theme.colors.greyMedium};
  }
}

/* ${(props) => {
if (props.version === "normal") return  extraNormalStyle
if (props.version === "minimalist") return extraMinimalisteStyle 
}}  */

/// version dictionnaire destructurée ⤵️
${({version}) => extraStyle[version]}
`

const extraNormalStyle = css`
background:  ${theme.colors.white};
padding: 18px 28px;
color: ${theme.colors.greySemiDark};

input {
  color: ${theme.colors.dark};


&::placeholder{
  background-color: ${theme.colors.white};
}
}
`

const extraMinimalisteStyle = css`
background:  ${theme.colors.background_white};
padding: 8px 16px;
color: ${theme.colors.greyBlue};

input {
  background-color: ${theme.colors.background_white};
  color: ${theme.colors.dark};


&:focus {
  outline: 0;
}
}
`

const extraStyle = {
  normal: extraNormalStyle,
  minimalist: extraMinimalisteStyle,
}

