import React from "react";
import BackToUp from '@uiw/react-back-to-top';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px; /* Set width to 20px */
  height: 30px; /* Set height to 20px */
`;

export default function BackToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <BackToUp className="text-blue-500" onClick={handleScrollToTop}>↑</BackToUp>
    </Wrapper>
  );
}
