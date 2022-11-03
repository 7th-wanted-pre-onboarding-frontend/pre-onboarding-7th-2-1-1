import React from 'react';
import filters from '../../utils/constants/filters';
import Atoms from '../atoms';
import useSwiper from '../../utils/hooks/useSwiper';

export default function Filters({ selectedFilter, setSelectedFilter }) {
  const ref = useSwiper();
  const onSelect = (item) => {
    const { type, id } = item;
    const [all] = filters;
    switch (type) {
      case 'segment':
        setSelectedFilter((prev) => {
          const result = { ...prev };
          if (result[type] && result[type].id === id) {
            result[type] = {};
          } else {
            result[type] = item;
          }

          if (
            !Object.keys(result.segment).length &&
            !Object.keys(result.fuelType).length
          ) {
            result.all = all;
          } else {
            result.all = {};
          }
          return result;
        });
        break;
      case 'fuelType':
        setSelectedFilter((prev) => {
          const result = { ...prev };
          if (result[type] && result[type].id === id) {
            result[type] = {};
          } else {
            result[type] = item;
          }

          if (
            !Object.keys(result.segment).length &&
            !Object.keys(result.fuelType).length
          ) {
            result.all = all;
          } else {
            result.all = {};
          }
          return result;
        });
        break;
      default:
        setSelectedFilter(() => ({ all: item, segment: {}, fuelType: {} }));
        break;
    }
  };

  return (
    <nav
      style={{
        padding: '6px 12px',
        borderBottom: '1px solid #000'
      }}
    >
      <ul
        className='scrollbar-hide'
        ref={ref}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexShrink: 0,
          overflowX: 'auto'
        }}
      >
        {filters.map((filter) => (
          <li key={filter.id}>
            <button type='button' onClick={() => onSelect(filter)}>
              <Atoms.Label
                color={
                  selectedFilter[filter.type]?.id === filter.id
                    ? 'black'
                    : 'gray'
                }
              >
                <Atoms.Title3 color='inherit'>{filter.title}</Atoms.Title3>
              </Atoms.Label>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
