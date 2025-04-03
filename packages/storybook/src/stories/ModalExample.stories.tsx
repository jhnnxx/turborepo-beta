import {ModalExample} from "@/stories/ModalExample";
import ModalComponent from "@/stories/ModalComponent";
import {ModalProps} from "@/types/common/modal";
import {useModal} from "@/provider/ModalProvider";
import Button from "@/stories/Button";
import {JSX} from "react";

const meta = {
  title: "Components/Modal",
  component: ModalExample,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500
      }
    }
  },
};

export default meta;

export const ConfirmAlert:{
  args: {
    onClose: () => void;
    props: {
      isOpen: boolean;
      size: string;
      subscript: string;
      cancelText: string;
      onConfirm: () => void;
      confirmText: string;
      fontSize: string;
      title: string;
      type: string
    }
  }
} = {
  args: {
    props: {
      isOpen: true,
      title: "정말 삭제하시겠습니까?",
      subscript: "이 작업은 되돌릴 수 없습니다. 이 작업은 되돌릴 수 없습니다.",
      confirmText: "확인",
      cancelText: "닫기",
      type: "confirm",
      size: 'sm',
      fontSize: 'md',
      onConfirm: () => {
        alert('실행')
      },
    },
    onClose: () => {}
  },
};

// ✅ Alert 모달
export const DefaultAlert: {
  args: {
    onClose: () => void;
    props: {
      isOpen: boolean;
      size: string;
      subscript: string;
      confirmText: string;
      fontSize: string;
      type: string,
    }
  }
} = {
  args: {
    props: {
      isOpen: true,
      subscript: "작업이 성공적으로 완료되었습니다.",
      confirmText: "확인",
      type: "alert",
      size: 'sm',
      fontSize: 'md',
    },
    onClose: () => {}
  },
};

// ✅ Input 모달
export const InputAlert: {
  args: {
    onClose: () => void;
    props: {
      isOpen: boolean;
      size: string;
      subscript: string;
      confirmText: string;
      fontSize: string;
      type: string
      onChange: (e: any) => void
    }
  }
} = {
  args: {
    props: {
      isOpen: true,
      subscript: "",
      confirmText: "확인",
      type: "input",
      size: 'sm',
      fontSize: 'md',
      onChange: (e) => {console.log(e.target.value)}
    },
    onClose: () => {}
  },
};

// ✅ Modal Component
export const RenderPropsModal:{
  args: {
    onClose: () => void;
    props: {
      isOpen: boolean;
      subscript: string;
      footer: () => JSX.Element;
      confirmText: string;
      type: string;
      title: string;
      render: () => JSX.Element;
      containerSize: string
    }
  }
} = {
  args: {
    props: {
      isOpen: true,
      type: "modal",
      title: "테스트 모달",
      subscript: '테스트 내용',
      confirmText: '확인',
      containerSize: "xl",
      render: () => <ModalComponent data={{object: null}}/>,
      footer: () => (
        <>
          <Button
            className="w-full"
            label={'확인'}
            fontSize={'sm'}
            size={'sm'}
            style="style1"
            type="button"
            onClick={() => {}}
          />
        </>
      )
    },
    onClose: () => {}
  },
}
