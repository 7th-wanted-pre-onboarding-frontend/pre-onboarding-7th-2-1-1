import styled from 'styled-components';

const Body2 = styled.div`
  ${(props) => props.theme.fontStyles.body2};
  color: ${({ color, theme }) => color || theme.colors.black};
`;

export default Body2;
