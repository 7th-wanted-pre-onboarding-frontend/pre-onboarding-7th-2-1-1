import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Car from '../../utils/classes/car';
import Atoms from '../atoms';
import Molecules from '../molecules';

export default function CarItem({ item }) {
  const {
    id,
    imageUrl,
    name,
    brand,
    segmentText,
    fuelTypeText,
    amount,
    isNew
  } = item;
  return (
    <li>
      <Link to={`/car/${id}`}>
        <Atoms.CarItemWrapper>
          <div>
            <div>
              <Atoms.Title3>
                {name}
                <br />
                {brand}
              </Atoms.Title3>
            </div>
            <div
              style={{
                marginTop: '8px'
              }}
            >
              <Atoms.Body2>
                {`${segmentText} / ${fuelTypeText}`}
                <br />
                {`월 ${amount}원 부터`}
              </Atoms.Body2>
            </div>
          </div>
          <div>
            <Atoms.ImageWrapper type='car-item'>
              <img
                width='100%'
                height='100%'
                src={imageUrl}
                alt={`${name}_photo`}
              />
              {isNew && <Molecules.NewLabel />}
            </Atoms.ImageWrapper>
          </div>
        </Atoms.CarItemWrapper>
      </Link>
    </li>
  );
}

CarItem.propTypes = {
  item: PropTypes.instanceOf(Car).isRequired
};
