import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../ProgressIndicator';
import QuestionBox from '../../QuestionBox';

function SurveyPage() {
  // 임시 데이터
  const questions = [
    {
      title: 'Q1 입니다.',
      desc: 'desc1 입니다.',
      type: 'select',
      required: false,
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
    {
      title: 'Q2 입니다.',
      desc: 'desc2 입니다.',
      type: 'text',
      required: true,
      options: {
        placeholder: 'placeholder Q2',
      },
    },
    {
      title: 'Q3 입니다.',
      desc: 'desc3 입니다.',
      type: 'textarea',
      required: true,
      options: {
        placeholder: 'placeholder Q3',
      },
    },
  ];
  const params = useParams();
  const step = parseInt(params.step);
  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default SurveyPage;
