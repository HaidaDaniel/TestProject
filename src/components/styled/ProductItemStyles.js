import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const StyledProductItem = styled.div`
  margin: 0.3rem;
  height: 48rem;
  @media ${props => props.theme.media.lg} {
    height:42rem
  }
  @media ${props => props.theme.media.md} {
    height:45rem
  }
  @media ${props => props.theme.media.sm}{
    height:60rem
  }
`;
export const CardStyled = styled(Card)`
width: 100%;
height:100%;
padding:0.25rem;
`

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const ProductImageBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0.25rem;
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