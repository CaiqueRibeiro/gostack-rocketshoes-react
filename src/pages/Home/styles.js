import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    list-style: none;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
      transition: transform 0.4s;

      &:hover {
        transform: scale(1.05);
      }
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      display: flex;
      align-items: center;
      overflow: hidden;
      margin-top: auto;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }

      > div {
        display: flex;
        align-items: center;
        padding: 12px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.1);

        > svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
