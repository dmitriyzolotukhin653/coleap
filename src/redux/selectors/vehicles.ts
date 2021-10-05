import { RootState } from '../store';

export const vehiclesListSelector = (state: RootState) =>
  state.vehicles.vehiclesList;
export const vehiclesLoadingSelector = (state: RootState) =>
  state.vehicles.loading;
export const vehiclesErrorSelector = (state: RootState) => state.vehicles.error;
