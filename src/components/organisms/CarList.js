import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useGetCars from '../../utils/hooks/useGetCars';
import Atoms from '../atoms';
import Organisms from '.';

export default function CarList({ selectedFilter }) {
  const { isLoading, data } = useGetCars();
  const cars = useMemo(() => {
    const result = data || [];
    if (selectedFilter === 'all') {
      return result;
    }

    return result.filter((item) => item.segment === selectedFilter);
  }, [data, selectedFilter]);
  const isEmpty = cars.length === 0;

  if (isLoading) {
    return <Loading />;
  }

  if (isEmpty) {
    return <Empty />;
  }

  return (
    <ul
      style={{
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      {cars.map((item) => (
        <Organisms.CarItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Loading() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <Atoms.Title2>불러오는 중</Atoms.Title2>
    </section>
  );
}

function Empty() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <Atoms.Title2>차량이 없습니다.</Atoms.Title2>
    </section>
  );
}

CarList.prototype = {
  selectedFilter: PropTypes.string.isRequired
};
