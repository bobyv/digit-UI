import React, { useEffect, useState } from 'react';
import style from './SlickSliderWrapper.module.scss';
import Slider from 'react-slick';
import slickStyles from 'slick-carousel/slick/slick.scss';
import slickTheme from 'slick-carousel/slick/slick-theme.css';
import { _isCSR } from 'utils/common';

function SlickSliderWrapper({
  children,
  marginTop,
  marginBottom,
  tabButtonStyle,
  slideId = 'slideId' + Math.floor(Math.random() * (999 - 100 + 1) + 100),
  changeBodyStyle,
  changeSliderStyle,
  slideToScroll = 1,
  inlineStyle,
}) {
  slideId = slideId?.replace(/&/g, '_');
  const [slickSlider, setSlickSlider] = useState(false);
  const [scrollTriggred, setScroll] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [paddingStyle, setPaddingStyle] = useState(0);

  useEffect(() => {
    slickeWidthHandler();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollHandler, { passive: true });
    }
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  const scrollHandler = () => {
    if (scrollTriggred <= 1) {
      let scrollCount = scrollTriggred + 1;
      setScroll(scrollCount);
      slickeWidthHandler();
    }
  };
  const slickeWidthHandler = () => {
    if (_isCSR() && typeof window != 'undefined') {
      let slickContainerWidth = document.querySelector(
        `#${slideId} .slick-list`,
      )?.offsetWidth;
      let slickSlide = document.querySelectorAll(`#${slideId} .slick-slide`);
      let width = 0;
      for (var i = 0; i < slickSlide.length; i++) {
        width += slickSlide && slickSlide.length && slickSlide[i]?.offsetWidth;
        if (width > slickContainerWidth) {
          setSlickSlider(true);
          setChildCount(i);
          setPaddingStyle(1);
          return;
        }
      }
    }
  };

  const settings = {
    slidesToShow: slickSlider ? childCount : 20,
    infinite: false,
    className: `${style['default']} ${style[changeSliderStyle]} ${
      paddingStyle === 0 ? style['pr-0'] : ''
    }`,
    variableWidth: true,
    slidesToScroll: slideToScroll,

    afterChange: (currentSlide) => {
      if (_isCSR() && typeof window != 'undefined') {
        let slickContainerWidth = document.querySelector(
          `#${slideId} .slick-list`,
        )?.offsetWidth;
        let slickSlide = document.querySelectorAll(`#${slideId} .slick-slide`);
        let width = 0;
        for (var i = currentSlide; i < slickSlide.length; i++) {
          width +=
            slickSlide && slickSlide.length && slickSlide[i]?.offsetWidth;
        }
        if (width < slickContainerWidth) {
          document.querySelector(`#${slideId} .slick-next`).disabled = true;
        } else {
          document.querySelector(`#${slideId} .slick-next`).disabled = false;
        }
      }
    },
  };

  return (
    <div
      className={`${style[changeBodyStyle]} ${style[tabButtonStyle]}`}
      style={{
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        ...inlineStyle,
      }}
      id={slideId}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

SlickSliderWrapper.propTypes = {};
SlickSliderWrapper.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  tabButtonStyle: '',
  changeBodyStyle: 'd-flex',
  changeSliderStyle: '',
};

export default (slickStyles, slickTheme)(SlickSliderWrapper);
