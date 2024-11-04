import styles from "./Tabs.module.scss";
export default function Tabs({ tabText = false, activeClass }) {
  console.log('activeClass', activeClass)
  return (
    <span className={`${styles.tab} ${activeClass ? styles[activeClass]:''}`}>
      {tabText}
    </span>
  );
}
Tabs.defaultProps = {
  tabText: '',
};