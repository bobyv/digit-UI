import style from "./SongCard.module.scss";
// import Filter from "../Filter/Filter.js";
// import ImageCard from "../WrapperComponents/ImageCard/ImageCard";
// import ServiceProvider from "../WrapperComponents/ServiceProvider/ServiceProvider";
export default function SongCard({ size }) {
  return (
    <div className={`${style.songCard} `}>
      <div className={style.sl}>01</div>
      <div className={style.first}>I</div>
      <div className={style.song}>Insaaf</div>
      <div className={style.singer}>Sarmad Ghafoor</div>
      <div>4: 54</div>
      <div className={style.play}></div>
    </div>
  );
}
