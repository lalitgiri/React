import AddEditQuestion from "../add-edit-question/add-edit-question";
import ViewQuestion from "../view-question/view-question";

function QuestionList({ questionList, setQuestions }) {
    return questionList.map((ele, index) => {
        const { mapkey } = ele;
        return (ele.edit ?
            <AddEditQuestion key={mapkey} questionDetail={ele} questionNumber={index} addQuestion={() => setQuestions([...questionList])} />
            : <ViewQuestion key={mapkey} questionDetail={ele} questionNumber={index} editQuestions={() => setQuestions([...questionList])} />)
    });
}

export default QuestionList;