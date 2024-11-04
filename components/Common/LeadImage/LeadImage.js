import styles from "./LeadImage.module.scss";
// import Filter from "../Filter/Filter.js";
// import ImageCard from "../WrapperComponents/ImageCard/ImageCard";
// import ServiceProvider from "../WrapperComponents/ServiceProvider/ServiceProvider";
export default function LeadImage({ size }) {
  return (
    <div className={`${styles.image}`}>
        <img
          src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928802.jpg?tr=w-500 480w,https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928802.jpg"
          alt="image"
        />
    </div>
  );
}
