function toggleCategoryBar() {
    document.body.classList.toggle('active');   // '<폴더' 버튼 누르면 active on -> 카테고리바 보임
}

function showTime() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][today.getDay()];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][today.getMonth()];
    const day = today.getDate();

    // 분이 한 자리수일 경우 앞에 0을 추가합니다.
    min = min < 10 ? "0" + min : min;

    // 날짜 및 시간 형식을 설정합니다. 예: 23:59, 월 6일 화
    var time = hour + ":" + min;
    const date = dayOfWeek + " " + month + " " + day;

    // HTML에 표시합니다.
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;

    // 함수를 매 분마다 다시 실행합니다.
    setTimeout(showTime, 60000);
}

  // 페이지가 로드될 때 함수를 실행합니다.
window.onload = function() {
    showTime();
};