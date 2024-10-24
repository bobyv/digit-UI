import styles from "./ProfileCard.module.scss";
// import Filter from "../Filter/Filter.js";
// import ImageCard from "../WrapperComponents/ImageCard/ImageCard";
// import ServiceProvider from "../WrapperComponents/ServiceProvider/ServiceProvider";
export default function ProfileCard({ size }) {
  return (
    <div className={`${styles.profileCard} ${size ? styles[size] : ""}`}>
      <figure className={styles.image}>
        <img
          src="https://static.digit.in/product/9be13ebebac49524fe89dd1d83a975ed2ee469a2.jpeg"
          alt="image"
        />
        <figcaption>Amitabh Bachchan</figcaption>
      </figure>
    </div>
  );
}
