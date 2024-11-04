import style from "./OTTPlatform.module.scss";
export default function OTTPlatform({ size }) {
  return (
    <div className={`${style.card} `}>
      <a href="#">
        <div className={style.watch}>Watch on</div>
        <figure className={style.image}>
        <img
              src="https://static.digit.in/digit_assets/images/prime.jpg"
              alt=""
            />
        </figure>
      </a>
      <a href="#" className={style.plan}>
        View Prime Video Plan
      </a>
    </div>
  );
}
