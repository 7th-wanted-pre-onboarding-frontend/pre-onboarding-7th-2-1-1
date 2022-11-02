import React from 'react';
import PropTypes from 'prop-types';
import Atoms from '../atoms';
import Molecules from '../molecules';

export default function Insurance({ insurance }) {
  return (
    <section>
      <Atoms.ListHeaderWrapper>
        <Atoms.Title2 color='inherit'>보험</Atoms.Title2>
      </Atoms.ListHeaderWrapper>
      <ul>
        {insurance.map(({ name, description }) => (
          <li key={name}>
            <Molecules.ListItem title={name} content={description} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Insurance.prototype = {
  insurance: PropTypes.arrayOf.isRequired
};
