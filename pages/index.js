import styles from "../styles/Home.module.scss";
import Banner from "../components/desktop/Banner/Banner";
import SectionWidget from "../components/common/SectionWidget/SectionWidget";
import ProfileCard from "../components/common/ProfileCard/ProfileCard";
import CommonGridBox from "../components/common/WrapperComponents/CommonGridBox/CommonGridBox";
// import '../styles/global.css'
import ServiceProvider from "../components/common/ServiceProvider/ServiceProvider";
import Filter from "../components/common/Filter/Filter";
import ImageCard from "../components/common/ImageCard/ImageCard";
import ContainerBox from "../components/common/WrapperComponents/ContainerBox/ContainerBox";
export default function Home() {
  return (
    <>
      <Banner />

      <ContainerBox>
        <ServiceProvider />
        <ImageCard />
      </ContainerBox>
      <div className={styles.container}>
        <SectionWidget
          titleConfig={{
            titleText: "Latest Movies",
            viewMore: "view more",
          }}
        ></SectionWidget>

        <CommonGridBox>
          <ProfileCard size={"small"} />
          <ProfileCard size={"small"} />
          <ProfileCard size={"small"} />
          <ProfileCard size={"small"} />
          <ProfileCard size={"small"} />
          <ProfileCard size={"small"} />
          <ProfileCard size={"small"} />
          <ProfileCard size={"small"} />
        </CommonGridBox>
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
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  );
}
