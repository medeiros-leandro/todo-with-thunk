import styled from "styled-components";

const HomeStyled = styled.div`
  padding: 5px 30px;

  .form-todo {
    width: 750px;
    margin: 0 auto 17px;
    display: flex;

    input {
      width: calc(100% - 31px);
    }
  }

  .wrap {
    width: 750px;

    display: flex;
    flex-direction: column;

    margin: 0 auto;

    .item {
      border: 1px solid #ccc;
      padding: 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      &.-done {
        text-decoration: line-through;
        opacity: 0.7;
      }
    }
  }
`;

export default HomeStyled;
