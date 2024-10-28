import style from "./RatingWidget.module.scss";
export default function RatingWidget({ changeStyle }) {
  return (
    <div className={`${style.ratinglist} ${style[changeStyle]}`}>
      <strong className={`${style["rating"]} ${style["progessbar-60"]}`}>
        7.8
      </strong>
      <span className={style["ratingimg"]}>
        <img
          src="https://static.digit.in/digit_assets/images/db_rating.jpg"
          alt=""
        />
      </span>
    </div>
  );
}

RatingWidget.DefaultProps = {
  changeStyle: 'test',
}
