import React from 'react';

import { VehicleData } from '../../../api/types';
import { ModalButton, ModalContainer, ModalText, ModalWrapper } from './styles';

interface VehicleModalProps {
  selectedVehicleData: VehicleData;
  open: boolean;
  closeModal: () => void;
}

const VehicleModal: React.FunctionComponent<VehicleModalProps> = ({
  open,
  selectedVehicleData,
  closeModal,
}) => {
  return (
    <ModalWrapper open={open}>
      <ModalContainer>
        <ModalText>Make: {selectedVehicleData.make}</ModalText>
        <ModalText>Model: {selectedVehicleData.model}</ModalText>
        <ModalText>Colors: {selectedVehicleData.colors}</ModalText>
        <ModalText>Price: {selectedVehicleData.price}</ModalText>
        <ModalText>Range unit: {selectedVehicleData.range.unit}</ModalText>
        <ModalText>Range distance: {selectedVehicleData.range.distance}</ModalText>
        <ModalButton variant="outlined" onClick={closeModal}>Close modal</ModalButton>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default VehicleModal;
