import React from "react";
import style from "./ServiceProvider.module.scss";
import CommonGridBox from '../WrapperComponents/CommonGridBox/CommonGridBox';
function ServiceProvider() {
  return (
    <>
      <CommonGridBox
        gridType={"divGridBox"}
        changeStyle={"grid-4"}
        inLineStyle={{ gridGap: `0px 24px`, marginBottom: "38px" }}
      >
        <div className={style["items"]}>
          <div className={style["image-holder"]}>
            <a href="#">
              <img
                src="https://static.digit.in/digit_assets/images/airtel_xstream.png"
                alt=""
              />
            </a>
            <span className={style["tooltip"]}>
              <a href="#">i</a>
              <span className={style["itooltiptext"]}>
                Click here to visit the official site of Airtel Xstream.
              </span>
            </span>
          </div>
          <div className={style["details-view"]}>
            <a href="#">Movie</a>
            <a href="#">Shows</a>
          </div>
        </div>

        <div className={style["items"]}>
          <div className={style["image-holder"]}>
            <a href="#">
              <img
                src="https://static.digit.in/digit_assets/images/airtel_xstream.png"
                alt=""
              />
            </a>
            <span className={style["tooltip"]}>
              <a href="#">i</a>
              <span className={style["itooltiptext"]}>
                Click here to visit the official site of Airtel Xstream.
              </span>
            </span>
          </div>
          <div className={style["details-view"]}>
            <a href="#">Movie</a>
            <a href="#">Shows</a>
          </div>
        </div>

        <div className={style["items"]}>
          <div className={style["image-holder"]}>
            <a href="#">
              <img
                src="https://static.digit.in/digit_assets/images/airtel_xstream.png"
                alt=""
              />
            </a>
            <span className={style["tooltip"]}>
              <a href="#">i</a>
              <span className={style["itooltiptext"]}>
                Click here to visit the official site of Airtel Xstream.
              </span>
            </span>
          </div>
          <div className={style["details-view"]}>
            <a href="#">Movie</a>
            <a href="#">Shows</a>
          </div>
        </div>

        <div className={style["items"]}>
          <div className={style["image-holder"]}>
            <a href="#">
              <img
                src="https://static.digit.in/digit_assets/images/airtel_xstream.png"
                alt=""
              />
            </a>
            <span className={style["tooltip"]}>
              <a href="#">i</a>
              <span className={style["itooltiptext"]}>
                Click here to visit the official site of Airtel Xstream.
              </span>
            </span>
          </div>
          <div className={style["details-view"]}>
            <a href="#">Movie</a>
            <a href="#">Shows</a>
          </div>
        </div>
      </CommonGridBox>
    </>
  );
}

export default ServiceProvider;
