import { Link } from "react-router-dom";
import styled from "styled-components";

export const DogLink = styled(Link)`
  text-decoration: ${({ isHighlighted }) =>
    isHighlighted ? "underline dotted red" : "none"};
  color: ${({ isHighlighted }) => (isHighlighted ? "red" : "#61dafb")};
  font-weight: ${({ isHighlighted }) => (isHighlighted ? "bold" : "normal")};
  font-size: ${({ isHighlighted }) => (isHighlighted ? "1.2rem" : "1rem")};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${({ isHighlighted }) =>
      isHighlighted ? "scale(1.1)" : "scale(1.05)"};
    color: ${({ isHighlighted }) => (isHighlighted ? "#ff6347" : "#1e90ff")};
  }
`;

export const Main = styled.main`
    max-width:800px;
    margin: 0 auto;
    padding: 1 rem;
    `;

export const Header = styled.header`
    text-align: center;
  
    h1 {
      color: #333;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  `;
  export const SearchSection = styled.section`
  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;
export const ListSection = styled.section`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  li {
    background-color: #fff;
    padding: 1rem;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: calc(50% - 1rem);
    text-align: center;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      color: #61dafb;
      font-weight: bold;
    }
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-weight: bold;
`;

export const LoadingText = styled.p`
  color: gray;
  font-style: italic;
`;