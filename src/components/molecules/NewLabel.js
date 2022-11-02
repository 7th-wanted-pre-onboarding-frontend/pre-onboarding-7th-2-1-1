import React from 'react';
import Atoms from '../atoms';

export default function NewLabel() {
  return (
    <section
      style={{
        position: 'absolute',
        top: '-10px',
        right: '-12px'
      }}
    >
      <Atoms.Label
        width='52px'
        height='22px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        color='blue'
      >
        <Atoms.Body2 color='inherit'>신규</Atoms.Body2>
      </Atoms.Label>
    </section>
  );
}
