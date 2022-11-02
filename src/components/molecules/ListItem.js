import React from 'react';
import PropTypes from 'prop-types';
import Atoms from '../atoms';

export default function ListItem({ title, content }) {
  return (
    <section
      style={{
        padding: '13px 21px 14px 19px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Atoms.Title2>{title}</Atoms.Title2>
      <Atoms.Body1>{content}</Atoms.Body1>
    </section>
  );
}

ListItem.prototype = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
