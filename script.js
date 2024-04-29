function toggleCategoryBar() {
    var categoryBar = document.getElementById("categoryBar");
    if (categoryBar.style.display === "none") {
        categoryBar.style.display = "flex"; // 카테고리바 표시
        categoryBar.style.flexBasis = "20%"; // 카테고리바 크기를 사이드바와 동일하게 조정
    } else {
        categoryBar.style.display = "none"; // 카테고리바 숨김
    }
}