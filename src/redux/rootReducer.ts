import { combineReducers } from '@reduxjs/toolkit';

import vehiclesReducer from './slices/vehicles';

export const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
});
