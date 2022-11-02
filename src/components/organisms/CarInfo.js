import React from 'react';
import PropTypes from 'prop-types';
import Atoms from '../atoms';
import Molecules from '../molecules';

export default function CarInfo({ segment, fuelType, startDate }) {
  return (
    <section>
      <Atoms.ListHeaderWrapper>
        <Atoms.Title2 color='inherit'>차량 정보</Atoms.Title2>
      </Atoms.ListHeaderWrapper>
      <ul>
        <li>
          <Molecules.ListItem title='차종' content={segment} />
        </li>
        <li>
          <Molecules.ListItem title='연료' content={fuelType} />
        </li>
        <li>
          <Molecules.ListItem title='이용 가능일' content={startDate} />
        </li>
      </ul>
    </section>
  );
}

CarInfo.prototype = {
  segment: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
};
