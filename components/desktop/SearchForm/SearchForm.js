import styles from "./SearchForm.module.scss";

export default function SearchForm() {
  return (
    <div className={styles.searchForm}>
      <ul className={styles.searchList}>
        <li className={styles.searchItem}>
          <div className={styles.input}>
            <select id="searchlanguage">
              <option value="">Select Languages</option>
              <option value="english"> English</option>
              <option value="hindi"> Hindi</option>
              <option value="tamil"> Tamil</option>
              <option value="telugu"> Telugu</option>
              <option value="malayalam"> Malayalam</option>
              <option value="bengali"> Bengali</option>
              <option value="kannada"> Kannada</option>
              <option value="marathi"> Marathi</option>
              <option value="punjabi"> Punjabi</option>
              <option value="gujrati"> Gujrati</option>
              <option value="bhojpuri"> Bhojpuri</option>
              <option value="urdu"> Urdu</option>
              <option value="assamese"> Assamese</option>
              <option value="odia"> Odia</option>
            </select>
          </div>
        </li>
        <li className={styles.searchItem}>
          <div className={styles.input}>
            <select id="searchgenre">
              <option value="">Select Genre</option>
              <option value="drama">Drama</option>
              <option value="comedy">Comedy</option>
              <option value="suspense-and-thriller">
                Suspense and Thriller
              </option>
              <option value="romance">Romance</option>
              <option value="action">Action</option>
              <option value="documentary">Documentary</option>
              <option value="other">Other</option>
              <option value="horror">Horror</option>
              <option value="crime">Crime</option>
              <option value="family">Family</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="mystery">Mystery</option>
              <option value="animation">Animation</option>
              <option value="adventure">Adventure</option>
              <option value="fantasy">Fantasy</option>
              <option value="dance-and-music">Dance and Music</option>
              <option value="entertainment">Entertainment</option>
              <option value="kids">Kids</option>
              <option value="historical">Historical</option>
              <option value="dubbed">Dubbed</option>
              <option value="reality-based">Reality based</option>
              <option value="bollywood">Bollywood</option>
              <option value="sports">Sports</option>
              <option value="travel-and-culture">Travel and Culture</option>
              <option value="devotional">Devotional</option>
              <option value="biopic">Biopic</option>
              <option value="health-and-fitness">Health and Fitness</option>
              <option value="teenage">Teenage</option>
              <option value="superhero">Superhero</option>
              <option value="mythology">Mythology</option>
              <option value="supernatural">Supernatural</option>
              <option value="animal">Animal</option>
              <option value="anime">Anime</option>
              <option value="politics">Politics</option>
            </select>
          </div>
        </li>
        <li className={styles.searchItem}>
          <div className={styles.input}>
            <input
              type="text"
              id="searchActorDirector"
              autocomplete="off"
              placeholder="Search Actor/Director"
            />
            <div id="crewList"></div>
          </div>
        </li>
        <li className={styles.searchItem}>
          <input type="button" id="searchbingecontent" value="Search" />
        </li>
      </ul>
      <div className={styles.searchFilter}>
        <span className={styles.radioBtn}>
          <input
            type="radio"
            id="movies"
            name="content"
            value="movies"
            checked
          />
          <label for="movies">Movies</label>
        </span>
        <span className={styles.radioBtn}>
          <input
            type="radio"
            id="shows"
            name="content"
            value="shows"
          />
          <label for="shows">Shows</label>
        </span>
      </div>
    </div>
  );
}
