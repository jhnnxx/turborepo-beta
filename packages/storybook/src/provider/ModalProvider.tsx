import {createContext, PropsWithChildren, useContext, useState} from "react";
import {Modal} from "@/stories/Modal";
import {ModalContextProps, ModalProps} from "@/types/common/modal";

// 🏁 초기 상태 설정
const initialModalProps: ModalProps["props"] = {};

// 🍾 모달 전역 공유
export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// 🪝 훅
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal 은 반드시 ModalProvider 내부에서 사용되어야 합니다");
  }
  return { open : context.onOpenModal };
};

// 📌 모달 상위 묶음.
export default function ModalProvider({children}:PropsWithChildren) {
  const [modalProps, setModalProps] = useState(initialModalProps);

  const onOpenModal = (props: ModalProps["props"]) => {
    setModalProps((prev) => ({ ...prev, isOpen: true, ...props }));
  };

  const onClose = () => {
    setModalProps((prev) => ({ isOpen: false }));
  };

  return(
    <ModalContext.Provider value={{ onOpenModal }} >
      {children}
      <Modal props={{...modalProps}} onClose={onClose} />
    </ModalContext.Provider>
  )
}
