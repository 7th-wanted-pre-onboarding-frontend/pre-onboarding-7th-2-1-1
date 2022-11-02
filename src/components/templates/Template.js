import React from 'react';
import Atoms from '../atoms';
import Molecules from '../molecules';

export default function Template({ children }) {
  return (
    <Atoms.Container>
      <Molecules.Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>
    </Atoms.Container>
  );
}
