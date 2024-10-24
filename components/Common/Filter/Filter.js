import React from "react";
import style from "./Filter.module.scss";
import CommonGridBox from "../WrapperComponents/CommonGridBox/CommonGridBox";
function ServiceProvider() {
  return (
    <>
      <CommonGridBox
        gridType={"divGridBox"}
        changeStyle={"grid-4"}
        inLineStyle={{ gridGap: `0px 24px`, marginBottom: "38px" }}
      >
        <div className={style["lhs-rhs"]}>
          <div className={style["left"]}>
            <div className={`${style['d-flex']} ${style.filter} ${style['border-bottom']}`}>
              <div className={style["title"]}>Filters</div>
              <button>Clear All</button>
            </div>

            <div className={`${style['border-bottom']} ${style['mb-20']}`}>
              <div className={`${style['searchbox']} ${style['mb-12']}`}>
                <input type="text" placeholder="Search" />
                <button className={style["search_filter"]}>Q</button>
              </div>

              <div className={style["keysearch"]}>
                <h6 className={`${style['title']} ${style['mb-12']}`}>Content Type</h6>
                <div className={style["scroll"]}>
                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Movies (55180)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${style['border-bottom']} ${style['mb-20']}`}>
              <div className={`${style['searchbox']} ${style['mb-12']}`}>
                <input type="text" placeholder="Search" />
                <button className={style["search_filter"]}>Q</button>
              </div>

              <div className={style["keysearch"]}>
                <h6 className={`${style['title']} ${style['mb-12']}`}>Provider</h6>
                <div className={style["scroll"]}>
                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Movies (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${style['border-bottom']} ${style['mb-20']}`}>
              <div className={`${style['searchbox']} ${style['mb-12']}`}>
                <input type="text" placeholder="Search" />
                <button className={style["search_filter"]}>Q</button>
              </div>

              <div className={style["keysearch"]}>
                <h6 className={`${style['title']} ${style['mb-12']}`}>Provider</h6>
                <div className={style["scroll"]}>
                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Movies (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="checkbox" checked /> Shows (55180)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${style['border-bottom']} ${style['mb-20']}`}>
              <div className={`${style['searchbox']} ${style['mb-12']}`}>
                <input type="text" placeholder="Search" />
                <button className={style["search_filter"]}>Q</button>
              </div>

              <div className={style["keysearch"]}>
                <h6 className={`${style['title']} ${style['mb-12']}`}>Provider</h6>
                <div className={style["scroll"]}>
                  <div className={style["mb-12"]}>
                    <label>
                      <input type="radio" checked /> Movies (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="radio" /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="radio" /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="radio" /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="radio" /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="radio" /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="radio" /> Shows (55180)
                    </label>
                  </div>

                  <div className={style["mb-12"]}>
                    <label>
                      <input type="radio" /> Shows (55180)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonGridBox>
    </>
  );
}

export default ServiceProvider;
