import React from "react";
import style from "./ImageCard.module.scss";
function ImageCard() {
  return (
    <>
      <div className={style["imagecard"]}>
        <a href="#">
          <div className={style["image-holder"]}>
            <img
              src="https://static.digit.in/OTT/v2/images/khel-khel-mein-1490065.jpg"
              alt=""
            />
            <div className={style["ratinglist"]}>
              <strong className={`${style['rating']} ${style['progessbar-60']}`}>
                7.8
              </strong>
              <span className={style["ratingimg"]}>
                <img
                  src="https://static.digit.in/digit_assets/images/db_rating.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <h4>Khel Khel Mein (खेल खेल में)</h4>
          <span>Netflix</span>
        </a>
      </div>
    </>
  );
}

export default ImageCard;
