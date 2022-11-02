import React from 'react';
import { useParams } from 'react-router-dom';
import Atoms from '../atoms';
import Molecules from '../molecules';

export default function Template({ children }) {
  const params = useParams();
  const Header = params?.id ? Molecules.DetailHeader : Molecules.Header;
  return (
    <Atoms.Container>
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>
    </Atoms.Container>
  );
}
