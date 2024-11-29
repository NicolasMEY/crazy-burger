import styled from "styled-components";

export default function AddForm() {
  return <AddFormStyled>
    <div className="image-preview">ImagePreview</div>

    < div className= "input-fields">
      <input type="text" placeholder="Nom" />
    
      <input type="text" placeholder="Image URL" />
    
      <input type="text" placeholder="Prix" />
    </div> 

    <button className="submit-button">Submit button</button>
    
    </AddFormStyled>;
}

const AddFormStyled = styled.form`
  border: 5px, solid, black;
  display: grid;
  grid-template-columns: 1fr, 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background-color: blue;
    // Grid-area : coin  supérieur gauche puis coin inférieur droit et on commence toujours par la ligne
    grid-area: 1 / 1 / 4 / 2 ;
  }
  .input-fields {
    background-color: purple;
    grid-area: 1 / 2 / 4 / 3 ;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:repeat(3, 1fr) ;
  }
  .submit-button {
    background-color: green;
    grid-area: 4 / 2 / 5 / 3 ;
    width: 50%;
  }

`;
