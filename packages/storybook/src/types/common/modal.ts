import React, {ChangeEvent} from "react";

export interface ModalProps {
  props: {
    isOpen?: boolean;
    type?: 'alert' | 'confirm' | 'input' | 'modal';
    size?: 'xs' | 'sm' | 'md' | 'lg'
    fontSize?: 'xs' | 'sm' | 'lg'
    containerSize?: 'sm' | 'md' | 'lg' | 'xl'
    title?: string;
    className?: string;
    subscript?: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
    render?: () =>  React.ReactNode;
    footer?: () =>  React.ReactNode;
  }
  onClose: () => void;
}

// 🔹 Context 타입 정의
export interface ModalContextProps {
  onOpenModal: (props: ModalProps["props"]) => void;
}

