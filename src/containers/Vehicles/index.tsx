import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  vehiclesErrorSelector,
  vehiclesListSelector,
  vehiclesLoadingSelector,
} from '../../redux/selectors/vehicles';
import { getVehiclesList } from '../../redux/slices/vehicles';
import VehiclesGrid from '../../components/vehicles/VehiclesGrid';
import VehicleModal from '../../components/vehicles/VehicleModal';
import { VehicleData } from '../../api/types';
import { Typography } from '@material-ui/core';

const Vehicles: React.FunctionComponent = () => {
  const [selectedVehicle, setSelectedVehicle] =
    React.useState<VehicleData | null>(null);

  const vehiclesList = useSelector(vehiclesListSelector);
  const vehiclesLoading = useSelector(vehiclesLoadingSelector);
  const vehiclesError = useSelector(vehiclesErrorSelector);
  const dispatch = useDispatch();

  const unsetSelectedVehicle = React.useCallback(() => {
    setSelectedVehicle(null);
  }, []);

  console.log('vehicles list: ', vehiclesList);

  React.useEffect(() => {
    dispatch(getVehiclesList());
  }, [dispatch]);

  return (
    <>
      <VehiclesGrid
        loading={vehiclesLoading}
        vehiclesList={vehiclesList}
        selectVehicle={setSelectedVehicle}
      />
      {selectedVehicle && (
        <VehicleModal
          open={!!selectedVehicle}
          closeModal={unsetSelectedVehicle}
          selectedVehicleData={selectedVehicle}
        />
      )}
      {vehiclesError && <Typography color={'red'}>{vehiclesError}</Typography>}
    </>
  );
};

export default Vehicles;
