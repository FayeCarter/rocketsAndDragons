import styled from "styled-components";

export const StyledItem = styled.div`

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
    height: 220px;
    max-width: 100%;
    border-radius: 5px;
    padding-bottom: 16px;
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
        fill: #FF7695;
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
