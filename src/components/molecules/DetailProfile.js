import React from 'react';
import PropTypes from 'prop-types';
import Atoms from '../atoms';

export default function DetailProfile({ imageUrl, alt, brand, name, amount }) {
  return (
    <section>
      <Atoms.ImageWrapper>
        <img
          width='100%'
          height='100%'
          src={imageUrl}
          alt={alt}
          style={{
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </Atoms.ImageWrapper>
      <section
        style={{
          padding: '20px'
        }}
      >
        <div>
          <Atoms.Title1>{brand}</Atoms.Title1>
          <Atoms.LargeTitle>{name}</Atoms.LargeTitle>
        </div>
        <div
          style={{
            marginTop: '34px',
            textAlign: 'right'
          }}
        >
          <Atoms.Body1>{`월 ${amount} 원`}</Atoms.Body1>
        </div>
      </section>
    </section>
  );
}

DetailProfile.prototype = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};
