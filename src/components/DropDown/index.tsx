"use client";
/* eslint-disable react/display-name */
import { FC, useRef, forwardRef, useImperativeHandle } from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

interface IDropDown {
  children: any;
  className?: string;
  config?: {
    useClick?: boolean;
    useMobileStyles?: boolean;
    useBackDrop?: boolean;
    autoClose?: boolean;
  };
  dropPosition?: "left" | "right";
}
const getParentBoundingRect = (parentRef: any) => {
  return parentRef?.current?.getBoundingClientRect();
};

export const DropDown = forwardRef((props: IDropDown, ref) => {
  const children = props.children;
  const dropDownRef = useRef<any>();
  const parentRef = useRef<any>();

  const [header, dropdown] = children;

  const handleMouseEnter = () => {
    positionDropDown();

    dropDownRef?.current?.classList.add(styles["cux--drop-down--active"]);
    parentRef?.current?.classList.add(styles["drop-down--active"]);
  };

  const handleMouseLeave = () => {
    dropDownRef.current.classList.remove(styles["cux--drop-down--active"]);
    parentRef.current.classList.remove(styles["drop-down--active"]);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    positionDropDown();

    dropDownRef?.current?.classList.toggle(styles["cux--drop-down--active"]);
    parentRef?.current?.classList.toggle(styles["drop-down--active"]);
  };

  const positionDropDown = () => {
    const parentRect = getParentBoundingRect(parentRef);
    dropDownRef.current.style.top = `${parentRect?.top + parentRect?.height}px`;

    if (parentRect?.right > window.innerWidth / 2) {
      const position = window.innerWidth - parentRect?.right;

      dropDownRef.current.style.right = `${position}px`;
      dropDownRef.current.style.left = "auto";
    } else {
      dropDownRef.current.style.left = `${parentRect?.left}px`;
      dropDownRef.current.style.right = "auto";
    }
  };

  useImperativeHandle(ref, () => ({
    open: handleMouseEnter,
    close: handleMouseLeave,
  }));

  const defaultFunc = () => {
    return;
  };

  const closeDropDown = (e: any) => {
    if (props.config?.useMobileStyles) return;

    const leavingParent = !parentRef?.current.contains(e.relatedTarget);

    if (leavingParent) {
      handleMouseLeave();
    }
  };

  const dropDownMethods = {
    onMouseEnter: props.config?.useClick ? defaultFunc : handleMouseEnter,
    onMouseLeave: props.config?.useClick ? defaultFunc : handleMouseLeave,
    onClick: props.config?.useClick ? handleClick : defaultFunc,
  };

  return (
    <>
      <div
        className={styles["cux--drop-down"]}
        tabIndex={-1}
        onBlur={closeDropDown}
        ref={parentRef}
      >
        <div
          className={[
            classnames(styles["cux--drop-down__header"], {
              [styles["cux--drop-down__header_mobile"]]:
                props?.config?.useMobileStyles,
            }),
          ].join(" ")}
          {...dropDownMethods}
        >
          {header}
        </div>
        <div
          className={[
            classnames(
              props.className,
              styles["cux--drop-down__drop_down"],
              "min-w-[250px]",
              {
                [styles["cux--drop-down__drop_down_mobile"]]:
                  props?.config?.useMobileStyles,
                "position-left": props.dropPosition === "left",
                "position-right": props.dropPosition === "right",
              }
            ),
          ].join(" ")}
          ref={dropDownRef}
        >
          {dropdown}
        </div>
      </div>
      {props.config?.useBackDrop && (
        <div className={styles["cux--drop-down__backdrop"]}></div>
      )}
    </>
  );
});

export const DropDownHeader: FC<{
  children: any;
  className?: string;
}> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const DropDownChildren: FC<{
  children: any;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={classnames(className, "w-full h-full")}>{children}</div>
  );
};
