import React from "react";
import style from "./TitleComponent.module.scss";
import DynamicTag from "../DynamicTag/DynamicTag";
import ToggleSwitchButton from "../../ToggleSwitchButton/ToggleSwitchButton";
import CommonGridBox from "../../WrapperComponents/CommonGridBox/CommonGridBox";

function TitleComponent(props) {
  const {
    marginBottom,
    marginTop,
    titleText,
    moreButtonLink,
    titleType,
    boldText,
    changeStyle,
    isWhiteLayout,
    arrowConfig,
    isLeftRedBorder,
    viewMore,
    switchBtn,
  } = props;
  return (
    <>
      <div
        className={`${style["title-box"]} ${style[changeStyle]} ${
          viewMore ? style["flex"] : ""
        }`}
        style={{
          marginBottom: `${marginBottom}px`,
          marginTop: `${marginTop}px`,
        }}
      >
        <div className={style.flex}>
          <DynamicTag
            tag={titleType}
            boldText={boldText}
            moreButtonLink={moreButtonLink}
            style={style}
            // changeStyle={changeStyle}
            titleText={titleText}
            isWhiteLayout={isWhiteLayout}
            isLeftRedBorder={isLeftRedBorder}
          ></DynamicTag>

          {switchBtn && (
            <CommonGridBox inLineStyle={{ marginLeft: "10px", gap: "15px" }}>
              <ToggleSwitchButton buttonText="Theatrical" />
              <ToggleSwitchButton buttonText="OTT" />
            </CommonGridBox>
          )}
        </div>
        {viewMore && (
          <a href="#" className={style.viewMore}>
            {viewMore}
          </a>
        )}
      </div>
    </>
  );
}

TitleComponent.propTypes = {};
TitleComponent.defaultProps = {
  marginBottom: 20,
  titleText: "",
  moreButtonLink: "",
  titleType: "h2",
  changeStyle: "",
  isWhiteLayout: false,
  isLeftRedBorder: false,
  switchBtn: false,
};

export default TitleComponent;
