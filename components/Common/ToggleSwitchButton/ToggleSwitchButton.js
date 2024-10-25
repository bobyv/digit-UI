import React from "react";
import style from "./ToggleSwitchButton.module.scss";

function ToggleSwitchButton(props) {
  const {
    changeStyle,
    buttonText,
    buttonType,
    iconName,
    isAnchor,
    key,
    seopath,
  } = props;
  return (
    <div className={`${style["toggle-box"]}`}>
      <label className={`${style["switch"]}`}>
        <input type="checkbox" />
        <span className={`${style["slider"]} ${style["round"]}`}></span>
      </label>
      {buttonText}
    </div>
  );
}

ToggleSwitchButton.propTypes = {};
ToggleSwitchButton.defaultProps = {
  changeStyle: "default",
  buttonText: "",
  iconName: "grayShareIcon",
  isAnchor: false,
  key: "",
  seopath: "",
};

export default ToggleSwitchButton;
