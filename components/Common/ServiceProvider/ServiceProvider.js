import React from "react";
import style from "./ServiceProvider.module.scss";
function ServiceProvider() {
  return (
    <>
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
    </>
  );
}

export default ServiceProvider;
