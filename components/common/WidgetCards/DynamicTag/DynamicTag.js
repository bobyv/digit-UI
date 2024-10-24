import React from 'react';
import decodeHtml from '../../../../utils/htmlDecoder';
import LinkWrapper from '../../../../components/common/LinkWrapper/LinkWrapper';

const DynamicHeading = (props) => {
  const {
    tag: Tag,
    style,
    changeStyle,
    titleText,
    children,
    moreButtonLink,
    isWhiteLayout,
    isLeftRedBorder,
  } = props;

  let htmlContent = `<${Tag} class=${style['default-title']}>${decodeHtml(
    titleText,
  )} ${children || ''}</${Tag}>`;

  return (
    <LinkWrapper
      condition={moreButtonLink}
      wrapper={(child) => (
        <a to={moreButtonLink} className={`${style['inline-block']}`}>
          {child}
        </a>
      )}
    >
      <Tag
        className={`${style['default-title']} ${style[changeStyle]} ${
          isWhiteLayout && style['white']
        } ${isLeftRedBorder ? style['left-red-border'] : ''}`}
      >
        {decodeHtml(titleText)} {moreButtonLink && children}
      </Tag>
    </LinkWrapper>
  );
};

DynamicHeading.defaultProps = {
  classes: 'default-title',
  isWhiteLayout: false,
  isLeftRedBorder: false,
};

export default DynamicHeading;
