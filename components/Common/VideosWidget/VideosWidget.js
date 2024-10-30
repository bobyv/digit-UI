import VideoCard from "../VideoCard/VideoCard";
import style from "./VideosWidget.module.scss";

export default function VideosWidget({}) {
  return (
    <div className={style.card}>
      <div className={style.col}>
        <VideoCard />
      </div>
      <div className={`${style.col} ${style.videosList}`}>
        <VideoCard layout={'horizontal'} />
        <VideoCard layout={'horizontal'} />
        <VideoCard layout={'horizontal'} />
        <VideoCard layout={'horizontal'} />
        <VideoCard layout={'horizontal'} />
        <VideoCard layout={'horizontal'} />
        <VideoCard layout={'horizontal'} />
      </div>
    </div>
  );
}
