import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.2); */

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  /* position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px;

        min-width: 200px;
        min-height: 300px;

        background-color: #fff;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
        border-radius: 4px; */

  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalImg = styled.img`
  display: block;
  max-width: calc(100vw - 100px);
  max-height: calc(100vh - 70px);
`;

export const Icon = styled.i`
  font-size: 44px;
  color: #fff;
`;
