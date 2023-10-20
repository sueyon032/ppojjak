// 이벤트 리스너: HTML 문서가 로드되었을 때 실행
document.addEventListener("DOMContentLoaded", function() {
    // HTML에서 클래스 이름이 "menu"인 요소를 찾아 menu 변수에 할당
    const menu = document.querySelector('.menu');

    // 마우스 움직임 이벤트 리스너
    document.addEventListener('mousemove', function(event) {
        // 만약 마우스의 x좌표가 200 이하이면
        if (event.clientX <= 200) {
            // 메뉴를 화면 안으로 이동시켜 보이게 함
            menu.style.transform = 'translateX(0)';
        } else {
            // 그렇지 않으면 메뉴를 화면 왼쪽으로 -200px만큼 이동시켜 숨김
            menu.style.transform = 'translateX(-200px)';
        }
    });
});
