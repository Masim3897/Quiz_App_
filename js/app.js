const questions = [
    {
        'que': 'which of the following is markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'a'
    },
    {
        'que': 'which of the following is programming language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'OOP',
        'd': 'Python',
        'correct': 'd'
    },
    {
        'que': 'which of the following is stlye language?',
        'a': 'Java',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll(".options")
function loadQuestion() {

    if (index == total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    console.log(data)
    quesBox.innerText = `${index + 1})${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = ()=> {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = ()=> {
    let answer;
    optionInput.forEach(
        (input) =>{
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = ()=> {
    optionInput.forEach(
        (input) =>{
           input.checked = false
        }
    )
}

const endQuiz = ()=> {
    document.getElementById("box").innerHTML = `
        <h2> Thank you for attempt the Quiz</h2>
        <h3> ${right} / ${total} are correct</h3>
    `
}

loadQuestion();
