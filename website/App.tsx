import {FunctionalComponent, h} from 'preact';
import Router from 'preact-router';
import GlobalStyles from './styles/GlobalStyles'
import tw, { styled } from 'twin.macro'

const StyledElement = styled.p(() => [
  tw`underline`,
])

const App: FunctionalComponent = () => {
  return (
    <>
      <GlobalStyles />
      <>
        <StyledElement>
          Underline styled element
        </StyledElement>
        <br />
        <div tw='underline'>
          Div with with tw property 'underline'
        </div>
      </>
    </>
  );
};

export default App;
