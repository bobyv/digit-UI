import React from 'react';
// import withStyles from 'isomorphic-style-loader/withStyles';
import style from './TitleComponent.module.scss';
import DynamicTag from '../DynamicTag/DynamicTag';
// import RightArrow from 'components/common/RightArrow/RightArrow';

function TitleComponent(props) {
  const {
    marginBottom,
    marginTop,
    titleText,
    moreButtonLink,
    titleType,
    boldText,
    changeStyle,
    isWhiteLayout,
    arrowConfig,
    isLeftRedBorder,
    viewMore,
  } = props;
  return (
    <>
      <div
        className={`${style['title-box']} ${style[changeStyle]} ${viewMore ? style['flex'] : ''}`}
        style={{
          marginBottom: `${marginBottom}px`,
          marginTop: `${marginTop}px`,
        }}
      >
        <DynamicTag
          tag={titleType}
          boldText={boldText}
          moreButtonLink={moreButtonLink}
          style={style}
          // changeStyle={changeStyle}
          titleText={titleText}
          isWhiteLayout={isWhiteLayout}
          isLeftRedBorder={isLeftRedBorder}
        >
          {/* {moreButtonLink != '' && } */}
          {/* <RightArrow
            arrowSize={arrowConfig?.size}
            arrowColor={isWhiteLayout ? 'white' : arrowConfig?.color}
          /> */}
        </DynamicTag>
        {viewMore && <a href='#' className={style.viewMore}>{viewMore}</a>}
      </div>
    </>
  );
}

TitleComponent.propTypes = {};
TitleComponent.defaultProps = {
  marginBottom: 20,
  titleText: '',
  moreButtonLink: '',
  titleType: 'h2',
  changeStyle: '',
  isWhiteLayout: false,
  isLeftRedBorder: false,
};

export default TitleComponent;
