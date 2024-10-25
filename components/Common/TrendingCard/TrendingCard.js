import style from "./TrendingCard.module.scss";
export default function TrendingCard({ }) {
  return (
    <a href="#" className={`${style.card}`}>
      <figure className={style.image}>
        <img
          src="https://static.digit.in/OTT/v2/images/khel-khel-mein-1490065.jpg"
          alt=""
        />
      </figure>
      <span className={style.rank}>#1</span>
      <h4 className={style.title}>Singham 3</h4>
    </a>
  );
}