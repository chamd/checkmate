function notice(num) {
    if( num != -1) {
        document.getElementById("content").innerHTML = "<button class='tolist' onclick='notice(-1);'>&times</button>테스트임";
    } else {
        document.getElementById("content").innerHTML = "<div class='notice' onclick='notice(0);'>이벤트 참여 방법</div>";
    }
}