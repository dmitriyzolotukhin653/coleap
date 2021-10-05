import styled from '@emotion/styled';
import { Button, Modal } from '@material-ui/core';

export const ModalWrapper = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  margin: 12px;
  max-width: 400px;
  width: 100%;
  max-height: 90%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 8px;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalText = styled.div`
  margin: 8px 0;
  font-size: 1rem;
`;

export const ModalButton = styled(Button)`
  margin-top: 8px;
`;
