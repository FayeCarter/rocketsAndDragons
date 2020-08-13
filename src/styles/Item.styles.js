import styled from 'styled-components';

export const StyledItem= styled.div`

padding-bottom: 20px;

  h2 {
    text-align: center;
  }

  p {
    text-align: justify;
  }

  img {
    object-fit: cover;
    height: 250px;
    max-width: 100%;

  }

  span {
    float: right;
  }

  &:hover {
    span {
      path {
        fill: #AB1D20;
      }
    }
  }
`;
