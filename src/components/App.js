import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const fetchQuestions = () => {
      fetch("http://localhost:4000/questions")
        .then(response => response.json())
        .then(data => {
          setQuestions(data)
        })
    }

    fetchQuestions()
  }, [])


  function handleNewQuestion(question) {
    setQuestions([...questions, question])
  }



  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleNewQuestion={handleNewQuestion} /> : <QuestionList questions={questions} setQuestions={setQuestions} />}
    </main>
  );
}

export default App;
