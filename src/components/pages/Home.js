import React, { useState } from 'react';
import filters from '../../utils/constants/filters';
import MetaTag from '../MetaTag';
import Molecules from '../molecules';
import Organisms from '../organisms';
import Template from '../templates/Template';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState({
    fuelType: {},
    segment: {},
    all: filters[0]
  });
  return (
    <>
      <MetaTag
        title='원티드 알티모빌리티 기업과제'
        ogTitle='원티드 알티모빌리티 기업과제'
        ogDescription='안녕하세요. 프론트엔드 개발자 윤태성입니다. 이 사이트는 원티드 알티모빌리티 기업과제의 결과물입니다.'
        ogImage='/og.png'
      />
      <Template>
        <Molecules.Filters
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <Organisms.CarList selectedFilter={selectedFilter} />
      </Template>
    </>
  );
}
