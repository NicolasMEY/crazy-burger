import styled from "styled-components";
import { theme } from "../../../../../../theme";
import {fadeIn} from "../../../../../../theme/animation"

export default function ImagePreview({imageSource, title}) {
  return (
    <ImagePreviewStyled >
      {imageSource ? (
      <img src={imageSource} alt={title} /> ) : (
      <div className="empty-image" >Aucune image</div>)}
    </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
    // Grid-area : coin  supérieur gauche puis coin inférieur droit et on commence toujours par la ligne
    grid-area: 1 / 1 / 4 / 2 ;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100px; // essayer avec 100%
      height: 100px; // essayer avec 100%
      object-fit: contain;
      object-position: center;
      animation: ${fadeIn} 1s;
    }
 
    .empty-image {
      height: 100%; 
      width: 100%; 
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greyLight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
      }
`;
