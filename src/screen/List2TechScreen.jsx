import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListTech, selectOrder } from '../redux/tech2Ducks';
import { TITLES_TABLE } from '../config/constants';
import { List } from '../components/tech/list2';
import Filter from '../components/tech/Filter2';

export default function List2TechScreen() {
  const dispatch = useDispatch();
  const selectListFilter = useSelector(selectOrder, () => false);

  useEffect(() => {
    dispatch(getListTech());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <h1>datos</h1>
      <List titles={TITLES_TABLE} items={selectListFilter} />
    </div>
  );
}
