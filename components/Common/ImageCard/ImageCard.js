import React from "react";
import style from "./ImageCard.module.scss";
import RatingCard from "../RatingCard/RatingCard";
function ImageCard({ isOverlay = false, isVideo = false }) {
  return (
      <div
        className={`${style["imagecard"]} ${
          isOverlay || isVideo ? style.overlay : ""
        }`}
      >
          <div className={style["image-holder"]}>
            <img
              src="https://static.digit.in/OTT/v2/images/khel-khel-mein-1490065.jpg"
              alt=""
            />
            <RatingCard changeStyle={'imageCard'} />
            {isOverlay && <h3 className={style.title}>English</h3>}
            {isVideo && <span className={style.videoIcon} />}
          </div>
          {isOverlay && (
            <div className={style.content}>
              <a>38605 Movies</a>
              <a>6721 Shows</a>
            </div>
          )}
          {isVideo && (
            <div className={`${style.content} ${style.video}`}>
              <a>Bhool Bhulaiyaa 3</a>
            </div>
          )}
          {!isOverlay && !isVideo && (
            <>
              <h4><a href="#">Khel Khel Mein (खेल खेल में)</a></h4>
              <a className={style.platform} href="#">Netflix</a>
            </>
          )}
      </div>
  );
}
ImageCard.defaultProps = {
  isOverlay: false,
  isVideo: false,
};
export default ImageCard;
