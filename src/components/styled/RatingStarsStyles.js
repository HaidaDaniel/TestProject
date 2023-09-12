import styled from 'styled-components';

export const RatingStarsContainer = styled.div`
  display: inline-block;
  margin-left: 0;
`;

export const Star = styled.span`
  font-size: 24px;
  color: #ccc;
`;

export const FilledStar = styled(Star)`
  color: ${(props) => props.theme.colors.golden};
`;

export const HalfFilled = styled.span`
  position: relative;
  color: ${(props) => props.theme.colors.golden};
  content: "\2605";
  font-size: 20px;
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  color: ${(props) => props.theme.colors.golden};
`;

export const InputRating = styled.input`
  max-width: 3rem;
`;

export const MainSpan = styled.span`
  display: inline-block;
  width: 24px;
`;