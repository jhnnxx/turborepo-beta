import ModalProvider, {useModal} from "@/provider/ModalProvider";
import Button from "@/stories/Button";
import {useEffect} from "react";

const ModalButton = ({props}) => {
  const { open } = useModal()
  const onClickOpenModal = () => {
    open(props);
  };
  console.log(open)
  return (
    <>
      <Button
        className="w-[200px]"
        label={`${props.type} 모달`}
        fontSize={'sm'}
        size={'sm'}
        style="style1"
        type="button"
        onClick={() => onClickOpenModal()}
      />
    </>
  )
}

export const ModalExample = ({
    props,
    onChange
  }) => {
  return (
    <ModalProvider>
      <ModalButton props={props}/>
    </ModalProvider>
  )
}
