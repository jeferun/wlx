import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ContentStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
  background-color: rgba(5, 5, 5, 0.5);
  width: 100%;
	height: 100%;
`;

const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingStyled = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.primary};
    border-color:
      ${({ theme }) => theme.colors.primary} transparent
      ${({ theme }) => theme.colors.primary} transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`;

const Loading = () => (
  <LoadingContainer>
    <ContentStyled>
      <LoadingStyled />
    </ContentStyled>
  </LoadingContainer>
);

export default Loading;
