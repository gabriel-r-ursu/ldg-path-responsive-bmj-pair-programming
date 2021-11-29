import styled from 'styled-components'

const TestWrapper = styled.section`
/*Test values to check if styled-components work. */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <TestWrapper>
      <p>This does not error out.</p>
      <p>Styled-components work in the app as well.</p>
    </TestWrapper>
  );
}

export default App;
