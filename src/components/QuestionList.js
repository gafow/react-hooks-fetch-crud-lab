import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  function handleDeleteQuestion(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(() => {
        const results = questions.filter((question) => question.id !== id)
        setQuestions(results)
      })
  }

  function handleAnswerChange(id, correctIndex) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "correctIndex": correctIndex
      })
    }).then(resp => resp.json())
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map((question, i) => (<QuestionItem key={i} question={question} handleDeleteQuestion={handleDeleteQuestion} handleAnswerChange={handleAnswerChange} />))
      }</ul>
    </section>
  );
}

export default QuestionList;
