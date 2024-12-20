import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput"
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig, getSelectInputConfig } from "./inputConfig";
import SelectInput from "../../../../../reusable-ui/SelectInput";



const Form = React.forwardRef(({product, onSubmit, onChange, onFocus, onBlur, children}, ref) =>  {

const inputTexts = getInputTextsConfig(product)
const inputSelects = getSelectInputConfig(product)


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
    onFocus={onFocus}
    onBlur={onBlur}
    ref={ref && input.name === "title" ? ref : null}
    />))}
    {inputSelects.map((inputSelect) => (<SelectInput 
    {...inputSelect}
    />)) }
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
    grid-area: 1 / 2 / -2 / 3 ;

    display: grid;
    grid-row-gap: 8px;
    grid-column-gap: 8px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows:repeat(3, 1fr) ; 

    .title {
      grid-area: 1/1/2/4;
    }
    .image-source {
      grid-area: 2/1/3/4;
    }
    .price {
      background-color: red;
      grid-area: 3/1/4/2 ;
    }

    .is-available{

    }

    .is-publicised{

    }
  }
  
    .form-footer {
    grid-area: 4 / -2 / -1 / -1 ;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
  
`;
