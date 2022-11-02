import styled from 'styled-components';

const Body1 = styled.div`
  ${(props) => props.theme.fontStyles.body1};
  color: ${({ color, theme }) => color || theme.colors.black};
`;

export default Body1;
