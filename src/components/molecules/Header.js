import React from 'react';
import Atoms from '../atoms';

export default function Header() {
  return (
    <Atoms.HeaderWrapper>
      <section style={{ position: 'relative', height: '100%' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Atoms.Title2>전체차량</Atoms.Title2>
        </div>
      </section>
    </Atoms.HeaderWrapper>
  );
}
