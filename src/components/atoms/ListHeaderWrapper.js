import styled from 'styled-components';

const ListHeaderWrapper = styled.section`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 13px 20px;
`;

export default ListHeaderWrapper;
