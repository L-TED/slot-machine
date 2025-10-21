import "./query.js";
import "./spin.js";
import "./coin.js";
import "./cash.js";
import "./input.js";
/*
 게임 만들기(이하 목록 중 1 개 선택):
 - 슬롯머신(빠칭코) ✔
 - 다른 색 찾기
 - 카드 짝 맞추기
 - 기억력 테스트
 - 두더지 잡기
 - 타자 게임(단어 비 게임)

 1. 주제 정하기
 2. 기획 하기
 3. 파일 구조 정하기
 4. 오브젝트 클래스 리스트 출력
*/
/* 
 1. 게임: 슬롯머신
 2. 기획:
  - 3 개의 라인에 여러 종류의 심볼(아이콘) 넣고 배팅금 지정 - 라인 마다 배팅 가능 - 심볼(아이콘)에 따라 당첨금 변화(곱연산으로)
  - 슬롯머신 한판당 배팅금액 = 라인 수 * 라인 당 배팅금
  - 초기 코인(기회) 수 지정
  - 슬롯머신을 활성화하고 스핀 버튼을 눌러 게임을 플레이 가능
  - 게임에서 승리를 할 시, 배팅금에 비례하여 상금을 크레딧으로 지급(애플리케이션 스토리지에 저장)
  - 크레딧은 환수율을 고려해 현금(마찬가지로 스토리지에)으로 지급 가능(버튼을 통해서)
 3. 파일 구조:
  - HTML:
   - 심볼(아이콘)이 돌아가는 라인 세 개를 div로 생성
   - 배팅금을 지정하는 인풋 생성
   - 배당을 기록할 span 생성
   - 코인을 div와 span등을 생성해 기본적인 지급(5회)을 하고 리셋 버튼을 만들어 코인 충전
   - 스핀 버튼(플레이 버튼)을 생성해 게임 플레이 활성화

  - JS:
   - 돌아가는 라인 제작
   - 모든 배당을 스토리지에 기재함
   - 코인 충전은 코인을 모두 소진했을 때, 스토리지에 있는 크레딧이나, 현금으로 충전(스토리지 밸류에서 차감)
   - 스핀 버튼을 눌렀을 때, 남은 코인을 차감하고 라인 세 개를 돌려 심볼(아이콘)을 랜덤으로 출력 
   - 스토리지의 배당은 해당 span태그에 정확한 값을 실시간으로 보여주기
   - 쿼리와 함수, 클래스를 각각의 js 파일에 분류
  *배당 및 코인, 캐시 변환: 
     - 배당: 인풋 배팅금(크레딧에서 차감, 기본값: 100) * 심볼 배수 -> 크레딧으로 지급 (예: 배팅금 200에 레몬 3줄 당첨 -> 600크레딧 지급)
     - 코인 변환: 차지 코인 -> 코인 5개 증감 = 크레딧 100 차감
     - 캐시 변환: 크레딧 100 당 캐시 90달러 반환
  *심볼 배당률: 수박🍉 -> 1 배, 체리🍒 -> 1.5 배, 사과🍎 -> 2 배, 레몬🍋 -> 3 배, 7🍀 -> 7배

  - CSS:
   - 라인들의 행과 열 맞추기
   - 버튼 태그 묶어서 간격 맞춰 나열
   - 반응형 만들기(최종)
 4. 오브젝트 클래스 리스트: X
 */

window.addEventListener("load", () => {
  alert(
    "The game rules:\n1. Type the bet as much as you want, make sure to type as much you have or less credit than you have\n2. Once you type the bet, you cna press spin button to play game\n3. When the 3 symbols match each other, you will earn a credit\n4. A dividend rate: 🍉: x1 🍒: x1.5 🍎: x2 🍋: x3 🍀: x7\n5. You can change your credits to cash, it will be saved at storage and main page to show\n6. You can charge 5 coins as pressing the charge coins button, with using 100 credits\n"
  );
});
