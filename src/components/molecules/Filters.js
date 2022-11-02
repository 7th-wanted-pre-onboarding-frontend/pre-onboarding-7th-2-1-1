import React from 'react';
import PropTypes from 'prop-types';
import filters from '../../utils/constants/filters';
import Atoms from '../atoms';

export default function Filters({ selectedFilter, setSelectedFilter }) {
  return (
    <nav
      style={{
        padding: '6px 12px',
        borderBottom: '1px solid #000'
      }}
    >
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        {filters.map((filter) => (
          <li key={filter.id}>
            <button type='button' onClick={() => setSelectedFilter(filter.id)}>
              <Atoms.Label
                color={selectedFilter === filter.id ? 'black' : 'gray'}
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

Filters.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  setSelectedFilter: PropTypes.func.isRequired
};
