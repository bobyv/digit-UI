import styles from "./SectionWidget.module.scss";
import TitleComponent from "../WidgetCards/TitleComponent/TitleComponent";
import SlickWrapper from "../WrapperComponents/SlickWrapper/SlickWrapper";
import ImageCard from "../ImageCard/ImageCard";
import ServiceProvider from "../ServiceProvider/ServiceProvider";
import CommonGridBox from "../WrapperComponents/CommonGridBox/CommonGridBox";
import Tabs from "../Tabs/Tabs";
import ProfileCard from "../ProfileCard/ProfileCard";
// import Filter from "../Filter/Filter.js";
// import ImageCard from "../WrapperComponents/ImageCard/ImageCard";
// import ServiceProvider from "../WrapperComponents/ServiceProvider/ServiceProvider";
export default function SectionWidget({ titleConfig, dataConfig }) {
  return (
    <div className={styles.section}>
      {/* <Filter /> */}
      {/* <ImageCard/> */}
      {/* <ServiceProvider/> */}
      {titleConfig?.titleText && (
        <TitleComponent
          titleText={titleConfig?.titleText}
          viewMore={titleConfig?.viewMore}
          changeStyle={titleConfig?.changeStyle || "default-title"}
          switchBtn={titleConfig?.switchBtn}
          titleType={titleConfig?.titleType}
        />
      )}

      {dataConfig?.streamingData && (
        <SlickWrapper
          slidesToShow={4}
          slidesToScroll={2}
          changeSliderStyle={"gap-20"}
        >
          <ServiceProvider />
          <ServiceProvider />
          <ServiceProvider />
          <ServiceProvider />
          <ServiceProvider />
          <ServiceProvider />

          <ServiceProvider />
        </SlickWrapper>
      )}

      {dataConfig?.tabsData && (
        <CommonGridBox
          changeStyle={"flex-start"}
          inLineStyle={{ margin: "0 0 20px", gap: "15px" }}
        >
          <Tabs tabText="hindi" activeClass={true} />
          <Tabs tabText="telugu" />
          <Tabs tabText="tamil" />
          <Tabs tabText="bengali" />
          <Tabs tabText="malayalam" />
          <Tabs tabText="kannada" />
        </CommonGridBox>
      )}

      {dataConfig?.profileData && (
        <SlickWrapper
          slidesToShow={dataConfig?.slidesToShow || 4}
          slidesToScroll={dataConfig.slidesToScroll || 2}
          changeSliderStyle={"gap-20"}
        >
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </SlickWrapper>
      )}

      {dataConfig?.sliderData && dataConfig?.slider && (
        <SlickWrapper
          slidesToShow={4}
          slidesToScroll={2}
          changeSliderStyle={"gap-20"}
        >
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
          <ImageCard
            isOverlay={dataConfig?.overlay}
            isVideo={dataConfig?.isVideo}
          />
        </SlickWrapper>
      )}
      {/* {console.log('!dataConfig?.slider', !dataConfig?.slider)} */}
      {dataConfig?.sliderData && !dataConfig?.slider && (
        <>
          <CommonGridBox
            gridType={"divGridBox"}
            changeStyle={"grid-3"}
            inLineStyle={{ gridGap: `20px 24px`, marginBottom: "38px" }}
          >
            <ImageCard
              isOverlay={dataConfig?.overlay}
              isVideo={dataConfig?.isVideo}
            />
            <ImageCard
              isOverlay={dataConfig?.overlay}
              isVideo={dataConfig?.isVideo}
            />
            <ImageCard
              isOverlay={dataConfig?.overlay}
              isVideo={dataConfig?.isVideo}
            />
            <ImageCard
              isOverlay={dataConfig?.overlay}
              isVideo={dataConfig?.isVideo}
            />
            <ImageCard
              isOverlay={dataConfig?.overlay}
              isVideo={dataConfig?.isVideo}
            />
            <ImageCard
              isOverlay={dataConfig?.overlay}
              isVideo={dataConfig?.isVideo}
            />
            <ImageCard
              isOverlay={dataConfig?.overlay}
              isVideo={dataConfig?.isVideo}
            />
            <ImageCard
              isOverlay={dataConfig?.overlay}
              isVideo={dataConfig?.isVideo}
            />
            <ImageCard
              isOverlay={dataConfig?.overlay}
              isVideo={dataConfig?.isVideo}
            />
          </CommonGridBox>
          <div>
            <button className={styles.moreBtn}>Load More </button>
          </div>
        </>
      )}
    </div>
  );
}
