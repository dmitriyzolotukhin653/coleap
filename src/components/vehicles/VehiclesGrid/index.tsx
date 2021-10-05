import React from 'react';

import { VehicleData } from '../../../api/types';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './const';

interface VehiclesListProps {
  vehiclesList: VehicleData[];
  loading: boolean;
  selectVehicle: (vehicleData: VehicleData | null) => void;
}

const VehiclesList: React.FunctionComponent<VehiclesListProps> = ({
  vehiclesList,
  loading,
  selectVehicle,
}) => {
  const rows = React.useMemo(
    () =>
      vehiclesList.map((vehicleData) => ({
        id: vehicleData.id,
        photo: vehicleData.photo,
        model: vehicleData.model,
        make: vehicleData.make,
        price: vehicleData.price,
      })),
    [vehiclesList]
  );

  const handleRowClick = React.useCallback(
    (row) => {
      const vehicle = vehiclesList.find(
        (vehicleData) => vehicleData.id === row.id
      );
      selectVehicle(vehicle || null);
    },
    [vehiclesList, selectVehicle]
  );

  return (
    <DataGrid
      loading={loading}
      rows={rows}
      columns={columns}
      autoPageSize={true}
      onRowClick={handleRowClick}
    />
  );
};

export default VehiclesList;
