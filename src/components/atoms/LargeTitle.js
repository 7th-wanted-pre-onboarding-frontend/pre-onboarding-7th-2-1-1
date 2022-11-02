import styled from 'styled-components';

const LargeTitle = styled.h1`
  ${(props) => props.theme.fontStyles.LargeTitle};
  color: ${({ color, theme }) => color || theme.colors.black};
`;

export default LargeTitle;
