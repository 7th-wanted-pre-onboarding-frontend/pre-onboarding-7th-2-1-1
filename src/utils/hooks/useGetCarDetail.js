import { useCallback, useEffect, useMemo, useState } from 'react';
import Car from '../classes/car';
import { useCarsDispatch, useCarsState } from '../contexts/CarProvider';
import CarsService from '../services/cars.service';

export default function useGetCarDetail(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const { state } = useCarsState();
  const { onSetCarList, onSetCarDetail } = useCarsDispatch();
  const data = useMemo(() => state.list[id] || {}, [state, id]);
  const areCarList = Object.keys(state.list).length > 0;

  const onGetCarDetail = useCallback(async () => {
    setIsLoading(() => true);
    try {
      const {
        data: { payload }
      } = await CarsService.getCars();
      const cars = payload.reduce(
        (result, item) => ({
          ...result,
          [item.id]: new Car(item)
        }),
        {}
      );
      onSetCarList(cars);
      onSetCarDetail(cars[id]);
    } catch (e) {
      setIsError(() => true);
      setError(() => e?.message || '데이터를 가져오는데 실패하였습니다.');
    } finally {
      setIsLoading(() => false);
    }
  }, []);

  useEffect(() => {
    if (!areCarList) {
      onGetCarDetail();
    } else {
      setIsLoading(false);
      onSetCarDetail(data);
    }
  }, [id]);

  return {
    data,
    isError,
    isLoading,
    error
  };
}
