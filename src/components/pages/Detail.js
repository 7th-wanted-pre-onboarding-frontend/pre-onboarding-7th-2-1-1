import React from 'react';
import { useParams } from 'react-router-dom';
import useGetCarDetail from '../../utils/hooks/useGetCarDetail';
import Molecules from '../molecules';
import Organisms from '../organisms';
import Template from '../templates/Template';

export default function Detail() {
  const { id } = useParams();
  const {
    data: {
      imageUrl,
      name,
      brand,
      amount,
      segmentText,
      fuelTypeText,
      startDate,
      insurance,
      additionalProducts
    },
    isLoading
  } = useGetCarDetail(id);

  if (isLoading) {
    return (
      <Template>
        <Molecules.Loading />
      </Template>
    );
  }

  return (
    <Template>
      <Molecules.DetailProfile
        imageUrl={imageUrl}
        alt={`${name}_photo`}
        name={name}
        brand={brand}
        amount={amount}
      />
      <Organisms.CarInfo
        segment={segmentText}
        fuelType={fuelTypeText}
        startDate={startDate}
      />
      <Organisms.Insurance insurance={insurance} />
      <Organisms.AdditionalProducts additionalProducts={additionalProducts} />
    </Template>
  );
}
