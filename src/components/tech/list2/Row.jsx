import React from 'react';
import PropTypes from 'prop-types';
import { LOGO } from '../../../config/constants';

function Row({ className = '', item = {} }) {
  // console.log(item);
  const obj = Object.entries(item);
  // console.log(obj);
  // item[`${i[1]}`]
  return (
    <div className={className}>
      {
        obj.map((i, key) =>
          <div key={key}>{i[0] === LOGO ?
            <img src={i[1]} width="60" alt="logo" /> :
            i[1]}</div>
        )
      }
    </div>
  );
}

Row.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
};

export default Row;