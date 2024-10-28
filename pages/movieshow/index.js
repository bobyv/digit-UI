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
import SongCard from "../../components/common/SongCard/SongCard";
export default function Home() {
  return (
    <>
      <LeadImage />

      <ContainerBox>
        <CommonGridBox inLineStyle={{ gap: "0 30px" }}>
          <div className={`${style.lhs} ${style.movieContent}`}>
            <div className={style.moviedetails}>
              <div className={style.col}>
                <h2 className={style.mainheading}>
                  The Legend of Maula Jatt Movie (2022)
                </h2>
                <div className={style.category}>
                  <a href="#" className={style.linkItem}>
                    Action
                  </a>
                  <a href="#" className={style.linkItem}>
                    Drama
                  </a>
                  <a href="#" className={style.linkItem}>
                    Fantasy
                  </a>
                </div>
                <div className={style.details}>
                  <a href="#" className={style.linkItem}>
                    Punjabi
                  </a>
                  <span className={style.movieText}>2 hr 33 min</span>
                  <span className={style.movieText}>
                    Release Date Oct 12, 2022
                  </span>
                </div>
                <hr />
              </div>
              <div className={style.col}></div>
            </div>

            <div className={style.highlight}>
              The Legend of Maula Jatt : Release Date, Trailer, Cast & Songs
            </div>
            <Table />
            <hr />
            <h3>Where to Watch / Stream The Legend of Maula Jatt Online</h3>
            <p>
              Theatrical release - Not available on any OTT Platform right now.
            </p>
            <hr />
            <SectionWidget
              titleConfig={{
                titleText: "The Legend of Maula Jatt - Star Cast And Crew",
                changeStyle: "noborder",
              }}
              dataConfig={{
                profileData: true,
                slidesToShow: 4,
                slidesToScroll: 4,
              }}
            ></SectionWidget>

            <h3>The Legend of Maula Jatt All Songs List</h3>

            <div>
              <SongCard />
              <SongCard />
            </div>
            <hr />
            <h3>The Legend of Maula Jatt Trailer</h3>
            <div className={style.trailer}>
              <img
                src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928802.jpg?tr=w-500 480w,https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928802.jpg"
                alt="image"
              />
              <span className={style.playIcon} />
            </div>
            <hr />
            <h3>Image Gallery</h3>
            <ul className={style.imageGallery}>
              <li>
                <a href="#">
                  <img
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928803.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 1"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-942346.jpg?tr=w-130"
                    data-src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-942346.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 2"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    class="lzy_img"
                    onclick="currentSlide(3)"
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928800.jpg?tr=w-130"
                    data-src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928800.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 3"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-942346.jpg?tr=w-130"
                    data-src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-942346.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 2"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    class="lzy_img"
                    onclick="currentSlide(3)"
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928800.jpg?tr=w-130"
                    data-src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928800.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 3"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-942346.jpg?tr=w-130"
                    data-src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-942346.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 2"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    class="lzy_img"
                    onclick="currentSlide(3)"
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928800.jpg?tr=w-130"
                    data-src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928800.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 3"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    class="lzy_img"
                    onclick="currentSlide(4)"
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928799.jpg?tr=w-130"
                    data-src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928799.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 4"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    class="lzy_img"
                    onclick="currentSlide(5)"
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928798.jpg?tr=w-130"
                    data-src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928798.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 5"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    class="lzy_img"
                    onclick="currentSlide(6)"
                    src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928805.jpg?tr=w-130"
                    data-src="https://static.digit.in/OTT/v2/images/the-legend-of-maula-jatt-928805.jpg?tr=w-130"
                    alt="The Legend of Maula Jatt Poster 6"
                  />
                </a>
              </li>
            </ul>
            <hr />
            <div className={style.disclaimer}>
              <strong>Disclaimer</strong>: All content and media has been
              sourced from original content streaming platforms, such as Disney
              Hotstar, Amazon Prime, Netflix, etc. Digit Binge is an aggregator
              of content and does not claim any rights on the content. The
              copyrights of all the content belongs to their respective original
              owners and streaming service providers. All content has been
              linked to respective service provider platforms.This product uses
              the TMDb API but is not endorsed or certified by{" "}
              <img
                class="lzy_img dis_tmdb_logo"
                src="https://static.digit.in/digit_assets/images/blue_long.svg"
                data-src="https://static.digit.in/digit_assets/images/blue_long.svg"
                width="160"
                height="13"
                alt="TMDB Logo"
              />
            </div>
            <div className={style.telegramBtn}>
              <a className={style.telegram} href="https://t.me/digit_binge">
                <img
                  class="lzy_img"
                  src="https://static.digit.in/digit_assets/images/telegram.svg"
                  data-src="https://static.digit.in/digit_assets/images/telegram.svg"
                  alt="Telegram Logo"
                  width="24"
                  height="21"
                />
                <span>Join The Digit Binge Telegram Channel Now!</span>
              </a>
              <p>
                For all queries and suggestions, email us at{" "}
                <a href="mailto:digitbinge@9dot9.in">digitbinge@9dot9.in</a>
              </p>
            </div>
          </div>
          <div className={style.rhs}>
          <TitleComponent titleText="Top 10 Trending Movies" />
          <TrendingCard changeStyle={'withoutRanking'} />
          <TrendingCard changeStyle={'withoutRanking'} />
          <TrendingCard changeStyle={'withoutRanking'} />
          <TrendingCard changeStyle={'withoutRanking'} />
          <TrendingCard changeStyle={'withoutRanking'} />
          </div>
        </CommonGridBox>

        

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
