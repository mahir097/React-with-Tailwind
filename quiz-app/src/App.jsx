import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Main from "./components/Main";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Footer from "./components/Footer";
import NextButton from "./components/NextButton";
import FinishScreen from "./components/FinishScreen";
import Time from "./components/Time";

const SEC_PER_QUESTION = 30;

const initialState = {
  questions: [],

  //loading, error, ready, active, finished
  status: "loading",

  points: 0,
  currentQuestionIndex: 0,
  currentAnswer: null,
  highscore: 0,
  secondRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    case "error":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SEC_PER_QUESTION,
      };
    case "newAnswer":
      return {
        ...state,
        currentAnswer: action.payload,
        points:
          action.payload ===
          state.questions[state.currentQuestionIndex].correctOption
            ? state.points + state.questions[state.currentQuestionIndex].points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        currentAnswer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        points: 0,
        currentQuestionIndex: 0,
        currentAnswer: null,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Invalid action type");
  }
}

export default function App() {
  const [
    {
      questions,
      status,
      currentQuestionIndex,
      currentAnswer,
      points,
      highscore,
      secondRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const questionsLength = questions.length;
  const maxPoint = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataRecieved", payload: data }))
      .catch((error) => dispatch({ type: "error" }));
  }, []);

  return (
    <div className="w-[600px] mx-auto">
      <Header />
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "ready" && (
        <StartScreen length={questionsLength} dispatch={dispatch} />
      )}

      {status === "active" && (
        <>
          <Main>
            <Progress
              length={questionsLength}
              index={currentQuestionIndex}
              answer={currentAnswer}
              points={points}
              maxPoint={maxPoint}
            />

            <Question
              questions={questions[currentQuestionIndex]}
              answer={currentAnswer}
              dispatch={dispatch}
            />
          </Main>
          <Footer>
            <Time dispatch={dispatch} secondRemaining={secondRemaining} />
            <NextButton
              index={currentQuestionIndex}
              answer={currentAnswer}
              dispatch={dispatch}
              length={questionsLength}
            />
          </Footer>
        </>
      )}

      {status === "finished" && (
        <FinishScreen
          points={points}
          maxPoint={maxPoint}
          dispatch={dispatch}
          highscore={highscore}
        />
      )}
    </div>
  );
}
