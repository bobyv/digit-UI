import React from 'react';
import style from './LhsRhsWrapper.module.scss';

function LhsRhsWrapper({ children, changeStyle, inLineStyle }) {
  let lhsChild, midChild, rhsChild;
  if (React.Children.toArray(children).length === 2) {
    midChild = React.Children.toArray(children)[0];
    rhsChild = React.Children.toArray(children)[1];
  } else if (React.Children.toArray(children).length === 3) {
    lhsChild = React.Children.toArray(children)[0];
    midChild = React.Children.toArray(children)[1];
    rhsChild = React.Children.toArray(children)[2];
  } else {
    midChild = React.Children.toArray(children)[0];
  }

  return (
    (lhsChild || midChild || rhsChild) && (
      <div
        className={`${style['inner-container']} ${style[changeStyle]}`}
        style={{ ...inLineStyle }}
      >
        {lhsChild && <div className={style['lhs']}>{lhsChild}</div>}
        {midChild && <div className={style['mid']}>{midChild}</div>}
        {rhsChild && <div className={style['rhs']}>{rhsChild}</div>}
      </div>
    )
  );
}

LhsRhsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  changeStyle: PropTypes.string,
  inLineStyle: PropTypes.object,
};

LhsRhsWrapper.defaultProps = {
  changeStyle: '',
  inLineStyle: {},
};

export default LhsRhsWrapper;
