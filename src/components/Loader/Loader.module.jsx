import styled, { keyframes } from 'styled-components';

const loader = keyframes`
    0% {
      top: 8px;
      height: 64px;
    }
    50% {
      top: 24px;
      height: 32px;
    }
    100% {
      top: 24px;
      height: 32px;
    }
`;

export const LoaderWrapp = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
`;

export const Item = styled.div`
  display: inline-block;
  position: absolute;
  margin: 0 auto;
  left: 8px;
  width: 16px;
  background: #303f9f;
  animation: ${loader} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

  &:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  &:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`;
