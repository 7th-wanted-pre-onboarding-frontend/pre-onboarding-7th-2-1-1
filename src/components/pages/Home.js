import React, { useState } from 'react';
import Molecules from '../molecules';
import Organisms from '../organisms';
import Template from '../templates/Template';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <Template>
      <Molecules.Filters
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Organisms.CarList selectedFilter={selectedFilter} />
    </Template>
  );
}
