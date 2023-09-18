import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledProductItem = styled.div`
  margin: 0.3rem;
  height: 48rem;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const ProductImageBox = styled.div`
  display: flex;
  padding: 1rem;
`;

export const ProductName = styled.p`
  text-decoration: none;
  color: #212529;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #212529;

  &:hover {
    text-decoration: underline;
  }
`;