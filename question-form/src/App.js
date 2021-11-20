import { Button, Container } from '@mui/material';
import { useState } from 'react';
import './App.css';
import AddEditQuestion from './components/add-edit-question/add-edit-question';
import QuestionList from './components/question-list/question-list';
import ViewQuestion from './components/view-question/view-question';

function App() {

  let [questions, setQuestions] = useState([]);
  let updateQuestion = () => {
    setQuestions([{ choice: true, question: '', options: [], edit: true, mapkey: Date.now() }, ...questions]);
  }
  return (
    <Container>
      <div className="add-question">
        <Button variant="text" onClick={updateQuestion}>+ Add Question</Button>
      </div>
      <div>
        {questions.length > 0 && getQuestionList(questions,setQuestions)}
      </div>
    </Container>
  );
}

export default App;

const getQuestionList = (questionList, setQuestions) => {
  console.log('qwerty');
  return questionList.map((ele, index) => {
    const { mapkey } = ele;
    return (ele.edit ?
      <AddEditQuestion key={mapkey} questionDetail={ele} questionNumber={index} addQuestion={() => setQuestions([...questionList])} />
      : <ViewQuestion key={mapkey} questionDetail={ele} questionNumber={index} editQuestions={() => setQuestions([...questionList])} />)
  });
}
