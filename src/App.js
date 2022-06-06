import { useState } from 'react';

import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';

function App() {
  // 임시 데이터
  const questions = [
    {
      title: 'Q1 입니다.',
      desc: 'desc1 입니다.',
      type: 'select',
      required: false,
      options: {},
    },
    {
      title: 'Q2 입니다.',
      desc: 'desc2 입니다.',
      type: 'text',
      required: true,
      options: {},
    },
  ];

  const step = 0; // 현재 바라보는 질문이 몇번 질문인지

  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={setAnswers((newAnswer) => {
          const newAnswers = [...answers];
          newAnswers[step] = newAnswer;
          return newAnswers;
        })}
      />
    </div>
  );
}

export default App;
