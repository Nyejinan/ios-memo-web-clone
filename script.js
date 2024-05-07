function toggleDarkMode() {
    if(document.querySelector('body').classList.contains('dark-mode')){
        document.body.classList.remove("dark-mode");
    }
    else{
        document.body.classList.add("dark-mode");
    }
}
function toggleCategoryBar() {
    // 현재 body 태그의 category-bar 속성 값을 가져옵니다.
    var categoryBarStatus = document.body.getAttribute('category-bar');
    
    // category-bar 속성 값에 따라 토글합니다.
    if (categoryBarStatus === 'on') {
        document.body.setAttribute('category-bar', 'off');
    } else {
        document.body.setAttribute('category-bar', 'on');
    }
}

function toggleSideBar() {
    // 현재 body 태그의 side-bar 속성 값을 가져옵니다.
    var sideBarStatus = document.body.getAttribute('side-bar');
    
    // category-bar 속성 값에 따라 토글합니다.
    if (sideBarStatus === 'off') {
        document.body.setAttribute('side-bar', 'on');
    } else {
        document.body.setAttribute('side-bar', 'off');
    }
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

// disclosure 버튼 누르면 카테고리 접고 펴기
// 모든 '.group' 요소에 대해 이벤트 리스너를 추가
document.querySelectorAll('.group').forEach(function(group) {
    // 마우스가 영역 위로 이동할 때
    group.addEventListener('mouseover', function() {
        // 현재 '.group' 요소 내에서 '.indent-2s'를 찾음
        const indent2s = group.querySelector('.indent-2s');
        const disclosure = group.querySelector('.disclosure-img');
        if (indent2s) { // '.indent-2s' 요소가 존재하는지 확인
            const scrollHeight = indent2s.scrollHeight + "px"; // 실제 높이를 계산
            indent2s.style.height = scrollHeight; // 실제 높이로 설정
            indent2s.style.opacity = 1;
            disclosure.setAttribute('src', 'images/closure.svg');
        }


    });
    
    // 마우스가 영역을 벗어날 때
    group.addEventListener('mouseout', function() {
        const indent2s = group.querySelector('.indent-2s');
        const disclosure = group.querySelector('.disclosure-img');
        if (indent2s) { // '.indent-2s' 요소가 존재하는지 확인
            indent2s.style.height = "0"; // 높이를 0으로 설정하여 숨김
            indent2s.style.opacity = 0;
            disclosure.setAttribute('src', 'images/disclosure.svg');
        }
    });
});