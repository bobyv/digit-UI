import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import style from './ShowHideWrapper.module.scss';

function ShowHideWrapper({ title, children, isEditButton, setModifyDetail }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  const userEditInfo = () => {
    setModifyDetail(false);
  };

  return (
    <div className={style['container']}>
      <div className={`${style['show-hide']}`}>
        <button className={`${style['button-text']}`} onClick={toggleOpen}>
          {title}
          <span
            className={isOpen ? style['arrow-up'] : style['arrow-down']}
          ></span>
        </button>
        {isOpen
          ? isEditButton && (
              <button
                onClick={userEditInfo}
                className={`${style['button-edit']}`}
              >
                <img src="/assets/magicbricks/images/pen.svg" alt="Edit" />
              </button>
            )
          : ''}
      </div>

      <div
        ref={contentRef}
        className={`${style['content']}`}
        style={{ height }}
      >
        {children}
      </div>
    </div>
  );
}

ShowHideWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isEditButton: PropTypes.bool,
};

ShowHideWrapper.defaultProps = {
  isEditButton: true,
  setModifyDetail: () => {},
};

export default ShowHideWrapper;
