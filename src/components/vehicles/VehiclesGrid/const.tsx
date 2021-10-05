import { GridColDef } from '@mui/x-data-grid';

import { VehicleImage } from './styles';

import CarPhoto from '../../../assets/pictures/car.jpeg';

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', sortable: false, hide: true },
  {
    field: 'photo',
    headerName: 'Photo',
    sortable: false,
    width: 110,
    renderCell: ({ row }) => <VehicleImage src={CarPhoto} alt={row.photo} />,
  },
  { field: 'model', headerName: 'Model', flex: 1 },
  { field: 'make', headerName: 'Make', flex: 1 },
  { field: 'price', headerName: 'Price', flex: 1 },
];
