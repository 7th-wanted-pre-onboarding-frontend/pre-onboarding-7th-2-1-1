import styled from 'styled-components';

const Title1 = styled.h1`
  ${(props) => props.theme.fontStyles.title1};
  color: ${({ color, theme }) => color || theme.colors.black};
`;

export default Title1;
