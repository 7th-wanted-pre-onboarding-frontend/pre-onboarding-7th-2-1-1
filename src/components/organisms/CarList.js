import React, { useMemo } from 'react';
import useGetCars from '../../utils/hooks/useGetCars';
import Atoms from '../atoms';
import Organisms from '.';
import Molecules from '../molecules';

export default function CarList({ selectedFilter }) {
  const { isLoading, data } = useGetCars();
  const cars = useMemo(() => {
    let result = data ? Object.values(data) : [];
    const isSelectedSegment = !!Object.keys(selectedFilter.segment).length;
    const isSelectedFuelType = !!Object.keys(selectedFilter.fuelType).length;

    if (isSelectedSegment) {
      result = result.filter(
        (item) => item.segment === selectedFilter.segment.id
      );
    }

    if (isSelectedFuelType) {
      result = result.filter(
        (item) => item.fuelType === selectedFilter.fuelType.id
      );
    }

    return result;
  }, [data, selectedFilter]);
  const isEmpty = cars.length === 0;

  if (isLoading) {
    return <Molecules.Loading />;
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
