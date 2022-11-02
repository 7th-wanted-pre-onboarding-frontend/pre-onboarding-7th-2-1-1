import styled from 'styled-components';

const Label = styled.div`
  display: ${({ display }) => display || 'inline-block'};
  align-items: ${({ alignItems }) => alignItems || null};
  justify-content: ${({ justifyContent }) => justifyContent || null};
  padding: ${({ padding }) => padding || '5px 18px'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  white-space: nowrap;
  border-radius: 9999px;
  ${({ color, theme }) => {
    switch (color) {
      case 'black':
        return `
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
        `;
      case 'blue':
        return `
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
        `;
      case 'gray':
        return `
          background-color: ${theme.colors.gray};
          color: ${theme.colors.black};
        `;
      default:
        throw new Error(
          'color 속성에 black, blue, gray 하나 만을 기입해주세요.'
        );
    }
  }}
`;

Label.defaultProps = {
  color: 'gray'
};

export default Label;
