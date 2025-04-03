import React, {useEffect} from "react";
import Button from "@/stories/Button";
import {ModalProps} from "@/types/common/modal";
import Input from "@/stories/Input";

export const Modal = (
  {
    props,
    onClose,
  }:ModalProps
) => {

  const classes = {
    overlay: `fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50`,
    containerSize: {
      sm: 'w-[328px] bg-white px-[16px]',
      md: 'w-[420px] bg-white px-[24px]',
      lg: 'w-[500px] bg-white px-[24px]',
      xl: 'w-[800px] bg-white px-[24px]'
    } as any,
    modal: {
      titleContainer: `flex justify-between items-center h-[72px] font-bold text-[20px]`,
      footerContainer: `flex py-[32px] gap-[8px]`
    },
    alert: {
      card: `bg-white p-[12px] shadow-lg`,
      body: `${props?.className} flex flex-col justify-center items-center w-[236px] min-h-[68px]`,
      title: `mt-[20px] text-lg font-semibold`,
      inner: `py-[20px] w-full text-md text-center break-keep`,
      footer: `flex justify-end space-x-2`
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (props.isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [props.isOpen, onClose]);

  if (!props.isOpen) return null;

  return (
    <div
      className={classes.overlay}
      onClick={onClose}
    >
      {props.type === 'modal' &&
        <div
          className={props.containerSize ? classes.containerSize[props.containerSize] : classes.containerSize.sm}
          onClick={(e) => e.stopPropagation()}
        >
          {props.title && <div className={classes.modal.titleContainer}>{props.title}</div>}
          {props.render && props.render()}
          {props.footer &&
            <div className={classes.modal.footerContainer}>
              {props.footer()}
            </div>
          }
        </div>
        ||
        <div
          className={classes.alert.card}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.alert.body}>
            {props.title && <h2 className={classes.alert.title}>{props.title}</h2>}
            {props.type === 'input' &&
              <div className={classes.alert.inner}>
                <Input
                  onChange={props.onChange}
                />
              </div>
            }
            {props.subscript && <div className={classes.alert.inner}>{props.subscript}</div>}
          </div>
          <div className={classes.alert.footer}>
            {props.type === "confirm" && (
              <Button
                className="w-full"
                label={props.cancelText}
                fontSize={props.fontSize}
                size={props.size}
                style="style2"
                type="button"
                onClick={onClose}
              />
            )}
            <Button
              className="w-full"
              label={props.confirmText}
              fontSize={props.fontSize}
              size={props.size}
              style="style1"
              type="button"
              onClick={() => {
                props.onConfirm?.();
                onClose();
              }}
            />
          </div>
        </div>
      }
    </div>
  )
}
