import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CompletionPage() {
  return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
}
const a = 123;

const CompletionPageWrapper = styled.div`
  background-color: aqua;
  padding: ${a === 123 ? '4em' : '1em'};
`;

export default CompletionPage;
