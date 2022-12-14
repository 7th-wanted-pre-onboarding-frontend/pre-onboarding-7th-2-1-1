import React, {
  createContext,
  useCallback,
  useContext,
  useReducer
} from 'react';

const CarsContext = createContext(null);
const CarsDispatchContext = createContext(null);
export const useCarsState = () => useContext(CarsContext);
export const useCarsDispatch = () => useContext(CarsDispatchContext);

function reducer(state, action) {
  switch (action.type) {
    case 'SET_CAR_LIST':
      const data = action?.data || {};
      return {
        ...state,
        list: { ...state.list, ...data }
      };
    case 'SET_CAR_DETAIL':
      return {
        ...state,
        detail: action?.detail
      };
    default:
      return state;
  }
}

const initialState = {
  list: {},
  detail: {}
};

export default function CarsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onSetCarList = useCallback(
    (data) => dispatch({ type: 'SET_CAR_LIST', data }),
    []
  );
  const onSetCarDetail = useCallback(
    (detail) => dispatch({ type: 'SET_CAR_DETAIL', detail }),
    []
  );

  return (
    <CarsContext.Provider value={{ state }}>
      <CarsDispatchContext.Provider value={{ onSetCarList, onSetCarDetail }}>
        {children}
      </CarsDispatchContext.Provider>
    </CarsContext.Provider>
  );
}
