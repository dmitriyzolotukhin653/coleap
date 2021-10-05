import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { VehicleData } from '../../api/types';
import { getVehicles } from '../../api';

interface VehiclesState {
  vehiclesList: VehicleData[];
  loading: boolean;
  error: string | null;
}

const initialState: VehiclesState = {
  vehiclesList: [],
  loading: false,
  error: null,
};

export const getVehiclesList = createAsyncThunk<VehicleData[]>(
  'vehicles/getVehiclesList',
  async () => {
    const response = await getVehicles();
    return response.data;
  }
);

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVehiclesList.pending, (state) => {
      state.vehiclesList = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getVehiclesList.fulfilled, (state, action) => {
      state.vehiclesList = action.payload;
      state.loading = false;
    });
    builder.addCase(getVehiclesList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error?.message ?? 'Something goes wrong';
    });
  },
  initialState,
});

export default vehiclesSlice.reducer;
