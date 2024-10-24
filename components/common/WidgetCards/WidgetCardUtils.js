import React from 'react';
import SvgIcon from 'components/common/Svg/SvgIcon';

const iconMapping = {
  VIDEOS: 'video-player',
  SHORTMEDIAVIDEO: 'video-player',
  MOVIESHOW: 'photo',
  PHOTOGALLERYSECTION: 'photo',
  PHOTOGALLERYLISTSECTION: 'photo',
  PHOTOGALLERYSLIDESHOWSECTION: 'photo',
  IMAGES: 'photo-story',
  WEBSTORIES: 'photo-story',
  MEDIAAUDIO: 'audioIcon',
};

const getSliderType = (type) => {
  const iconName = iconMapping[type];
  return iconName ? <SvgIcon IconName={iconName} /> : null;
};

const webstorieslink = (item) =>
  !item.seopath.includes('amp_stories/')
    ? item.cmstype !== 'IMAGES'
      ? item.msid
      : item.parentid
    : item.parentid;

export { getSliderType, webstorieslink };
