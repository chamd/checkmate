var notice0 = '<p class="titles">참여방법</p><p class="descs">1. 정선고등학교 도서관에 가서 명단에 이름을 작성하고 한손책 도구를 가져간다.<br>2. 한손책 도구를 이용해 책을 읽는다.<br>3. 학번 이름이 적힌 포스트잇과 함께 인증 사진을 찍는다.<br>4. 카카오톡 오픈채팅방에 참여한다는 메세지와 함께 사진을 전송한다.<br><br>+ 읽은 책에 대한 독후감까지 작성하여 올리면 선착순 10명에게 싸이버거 기프티콘을 드립니다.<br>독후감 용지는 도서관에 함께 비치되어 있습니다.<br>독후감은 최소 5줄 이상 써주시길 부탁드립니다.<br><br><a href="https://open.kakao.com/o/sJaSaRMd">1 : 1 카카오톡 오픈채팅방 링크 [클릭]</a></p>';

function notice(num) {
    if( num != -1) {
        document.getElementById("content").innerHTML = `<button class='tolist' onclick='notice(-1);'>&times</button><div class='notice-content'>${notice0}</div>`;
    } else {
        document.getElementById("content").innerHTML = "<div class='notice' onclick='notice(0);'>이벤트 참여 방법</div>";
    }
}
