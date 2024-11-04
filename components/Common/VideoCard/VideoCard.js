import style from "./VideoCard.module.scss";
export default function VideoCard({ layout }) {
  return (
    <div className={`${style.card} ${style[layout]}`}>
      <div className={style.player}>
        <iframe
          width="200"
          src="https://www.youtube.com/embed/4_1AOgrEDI8?autohide=1&amp;autoplay=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.digit.in&amp;widgetid=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
      <div className={style.content}>
        <a href="#">
          MIRZAPUR Success Party I FULL HD I Ali Fazal, Farhan Akhtar, Rasika
          Dugal, Elli Avram - YouTube
        </a>
      </div>
    </div>
  );
}

VideoCard.defaultProps = {
  layout: "",
};
