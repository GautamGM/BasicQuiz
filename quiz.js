// data
const quizData = [
    {
      question: "Which of the following is a primitive data type in JavaScript?",
      options: ["Object", "Array", "String", "Function"],
      correct: 2 // "String"
    },
    {
      question: "Which method is used to convert a string to an integer in JavaScript?",
      options: ["parseFloat()", "parseInt()", "toString()", "Number()"],
      correct: 1 // "parseInt()"
    },
    {
      question: "How do you check the data type of a variable in JavaScript?",
      options: ["typeof", "instanceof", "getType()", "checkType()"],
      correct: 0 // "typeof"
    },
    {
      question: "Which of the following is not a falsy value in JavaScript?",
      options: ["0", "null", "undefined", "\"false\""],
      correct: 3 // "\"false\""
    },
    {
      question: "What is the default value of an uninitialized variable in JavaScript?",
      options: ["0", "null", "undefined", "false"],
      correct: 2 // "undefined"
    }
  ];
  
// selection the element
const quizdiv=document.querySelector("#quiz")
const questionsName=document.querySelector("#quizquestion")
const answerElt=document.querySelectorAll(".answers")
const [option_1,option_2,option_3,option_4]=document.querySelectorAll("#option_1,#option_2,#option_3,#option_4")
const submit=document.querySelector("#submit")
// =====

let currentQuiz=0
let score=0

const loadQuiz=()=>{
    const{question,options}=quizData[currentQuiz]
    questionsName.innerHTML=`${currentQuiz+1} ${question}`
    options.forEach((curent,index)=>window[`option_${index+1}`].innerHTML=curent)
}
loadQuiz()

const getSelected=()=>{
let answeElement=Array.from(answerElt)
   return answeElement.findIndex((cureent)=>cureent.checked)
}

const deselectAns=()=>{
    return answerElt.forEach((curent)=>curent.checked=false)
}

// get answer
submit.addEventListener("click",()=>{
  const selectedIndex=  getSelected()
  console.log(selectedIndex)
  console.log("hello")

  if(selectedIndex===quizData[currentQuiz].correct){
    score=score+1
  }
  currentQuiz++
  if(currentQuiz<quizData.length){
    deselectAns()
    loadQuiz()
  }else{
    const questionSection=document.querySelector(".question_section")
       quizdiv.innerHTML=
    ` <div class="result"> <h2> My score 	&#128515 </h2> <div class="myscore">${score}</div>
    <p>Congratulation you complete the quiz &#127882</p>
    <button class="playAgain" onclick="location.reload()">Play again</button>
    </div>`;
   questionSection.style.display="none"
   const task=document.querySelector("h1")
   task.innerHTML="Quiz Completed &#127882"
  }
  if(currentQuiz==quizData.length-1){
    submit.innerHTML="Submit"
  }
  else{
    submit.innerHTML="Next"
  }
})
