import styled from 'styled-components';

const Title2 = styled.h2`
  ${(props) => props.theme.fontStyles.title2};
  color: ${({ color, theme }) => color || theme.colors.black};
`;

export default Title2;
