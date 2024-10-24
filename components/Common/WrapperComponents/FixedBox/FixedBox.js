import React from 'react';
import style from './FixedBox.module.scss';

const FixedBox = React.forwardRef(
  ({ children, changeStyle, inLineStyle, id }, ref) => {
    return (
      <div
        className={`${style['fixed']} ${style[changeStyle]}`}
        style={{ ...inLineStyle }}
        id={id}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

FixedBox.propTypes = {
  children: PropTypes.node.isRequired,
  changeStyle: PropTypes.string,
  inLineStyle: PropTypes.object,
  id: PropTypes.string,
};

FixedBox.defaultProps = {
  changeStyle: '',
  inLineStyle: {},
  id: '',
};

export default FixedBox;
