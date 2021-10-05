import { GridColDef } from '@mui/x-data-grid';

import { VehicleImage } from './styles';

import CarPhoto from '../../../assets/pictures/car.jpeg';

const getNumberFromString = (str: string): number => {
  const numberRegex = /(?<number>\d+)/;
  const result = numberRegex.exec(str);
  return Number(result?.groups?.number) ?? 0;
};

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
  {
    field: 'price',
    headerName: 'Price',
    flex: 1,
    sortComparator: (v1, v2) => {
      const v1Num = getNumberFromString(v1 as string);
      const v2Num = getNumberFromString(v2 as string);
      if (v1Num === v2Num) return 0;
      if (v2Num > v1Num) return 1;
      return -1;
    },
  },
];
