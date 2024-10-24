import React from 'react';
import { useMediaQuery } from 'react-responsive';
import isMobile from 'utils/isMobile';
import { connect } from 'react-redux';
import { isAMPURL } from 'utils/common';

export const Desktop = ({ children }) => {
  let isDesktop = false;

  if (typeof window !== 'undefined') {
    isDesktop = useMediaQuery({ minWidth: 768 });
  } else {
    isDesktop = !isMobile() && true;
  }

  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  let isTablet = false;

  if (typeof window !== 'undefined') {
    isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  } else {
    isTablet = !isMobile() && true;
  }

  return isTablet ? children : null;
};

const MobileComponent = ({ children, pathname }) => {
  if (isAMPURL(pathname)) return children;

  let isMobileDevice = false;
  if (typeof window !== 'undefined') {
    isMobileDevice = useMediaQuery({ maxWidth: 767 });
  } else {
    isMobileDevice = isMobile() && true;
  }
  return isMobileDevice ? children : null;
};

const mapStateToProps = (state) => ({
  pathname: state.pathname,
});

export const Mobile = connect(mapStateToProps)(MobileComponent);
