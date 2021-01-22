import { PopUp, ExteriorDiv, TextDiv, CloseDiv } from "../Register/style";
import { MdClose } from "react-icons/md";
const PopUpDiv = ({ isVisible, closeInfo }) => {
  return (
    <>
      <ExteriorDiv isVisible={isVisible} />
      <PopUp isVisible={isVisible}>
        <TextDiv>
          Infelizmente no momento aconteceu um erro e não estamos conseguindo
          cadastrar seu pet, por favor, tente mais tarde
        </TextDiv>
        <CloseDiv onClick={closeInfo}>
          <MdClose />
        </CloseDiv>
      </PopUp>
    </>
  );
};

export default PopUpDiv;
