import styles from "./SectionWidget.module.scss";
import TitleComponent from "../WidgetCards/TitleComponent/TitleComponent";
import SlickWrapper from "../WrapperComponents/SlickWrapper/SlickWrapper";
// import Filter from "../Filter/Filter.js";
// import ImageCard from "../WrapperComponents/ImageCard/ImageCard";
// import ServiceProvider from "../WrapperComponents/ServiceProvider/ServiceProvider";
export default function SectionWidget({ titleConfig }) {
  return <div className={styles.section}>
    {/* <Filter /> */}
    {/* <ImageCard/> */}
    {/* <ServiceProvider/> */}
    {titleConfig.titleText && <TitleComponent titleText={titleConfig.titleText} viewMore={titleConfig.viewMore} changeStyle="default-title" />}

    <SlickWrapper slidesToShow={4} slidesToScroll={2}>
        <div>Find the right movie/show for your Binge Watch!
        </div>
        <div>Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        </div>
        <div>Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        </div>
        <div>Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        </div><div>Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        </div><div>Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        Find the right movie/show for your Binge Watch!
        </div>
    </SlickWrapper>

    
    </div>;
}
