import React from 'react';
import PropTypes from 'prop-types';
import Atoms from '../atoms';
import Molecules from '../molecules';

export default function AdditionalProducts({ additionalProducts }) {
  return (
    <section>
      <Atoms.ListHeaderWrapper>
        <Atoms.Title2 color='inherit'>보험</Atoms.Title2>
      </Atoms.ListHeaderWrapper>
      <ul>
        {additionalProducts.map(({ name, amount }) => (
          <li key={name}>
            <Molecules.ListItem
              title={name}
              content={`월 ${amount.toLocaleString()} 원`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

AdditionalProducts.prototype = {
  additionalProducts: PropTypes.arrayOf.isRequired
};
