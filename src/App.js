import { Route, Routes } from 'react-router-dom';

import CompletionPage from './components/pages/CompletionPage';
import SurveyPage from './components/pages/SurveyPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/done" element={<CompletionPage />} />
        <Route path="/survey/:surveyId" element={<SurveyPage />}>
          <Route path=":step" element={<SurveyPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

/*

/survey에서 추가로 필요한 것 : 설문ID


*/
export default App;
