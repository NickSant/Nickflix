import styled from "styled-components";

export const VideoCardContainer = styled.a`
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 170px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 1px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: all 0.7s ease;
  &:hover,
  &:focus{
    transform: scale(1.2);
    overflow-y: visible;
    margin: 0 20px;
    z-index: 10;
    
  }

  &:not(:first-child) {
    margin-left: 5px;
  }
`;
