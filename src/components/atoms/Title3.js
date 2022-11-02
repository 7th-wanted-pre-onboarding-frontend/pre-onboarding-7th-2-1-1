import styled from 'styled-components';

const Title3 = styled.h3`
  ${(props) => props.theme.fontStyles.title3};
  color: ${({ color, theme }) => color || theme.colors.black};
`;

export default Title3;
