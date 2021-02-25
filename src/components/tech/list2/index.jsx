import React from 'react';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../../../redux/tech2Ducks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './list.module.css';
import PropTypes from 'prop-types';
import Row from './Row';

export const List = ({ titles = [], items = [] }) => {
  const dispatch = useDispatch();
  const event = (func, column) => func === 'order' ? dispatch(updateOrder(column)) : true;

  const OrderIcon = (icon, column) =>
    <FontAwesomeIcon className="pointer"
      icon={['fas', icon.name]}
      size={icon.size}
      color={icon.color}
      onClick={() => event(icon.func, column)}
    />;
  // console.log(items);
  // let item = items[0];
  // for (const key in item) {
  //   <div>{key}</div>;
  //   console.log(key);
  //   // item.hasOwnProperty(key);
  //   console.log(Object.prototype.hasOwnProperty.call(item, key));
  //   if (Object.prototype.hasOwnProperty.call(item, key)) {
  //     const element = item[key];
  //     // console.log(element);
  //   }
  // }
  // console.log(titles);

  // console.log(Object.entries(item));
  return (
    <section className={styles.wrapper}>
      <div className={styles.header_wrapper}>
        {titles.map((t, key) =>
          (<div key={key}><span>{t.name}</span> {t.icon && OrderIcon(t.icon, t.column)}</div>)
        )}
      </div>
      {
        items.map((i, key) =>
          <Row className={styles.row_wrapper} key={key} item={i} />
        )
      }
      <div>
        <strong> total 0</strong>
      </div>
    </section>
  );
};

List.propTypes = {
  titles: PropTypes.array,
  items: PropTypes.array
};
