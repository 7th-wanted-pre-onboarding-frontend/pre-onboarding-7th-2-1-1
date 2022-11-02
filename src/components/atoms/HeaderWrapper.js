import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

export default HeaderWrapper;
