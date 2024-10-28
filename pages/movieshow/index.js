import style from "./Movieshow.module.scss";
import Banner from "../../components/desktop/Banner/Banner";
import SectionWidget from "../../components/common/SectionWidget/SectionWidget";
import ProfileCard from "../../components/common/ProfileCard/ProfileCard";
import CommonGridBox from "../../components/common/WrapperComponents/CommonGridBox/CommonGridBox";
import ContainerBox from "../../components/common/WrapperComponents/ContainerBox/ContainerBox";
import TitleComponent from "../../components/common/WidgetCards/TitleComponent/TitleComponent";
import TrendingCard from "../../components/common/TrendingCard/TrendingCard";
import Filter from "../../components/common/Filter/Filter";
import Table from "../../components/common/Table/Table";
import LeadImage from "../../components/common/LeadImage/LeadImage";
export default function Home() {
  return (
    <>
      <LeadImage />

      <ContainerBox>
        <TitleComponent
          titleText="Best Movies List"
          changeStyle="noborder"
          inLineStyle={{ textCenter: "center" }}
        />
        <CommonGridBox inLineStyle={{ gap: "0 30px" }}>
          <div className={style.lhs}>
            <div className={style.moviedetails}>
              <div className={style.col}>
              <h2>The Legend of Maula Jatt Movie (2022)</h2>
            <div className={style.category}>
              <a href="#">Action</a>
              <a href="#">Drama</a>
              <a href="#">Fantasy</a>
            </div>
            <div className={style.details}>
              <a href="#">Punjabi</a>| 2 hr 33 min | Release Date Oct 12, 2022
            </div>
              </div>
              <div className={style.col}></div>
            </div>
            
            <div className={style.highlight}>
              The Legend of Maula Jatt : Release Date, Trailer, Cast & Songs
            </div>
            <Table />
          </div>
          <div className={style.rhs}>
            <SectionWidget
              dataConfig={{
                sliderData: true,
                tabsData: true,
              }}
            ></SectionWidget>
          </div>
        </CommonGridBox>

        <div>
          <TitleComponent titleText="Top 10 Movies List" />
          <Table></Table>
        </div>

        <SectionWidget
          titleConfig={{
            titleText: "Latest Movies",
            viewMore: "view more",
            switchBtn: true,
          }}
          dataConfig={{
            sliderData: true,
            slider: true,
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
            slider: true,
          }}
        ></SectionWidget>
        <SectionWidget
          titleConfig={{
            titleText: "Movies IN ALL GENRE",
          }}
          dataConfig={{
            sliderData: true,
            slider: true,
            overlay: true,
          }}
        ></SectionWidget>
      </ContainerBox>

      <div className={style.container}>
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
