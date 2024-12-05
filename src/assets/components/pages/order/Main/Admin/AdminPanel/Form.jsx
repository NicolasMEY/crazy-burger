import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput"
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";

const Form = React.forwardRef(({product, onSubmit, onChange, children}, ref) =>  {

const inputTexts = getInputTextsConfig(product)


  return (
  <FormStyled onSubmit={onSubmit}>
<ImagePreview imageSource={product.imageSource} title={product.title}/>
    < div 
    className= "input-fields">
    {inputTexts.map((input) => (
    <TextInput 
    key={(input.id)} {...input} 
    onChange={onChange} 
    version="minimalist" 
    ref={ref && input.name === "title" ? ref : null}
    />))}
    </div>
    <div className="form-footer">{children}</div>
    </FormStyled>
  )
})

export default Form

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  gap: 8px 20px;

  .input-fields {
    grid-area: 1 / 2 / 4 / 3 ;
    display: grid;
    grid-row-gap: 8px;
    /* grid-template-columns: 1fr;
    grid-template-rows:repeat(3, 1fr) ; */
  }
  
    .form-footer {
    grid-area: 4 / 2 / 5 / 3 ;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
  
`;
