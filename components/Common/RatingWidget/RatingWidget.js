import style from "./RatingWidget.module.scss";
export default function RatingWidget({}) {
  return (
    <div className={style.card}>
      <div className={style.col}>
        <img
          src="https://static.digit.in/digit_assets/images/db_rating.jpg"
          alt=""
        />
        <p>Rating</p>
        <span className={style.rating}>
          <strong>8.8</strong>
          /10
        </span>
      </div>
      <div className={style.col}>
        <h6>User</h6>
        <p>Rating</p>
        <span className={style.rating}>
          <strong>0</strong>
          /5
        </span>
      </div>
      <div className={style.col}>
        <h6>Rate this Movie</h6>
        <div className={style.starRating}>
          <input type="radio" id="5-stars" name="rating" value="5" />
          <label for="5-stars" class="star">
            ★
          </label>
          <input type="radio" id="4-stars" name="rating" value="4" />
          <label for="4-stars" class="star">
            ★
          </label>
          <input type="radio" id="3-stars" name="rating" value="3" />
          <label for="3-stars" class="star">
            ★
          </label>
          <input type="radio" id="2-stars" name="rating" value="2" />
          <label for="2-stars" class="star">
            ★
          </label>
          <input type="radio" id="1-star" name="rating" value="1" />
          <label for="1-star" class="star">
            ★
          </label>
        </div>
      </div>
    </div>
  );
}
