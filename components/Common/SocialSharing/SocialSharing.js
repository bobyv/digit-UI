import style from "./SocialSharing.module.scss";
export default function SocialSharing({}) {
  return (
    <div className={`${style.sharingWidget}`}>
      <span className={style.share_icn}>
        <img
          class="lzy_img"
          src="https://static.digit.in/digit_assets/images/gold_icn1.jpg"
          title="Social Share"
          alt="Social Share"
        />
      </span>
      <ul className={style.sharingList}>
        <li>
          <span
            class="icn digit-binge-gasend datahreflink"
            aria-label="Share on Whatsapp"
            target="_blank"
          >
            <img
              class="lzy_img"
              title="Whatsapp"
              alt="Whatsapp"
              src="https://static.digit.in/digit_assets/images/whatsapp_icon_s.png"
            />
          </span>
        </li>
        <li>
          <span
            class="icn digit-binge-gasend datahreflink"
            aria-label="Share on Facebook"
            target="_blank"
          >
            <img
              class="lzy_img"
              title="Facebook"
              alt="Facebook"
              src="https://static.digit.in/digit_assets/images/facebook_icon_s.png"
            />
          </span>
        </li>
        <li>
          <span
            class="icn digit-binge-gasend datahreflink"
            aria-label="Share on Twitter"
            target="_blank"
          >
            <img
              class="lzy_img"
              title="Twitter"
              alt="Twitter"
              src="https://static.digit.in/digit_assets/images/xtwitter_icon_s.png"
            />
          </span>
        </li>
      </ul>
    </div>
  );
}
