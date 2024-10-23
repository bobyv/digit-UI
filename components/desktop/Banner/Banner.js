import SearchForm from "../SearchForm/SearchForm";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.image}>
        <img src="../../images/banner-img.webp" alt="image" />
      </div>

      <div className={styles.content}>
        <h2>Find the right movie/show for your Binge Watch!</h2>
        <SearchForm />
      </div>
    </div>
  );
}
