import styled from "styled-components";

export const StyledControls= styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;

  ul {
    list-style-type: none;
    margin: auto;
  }

  li {
    display: inline;
    align-self: center;
    padding: 0 12px;
  }

  li:hover {
    color: #FD5064;
    text-decoration: underline;
  }

  .clicked {
    color: #FD5064;
  }

  span:hover {
    path {
      fill: #FF7695;
    }
  }
`;
