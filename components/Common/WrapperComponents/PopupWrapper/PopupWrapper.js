import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './PopupWrapper.module.scss';

const PopupWrapper = ({ isOpen, onClose, children, changeStyle }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Ensure that ReactDOM.createPortal is only used in the browser
  if (typeof document !== 'undefined') {
    return ReactDOM.createPortal(
      <div
        className={`${style['popup-overlay']} ${style[changeStyle]}`}
        onClick={onClose}
      >
        <div
          className={`${style['popup-content']}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={`${style['close-button']}`} onClick={onClose}>
            ×
          </button>
          <div className={`${style['popup-body']}`}>{children}</div>
        </div>
      </div>,
      document.body,
    );
  }

  return null;
};

PopupWrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  changeStyle: PropTypes.string,
};

PopupWrapper.defaultProps = {
  changeStyle: '',
};

export default PopupWrapper;
