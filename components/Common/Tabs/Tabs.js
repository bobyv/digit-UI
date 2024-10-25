import styles from "./Tabs.module.scss";
export default function Tabs({ tabText = false, activeClass }) {
  return (
    <span className={`${styles.tab} ${styles[activeClass]}`}>
      {tabText}
    </span>
  );
}
Tabs.defaultProps = {
  tabText: '',
};