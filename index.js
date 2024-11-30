const questions = [
    // JavaScript Questions
    { 
      ques: "What will `console.log([] + {});` output in JavaScript?", 
      'a': '[object Object]', 
      'b': '[]', 
      'c': 'NaN', 
      'd': 'undefined', 
      'correct': 'a' 
    },
    { 
      ques: "Which statement is true about `let` and `var`?", 
      'a': "`var` is block-scoped; `let` is function-scoped.", 
      'b': "`var` allows redeclaration; `let` does not.", 
      'c': "`let` is hoisted; `var` is not.", 
      'd': "Both are identical in behavior.", 
      'correct': 'b' 
    },
    { 
      ques: "What will `console.log(1 < 2 < 3);` print?", 
      'a': 'true', 
      'b': 'false', 
      'c': 'undefined', 
      'd': 'NaN', 
      'correct': 'a' 
    },
    { 
      ques: "How can you create an immutable object in JavaScript?", 
      'a': "Object.freeze()", 
      'b': "Object.lock()", 
      'c': "Object.preventExtensions()", 
      'd': "None of the above", 
      'correct': 'a' 
    },
    { 
      ques: "What does `console.log(typeof NaN);` output?", 
      'a': 'number', 
      'b': 'NaN', 
      'c': 'undefined', 
      'd': 'string', 
      'correct': 'a' 
    },
    { 
      ques: "What will `console.log('5' - 3)` output?", 
      'a': '2', 
      'b': 'NaN', 
      'c': 'undefined', 
      'd': '53', 
      'correct': 'a' 
    },
    { 
      ques: "What will `console.log(typeof (1n));` output in JavaScript?", 
      'a': 'bigint', 
      'b': 'number', 
      'c': 'string', 
      'd': 'NaN', 
      'correct': 'a' 
    },
    { 
      ques: "Which of the following is a valid way to handle asynchronous operations?", 
      'a': "Promises", 
      'b': "Callbacks", 
      'c': "Async/Await", 
      'd': "All of the above", 
      'correct': 'd' 
    },
    { 
      ques: "Which of the following methods is used to convert an object to a JSON string?", 
      'a': "JSON.stringify()", 
      'b': "JSON.parse()", 
      'c': "toString()", 
      'd': "String()", 
      'correct': 'a' 
    },
    { 
      ques: "What will the following code output: `console.log(0.1 + 0.2 === 0.3);`?", 
      'a': 'true', 
      'b': 'false', 
      'c': 'undefined', 
      'd': 'NaN', 
      'correct': 'b' 
    },
  
    // More JavaScript Questions
    { 
      ques: "Which method is used to add an element to the end of an array?", 
      'a': "push()", 
      'b': "pop()", 
      'c': "unshift()", 
      'd': "shift()", 
      'correct': 'a' 
    },
    { 
      ques: "What does `Array.prototype.reduce()` do?", 
      'a': "Reduces the size of an array.", 
      'b': "Executes a reducer function on each element, resulting in a single value.", 
      'c': "Filters elements based on a condition.", 
      'd': "Maps each element to a new value.", 
      'correct': 'b' 
    },
    { 
      ques: "Which symbol is used to denote private fields in a JavaScript class?", 
      'a': '#', 
      'b': '_', 
      'c': '*', 
      'd': '$', 
      'correct': 'a' 
    },
    { 
      ques: "What is the purpose of the `debounce` function in JavaScript?", 
      'a': "Limits the rate at which a function is executed.", 
      'b': "Executes a function after a specified time.", 
      'c': "Executes a function immediately without delay.", 
      'd': "Combines multiple function calls into one.", 
      'correct': 'a' 
    },
    { 
      ques: "Which of the following methods does not mutate the original array?", 
      'a': "slice()", 
      'b': "splice()", 
      'c': "push()", 
      'd': "pop()", 
      'correct': 'a' 
    },
  
    // HTML Questions
    { 
      ques: "What is the purpose of the `<meta>` tag in HTML?", 
      'a': "Defines metadata about the HTML document.", 
      'b': "Links CSS stylesheets.", 
      'c': "Adds JavaScript files.", 
      'd': "Creates a new element.", 
      'correct': 'a' 
    },
    { 
      ques: "Which attribute is used to specify the URL for a `<a>` tag?", 
      'a': 'href', 
      'b': 'src', 
      'c': 'link', 
      'd': 'url', 
      'correct': 'a' 
    },
    { 
      ques: "What is the purpose of the `alt` attribute in an `<img>` tag?", 
      'a': "Provides alternative text if the image fails to load.", 
      'b': "Adds a title to the image.", 
      'c': "Sets the size of the image.", 
      'd': "Changes the image position.", 
      'correct': 'a' 
    },
    { 
      ques: "Which tag is used to create a numbered list in HTML?", 
      'a': '<ol>', 
      'b': '<ul>', 
      'c': '<li>', 
      'd': '<list>', 
      'correct': 'a' 
    },
    { 
      ques: "What is the purpose of the `placeholder` attribute in an `<input>` tag?", 
      'a': "Provides a hint or instruction inside the input field.", 
      'b': "Sets a default value.", 
      'c': "Defines a label for the input field.", 
      'd': "Validates the input.", 
      'correct': 'a' 
    },
  
    // CSS Questions
    { 
      ques: "What is the default value of the `position` property in CSS?", 
      'a': 'static', 
      'b': 'relative', 
      'c': 'absolute', 
      'd': 'fixed', 
      'correct': 'a' 
    },
    { 
      ques: "Which CSS property is used to change the text color of an element?", 
      'a': 'color', 
      'b': 'text-color', 
      'c': 'font-color', 
      'd': 'background-color', 
      'correct': 'a' 
    },
    { 
      ques: "Which CSS property is used to change the background color of an element?", 
      'a': 'background-color', 
      'b': 'color', 
      'c': 'background', 
      'd': 'background-image', 
      'correct': 'a' 
    },
    { 
      ques: "What does the `hover` pseudo-class do in CSS?", 
      'a': "Applies styles when the mouse pointer is over an element.", 
      'b': "Applies styles when an element is clicked.", 
      'c': "Applies styles when an element is selected.", 
      'd': "None of the above.", 
      'correct': 'a' 
    },
    { 
      ques: "Which CSS property is used to add space inside an element's border?", 
      'a': 'padding', 
      'b': 'margin', 
      'c': 'border', 
      'd': 'width', 
      'correct': 'a' 
    },
];
  


// variable

let index = Math.floor(Math.random() * 25)   ;
let questionNumber = 1 ;
let total = questions.length ;
let right = 0 ;
let wrong = 0 ;

// selectors

const quesBox = document.getElementById("quesBox") ;
const optionInput = document.querySelectorAll(".options") ;
const sol = document.getElementById("sol") ;
const playagain = document.getElementById("playagain") ;

// functions 

const loadQuestion = () => {
    if(questionNumber === 6){
        // console.log("End") ;
        return endQuiz() ;
    }
    reset() ;
    resetSol() ;
    const data = questions[index] ;
    console.log(data) ;
    quesBox.innerText = `${questionNumber}) ${data.ques} `;
    optionInput[0].nextElementSibling.innerText = data.a ;
    optionInput[1].nextElementSibling.innerText = data.b ;
    optionInput[2].nextElementSibling.innerText = data.c ;
    optionInput[3].nextElementSibling.innerText = data.d ;
}

const nextQuiz = () => {
    const data = questions[index] ;
    let ans = getAnswer() ;
    optionInput.forEach(input => {
        input.disabled = false ;
    })
    // console.log("ans ",ans) ;
    // console.log("data.correct ",data.correct) ;
    if(ans == data.correct){
       right++ ;
    //    console.log("right ",right) ;
    }
    else{
        wrong++ ;
        // console.log("wrong ",wrong) ;
    }
    index = Math.floor(Math.random() * 25) ;
    questionNumber++ ;
    loadQuestion() ;
    return ;
}

const getAnswer= () => {
    let answer ;
     optionInput.forEach(
        (input) => {
            if(input.checked){
                 answer = input.value ;  
            }
        }
     )
     return answer ; 
}
const reset = () => {   
    optionInput.forEach(
        (input) => {
        input.checked = false ;
    }
)
        
}


const endQuiz = () => {

    document.getElementById("box").innerHTML = `<div class="flex justify-center align-center flex-col">
    <h3 class="text-2xl font-semibold py-1"> Thank you for playing the quiz </h3>
    <h2 class="text-3xl font-bold py-1"> Socre is ${right} / 5 </h2>
    <button id="playagain" onClick="restart()" class="bg-blue-500 py-1 w-32 rounded-lg font-medium hover:opacity-85">Play Again</button>
    </div>`

}  

const resetSol = () => {
    sol.style.backgroundColor = '' ;
    sol.innerHTML = '' ;
}

const submit = () => {
    const data = questions[index] ;
    const ans = getAnswer() ;
    if(!ans){
        alert("Please select an option before checking the answer !") ;
        return ;
    }
    optionInput.forEach(input=>{
        input.disabled = true ;
    })
    if(ans === data.correct){
        sol.style.backgroundColor = 'green' ;
        sol.innerHTML = `<h1>Correct</h1>`
        // console.log("Correct") ;
    }
    else{
        sol.style.backgroundColor = 'red' ;
        sol.innerHTML = `<div>
        <h1>Incorrect</h1>
        <div class="bg-white text-black text-lg px-1 py-0.5 rounded-md mt-1">Correct option is ${data.correct.toUpperCase()}</div>
        </div>`
        // console.log("Incorrect") ;
    }
} 
  ``
const restart = () => {
     location.reload() ;
}
// intial call

loadQuestion() ;