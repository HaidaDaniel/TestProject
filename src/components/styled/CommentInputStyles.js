import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const StyledFormGroup = styled(Form.Group)`
 border:1px solid ${(props) => props.theme.colors.bordercolor};
 border-radius:8px;
 
`