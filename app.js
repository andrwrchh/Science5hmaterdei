

document.getElementById("checkQuiz").addEventListener("click", () => {

  const answers = {
    q1: 12,
    q2: 48,
    q3: 35,
    q4: 17.5,
    q5: 4,
    q6: 1320,
    q7: 5,
    q8: 44,
    q9: 550
  };

  let score = 0;

  for (let key in answers) {
    const input = document.getElementById(key);
    const user = parseFloat(input.value);
    const correct = answers[key];

    // Reset classes
    input.classList.remove("quiz-correct", "quiz-wrong");

    if (Math.abs(user - correct) < 0.1) {
      score++;
      input.classList.add("quiz-correct");
    } else {
      input.classList.add("quiz-wrong");
    }
  }

  const resultBox = document.getElementById("quizResult");
  resultBox.innerHTML = `<strong>${score}/9 bonnes réponses</strong>`;
});

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navToggle.classList.toggle("active");
});