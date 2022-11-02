import styled from 'styled-components';

const ImageWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
  ${({ type }) => {
    switch (type) {
      case 'car-item':
        return `
          width: 152px;
          height: 80px;
        `;
      case 'detail':
        return `
          width: 100%;
          height: 0;
          padding-bottom: 52.56%;
        `;
      default:
        throw new Error('type 속성에 car-item, detail 하나 만을 기입해주세요.');
    }
  }}
`;

ImageWrapper.defaultProps = {
  type: 'detail'
};

export default ImageWrapper;
