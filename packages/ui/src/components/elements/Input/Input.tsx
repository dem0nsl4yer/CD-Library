import React from "react";
import cx from "clsx";

import InputProps from "./Input.props";
import { UI_CLASSNAME } from "../../..";
import { Icon, isIconName, isIconProps } from "..";

function Input({
  children,
  className,
  disabled,
  error,
  icon = "search",
  loading,
  tabIndex,
  ...inputHTMLProps
}: InputProps) {
  /**
   * Computes the tab index based on the props passed. If disabled, the tab
   * index will be turned off. Otherwise, either the value of `tabIndex` is
   * returned (defined or not).
   *
   * @returns The tab index value.
   */
  const computeTabIndex = () => {
    return disabled ? -1 : tabIndex;
  };

  /**
   * Computes the icon to display in the input.
   *
   * @returns The icon to display.
   */
  // BUG: error TS2746: This JSX tag's 'children' prop expects a single child
  // of type 'ReactNode', but multiple children were provided.
  // const getIcon = () => {
  //   return isIconName(icon) ? (
  //     <Icon name={icon} />
  //   ) : isIconProps(icon) ? (
  //     <Icon {...icon} />
  //   ) : (
  //     icon
  //   );
  // };

  return (
    <div
      className={cx(
        UI_CLASSNAME,
        "input",
        {
          disabled: disabled,
          error: error,
          loading: loading,
        },
        className
      )}
      {...inputHTMLProps}
    >
      <input tabIndex={computeTabIndex()} {...inputHTMLProps}>
        {children}
      </input>
      {/* BUG: error TS2746: This JSX tag's 'children' prop expects a 
      single child of type 'ReactNode', but multiple children were provided. */}
      {/* {getIcon()} */}
    </div>
  );
}

export default Input;
