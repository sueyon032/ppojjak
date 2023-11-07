document.addEventListener('DOMContentLoaded', function () {
    const quizText = document.querySelector('.quiz-text-question');
    const answer1 = document.querySelector('.answer-1');
    const answer2 = document.querySelector('.answer-2');
    const nextButton = document.querySelector('#next-button');
    let quizData; // quiz_data를 저장할 변수
    let currentIndex = 0; // 현재 퀴즈 인덱스
    let resultMessage1; // 결과 메시지를 저장할 변수
    let resultMessage2; // 결과 메시지를 저장할 변수

    function createOxButton(text) {
        // 새로운 h1 태그 생성
        const newOxButton = document.createElement('h1');
        newOxButton.textContent = text.replace(/'(.*?)'/g, '<br><span style="color: #FF4B91;">$1</span>');
        return newOxButton;
    }

    function resetAnswerDivs() {
        answer1.style.backgroundColor = 'white';
        answer2.style.backgroundColor = 'white';
        answer1.style.pointerEvents = 'auto'; // answer-1을 클릭할 수 있게 함
        answer2.style.pointerEvents = 'auto'; // answer-2를 클릭할 수 있게 함
    }

    function displayQuiz(index) {
        if (index < quizData.length) {
            const currentQuiz = quizData[index];
            quizText.innerHTML = currentQuiz.quiz_text.replace(/'(.*?)'/g, '<br><span style="color: #FF4B91;">$1</span>');
            answer1.innerHTML = ''; // answer-1 초기화
            answer2.innerHTML = ''; // answer-2 초기화

            const newOxButton1 = createOxButton('O'); // 새로운 h1 태그 생성
            const newOxButton2 = createOxButton('X'); // 새로운 h1 태그 생성

            answer1.appendChild(newOxButton1);
            answer2.appendChild(newOxButton2);

            resultMessage1 = document.createElement('p'); // 결과 메시지 생성
            resultMessage2 = document.createElement('p'); // 결과 메시지 생성
            resultMessage1.style.color = 'white'; // 결과 메시지의 색상을 하얀색으로 설정
            resultMessage2.style.color = 'white'; // 결과 메시지의 색상을 하얀색으로 설정
            resultMessage1.style.display = 'none'; // 결과 메시지를 숨김
            resultMessage2.style.display = 'none'; // 결과 메시지를 숨김

            answer1.addEventListener('click', () => {
                if (currentQuiz.answer === 'O') {
                    answer1.style.backgroundColor = '#C3E6FF'; // 정답인 경우 answer-1의 배경색을 #C3E6FF로 변경
                } else {
                    answer1.style.backgroundColor = '#FF7676'; // 오답인 경우 answer-1의 배경색을 #FF7676로 변경
                }
                resultMessage1.innerHTML = currentQuiz.Result.replace(/\./g, '.<br>'); // 결과 메시지 설정
                answer1.appendChild(resultMessage1); // 결과 메시지를 보여줌
                resultMessage1.style.display = 'block'; // 결과 메시지를 표시
                answer1.style.pointerEvents = 'none'; // answer-1을 클릭하지 못하게 함
                answer2.style.pointerEvents = 'none'; // answer-2를 클릭하지 못하게 함
                answer1.removeChild(newOxButton1); // 클릭한 div의 h1 태그 삭제
            });

            answer2.addEventListener('click', () => {
                if (currentQuiz.answer === 'X') {
                    answer2.style.backgroundColor = '#C3E6FF'; // 정답인 경우 answer-2의 배경색을 #C3E6FF로 변경
                } else {
                    answer2.style.backgroundColor = '#FF7676'; // 오답인 경우 answer-2의 배경색을 #FF7676로 변경
                }
                resultMessage2.innerHTML = currentQuiz.Result.replace(/\./g, '.<br>'); // 결과 메시지 설정
                answer2.appendChild(resultMessage2); // 결과 메시지를 보여줌
                resultMessage2.style.display = 'block'; // 결과 메시지를 표시
                answer2.style.pointerEvents = 'none'; // answer-2를 클릭하지 못하게 함
                answer1.style.pointerEvents = 'none'; // answer-1을 클릭하지 못하게 함
                answer2.removeChild(newOxButton2); // 클릭한 div의 h1 태그 삭제
            });
        } else {
            quizText.textContent = "퀴즈가 모두 종료되었습니다.";
            answer1.innerHTML = '';
            answer2.innerHTML = '';
            nextButton.style.pointerEvents = 'none'; // nextButton을 클릭하지 못하게 함
        }
    }

    nextButton.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < quizData.length) {
            resetAnswerDivs(); // 퀴즈가 변경되면 정답 표시 초기화
            displayQuiz(currentIndex);
            if (currentIndex === quizData.length - 1) {
                nextButton.textContent = '다시하기'; // Change the text of the "Next" button to "다시하기" when all questions are displayed
            }
        } else if (currentIndex >= quizData.length) {
            currentIndex = 0;
            nextButton.textContent = 'Next'; // Change the text of the "다시하기" button back to "Next" when clicked
            displayQuiz(currentIndex);
        }
    });

    // quiz_data를 HTML에서 가져오기
    quizData = quiz_data;

    // 초기 퀴즈 표시
    displayQuiz(currentIndex);
});
