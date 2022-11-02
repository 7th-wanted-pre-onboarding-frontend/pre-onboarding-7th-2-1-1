import styled from 'styled-components';

const CarItemWrapper = styled.section`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
  position: relative;
`;

export default CarItemWrapper;
