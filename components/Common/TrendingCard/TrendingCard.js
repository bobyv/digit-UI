import style from "./TrendingCard.module.scss";
export default function TrendingCard({ changeStyle }) {
  console.log("changeStyle", changeStyle);
  return (
    <a
      href="#"
      className={`${style.card} ${changeStyle ? style[changeStyle] : ""}`}
    >
      <figure className={style.image}>
        <img
          src="https://static.digit.in/OTT/v2/images/khel-khel-mein-1490065.jpg"
          alt=""
        />
      </figure>
      {changeStyle !== "withoutRanking" && (
        <span className={style.rank}>#1</span>
      )}
      <div className={style.content}>
        <h4 className={style.title}>Singham 3</h4>
        <h6 className={style.category}>Action</h6>
      </div>
    </a>
  );
}
