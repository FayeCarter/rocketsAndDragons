import styled from 'styled-components';

export const StyledItem= styled.div`

  padding-bottom: 20px;
  margin: 0;
  width: 100%;

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

  .tags {
    display: flex;
    padding: 5px;
    justify-content: space-between;
  }

  &:hover {
    span {
      path {
        fill: #AB1D20;
      }
    }
  }
`;

export const StyledContainer = styled.div`
  &:hover {
    .card {
      background-color: #f2f2f2;
    }
  }
    
`;
