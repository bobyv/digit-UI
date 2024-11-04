import style from "./EpisodeCard.module.scss";

export default function EpisodeCard({}) {
  return (
    <div className={style.card}>
      <h2 className={style.heading}>Jhandu</h2>
      <div className={style.details}>
        <figure className={style.image}>
          <img
            src="https://static.digit.in/digit_assets/images/digit_binge_small.jpg"
            alt="Jhandu"
          />
        </figure>
        <div className={style.content}>
          <h4 className={style.episode}>S1 E1 </h4>
          <p className={style.text}>
            A shocking incident at a wedding procession ignites a series of
            events entangling the lives of two families in the lawless city of
            Mirzapur.
          </p>
        </div>
      </div>
    </div>
  );
}
