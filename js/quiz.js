document.addEventListener('DOMContentLoaded', function () {
    const quizText = document.querySelector('.quiz-text-question');
    const answer1 = document.querySelector('.answer-1'); // answer-1 요소
    const answer2 = document.querySelector('.answer-2'); // answer-2 요소
    let quizData; // quiz_data를 저장할 변수
    let currentIndex = 0; // 현재 퀴즈 인덱스
    let answered = false; // 사용자가 이미 선택을 했는지 여부를 나타내는 변수

    function displayQuiz(index) {
        const currentQuiz = quizData[index];
        quizText.textContent = currentQuiz.quiz_text;

        answer1.addEventListener('click', () => {
            if (!answered) { // 사용자가 아직 선택하지 않은 경우에만 실행
                answered = true;
                if (currentQuiz.answer === 'O') {
                    answer1.style.backgroundColor = '#C3E6FF'; // 정답인 경우 answer-1의 배경색을 #C3E6FF로 변경
                } else {
                    answer1.style.backgroundColor = '#FF7676'; // 오답인 경우 answer-1의 배경색을 #FF7676로 변경
                }
            }
        });

        answer2.addEventListener('click', () => {
            if (!answered) { // 사용자가 아직 선택하지 않은 경우에만 실행
                answered = true;
                if (currentQuiz.answer === 'X') {
                    answer2.style.backgroundColor = '#C3E6FF'; // 정답인 경우 answer-2의 배경색을 #C3E6FF로 변경
                } else {
                    answer2.style.backgroundColor = '#FF7676'; // 오답인 경우 answer-2의 배경색을 #FF7676로 변경
                }
            }
        });
    }

    // quiz_data를 HTML에서 가져오기
    quizData = quiz_data;

    // 초기 퀴즈 표시
    displayQuiz(currentIndex);

    document.querySelector('#next-button').addEventListener('click', () => {
        // 다음 버튼을 눌렀을 때 answer-1과 answer-2의 배경색 초기화 및 상태 초기화
        answer1.style.backgroundColor = 'white';
        answer2.style.backgroundColor = 'white';
        answered = false;

        currentIndex++;
        if (quizData && currentIndex < quizData.length) {
            displayQuiz(currentIndex);
        }
    });
});
