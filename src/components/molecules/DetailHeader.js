import React from 'react';
import { useNavigate } from 'react-router-dom';
import Atoms from '../atoms';
import Icons from '../icons';

export default function DetailHeader() {
  const navigate = useNavigate();

  return (
    <Atoms.HeaderWrapper>
      <section style={{ position: 'relative', height: '100%' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)'
          }}
        >
          <button type='button' onClick={() => navigate(-1)}>
            <Icons.Back />
          </button>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Atoms.Title2>차량상세</Atoms.Title2>
        </div>
      </section>
    </Atoms.HeaderWrapper>
  );
}
