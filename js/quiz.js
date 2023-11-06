document.addEventListener('DOMContentLoaded', function () {
    const quizText = document.querySelector('.quiz-text-question');
    const oxButtons = document.querySelectorAll('.ox-button');
    let quizData; // JSON 데이터를 저장할 변수

    // JSON 파일을 가져오는 함수
    function fetchQuizData() {
        fetch('quiz_data.json')
            .then(response => response.json())
            .then(data => {
                quizData = data;
                displayQuiz(0); // 초기 퀴즈 표시
            })
            .catch(error => console.error('Error fetching quiz data: ', error));
    }

    function displayQuiz(index) {
        const currentQuiz = quizData[index];
        quizText.innerHTML = currentQuiz.quiz_text;

        // 색상 초기화
        oxButtons.forEach(button => {
            button.style.backgroundColor = 'lightgray';
        });

        oxButtons.forEach(button => {
            button.addEventListener('click', () => {
                const userAnswer = button.getAttribute('data-answer');
                if (userAnswer === currentQuiz.answer) {
                    button.style.backgroundColor = 'green'; // 정답인 경우 녹색 배경색
                } else {
                    button.style.backgroundColor = 'red'; // 오답인 경우 빨간 배경색
                }
            });
        });
    }

    fetchQuizData(); // 데이터 가져오기

    document.querySelector('#next-button').addEventListener('click', () => {
        // 다음 퀴즈 표시 (현재는 다음 퀴즈로 이동만 가능)
        if (quizData && quizData.length > 1) {
            displayQuiz(1);
        }
    });
});
