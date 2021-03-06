import React from "react";
import styled from "styled-components";
const ICON_SIZE = 14;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & h1 {
    font-size: ${(props) => props.theme.fontSizes[3]}px;
    letter-spacing: 3px;
    font-weight: ${(props) => props.theme.fontWeights[2]};
  }
`;
const ActionIconGroup = styled.div`
  width: ${ICON_SIZE * 3}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ExplorerTitle = () => {
  return (
    <Wrapper>
      <h1>EXPLORER</h1>
      <ActionIconGroup />
    </Wrapper>
  );
};

export default ExplorerTitle;
