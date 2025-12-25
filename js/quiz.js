var questions = [];
var index = 0;
var score = 0;
var currentModule = "";

function startQuiz(level) {
  currentModule = level.toUpperCase();
  questions = quizData[level];
  index = 0;
  score = 0;

  document.getElementById("moduleBox").classList.add("hidden");
  document.getElementById("quizBox").classList.remove("hidden");
  document.getElementById("resultBox").classList.add("hidden");

  loadQuestion();
}

function loadQuestion() {
  var q = questions[index];

  document.getElementById("progress").innerText =
    currentModule + " MODULE — Question " + (index + 1) + " / " + questions.length;

  document.getElementById("question").innerText = q.question;

  var html = "";
  for (var i = 0; i < q.options.length; i++) {
    html += `
      <button class="option-btn" onclick="selectAnswer(${i})">
        ${q.options[i]}
      </button>
    `;
  }
  document.getElementById("options").innerHTML = html;
}

function selectAnswer(choice) {
  if (choice === questions[index].answer) {
    score++;
  }

  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quizBox").classList.add("hidden");
  document.getElementById("resultBox").classList.remove("hidden");

  document.getElementById("score").innerText =
    "Score: " + score + " / " + questions.length;

  var html = "";
  for (var i = 0; i < questions.length; i++) {
    html += `
      <p>
        <b>Q${i + 1}:</b> ${questions[i].question}<br>
        ✅ Correct Answer: ${questions[i].options[questions[i].answer]}
      </p>
    `;
  }
  document.getElementById("answers").innerHTML = html;
}

function restartQuiz() {
  index = 0;
  score = 0;

  document.getElementById("resultBox").classList.add("hidden");
  document.getElementById("quizBox").classList.remove("hidden");

  loadQuestion();
}

function backToModules() {
  index = 0;
  score = 0;
  questions = [];

  document.getElementById("resultBox").classList.add("hidden");
  document.getElementById("moduleBox").classList.remove("hidden");
}
