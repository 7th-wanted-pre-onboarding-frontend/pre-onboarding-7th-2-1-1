import React from 'react';
import Atoms from '../atoms';

export default function Loading() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <Atoms.Title2>불러오는 중</Atoms.Title2>
    </section>
  );
}
