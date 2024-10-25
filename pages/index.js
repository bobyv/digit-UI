import styles from "../styles/Home.module.scss";
import Banner from "../components/desktop/Banner/Banner";
import SectionWidget from "../components/common/SectionWidget/SectionWidget";
import ProfileCard from "../components/common/ProfileCard/ProfileCard";
import CommonGridBox from "../components/common/WrapperComponents/CommonGridBox/CommonGridBox";
import ContainerBox from "../components/common/WrapperComponents/ContainerBox/ContainerBox";
import TitleComponent from "../components/common/WidgetCards/TitleComponent/TitleComponent";
import TrendingCard from "../components/common/TrendingCard/TrendingCard";
export default function Home() {
  return (
    <>
      <Banner />

      <ContainerBox>
        <SectionWidget
          titleConfig={{
            titleText: "STREAMING PROVIDERS",
            viewMore: "view more",
          }}
          dataConfig={{
            streamingData: true,
          }}
        ></SectionWidget>
        <SectionWidget
          titleConfig={{
            titleText: "Latest Movies",
            viewMore: "view more",
            switchBtn: true,
          }}
          dataConfig={{
            sliderData: true,
            tabsData: true,
          }}
        ></SectionWidget>
        <SectionWidget
          titleConfig={{
            titleText: "Popular Actors and directors",
            viewMore: "view more",
            switchBtn: true,
          }}
          dataConfig={{
            profileData: true,
          }}
        ></SectionWidget>
        <SectionWidget
          titleConfig={{
            titleText: "LANGUAGES",
          }}
          dataConfig={{
            sliderData: true,
            overlay: true,
          }}
        ></SectionWidget>
        <SectionWidget
          titleConfig={{
            titleText: "Trailers",
          }}
          dataConfig={{
            sliderData: true,
            isVideo: true,
          }}
        ></SectionWidget>
        <CommonGridBox gridType="divGridBox" changeStyle="grid-2" inLineStyle={{ gap: '0 40px'}}>
          <div>
            <TitleComponent titleText="Top 10 Trending Movies" />
            <CommonGridBox gridType="divGridBox" changeStyle="grid-2" inLineStyle={{ gap: '20px 25px'}}>
              <TrendingCard />
              <TrendingCard />
              <TrendingCard />
              <TrendingCard />
            </CommonGridBox>
          </div>
          <div>
            <TitleComponent titleText="Top 10 Trending Shows" />
            <CommonGridBox gridType="divGridBox" changeStyle="grid-2" inLineStyle={{ gap: '15px 25px'}}>
              <TrendingCard />
              <TrendingCard />
              <TrendingCard />
              <TrendingCard />
            </CommonGridBox>
          </div>
        </CommonGridBox>
      </ContainerBox>

      <div className={styles.container}>
        <style jsx>{`
          main {
            // padding: 5rem 0;
            // flex: 1;
            // display: flex;
            // flex-direction: column;
            // justify-content: center;
            // align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Verdana", sans-serif;
          }
          * {
            box-sizing: border-box;
          }

          a {
            color: inherit;
            text-decoration: none;
            transition: all 0.5s;
          }

          img {
            max-width: 100%;
            height: auto;
          }
        `}</style>
      </div>
    </>
  );
}
