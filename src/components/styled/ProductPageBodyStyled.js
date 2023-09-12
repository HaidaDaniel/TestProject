import styled from 'styled-components';

export const StyledImgOfProduct = styled.img`
border-right: 1px solid grey;
border-bottom: 1px solid grey;
padding-right: 2rem;
padding-bottom: 2rem;
margin-bottom: 2rem;

@media (max-width: 768px) {
  border-right: none !important;
  padding-right: 0;
}
`