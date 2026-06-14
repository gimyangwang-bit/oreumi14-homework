const scores = [85, 92, 58, 74, 66, 100, 43];

//문제1. 등급 구하기//

function getGrade(score) {
  if (score >= 90) {
    return "A";
  }
  if (score >= 80) {
    return "B";
  }
  if (score >= 70) {
    return "C";
  }
  if (score >= 60) {
    return "D";
  }
  return "F";
}

// 문제 2. 합격 여부 구하기

function isPassed(score) {
  if (score >= 60) {
    return true;
  }
  return false;
}

//문제 3. 평균 점수 구하기

function getAverage(scores) {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
}

// 문제 4. 합격 점수만 모으기

function getPassedScores(scores) {
  return scores.filter((score) => score >= 60);
}

// 문제 5. 점수 설명 문장 만들기

function getScoreMessages(scores) {
  return scores.map((score) => score + "점은" + getGrade(score) + "등급입니다");
}

// 문제 6. 전체 리포트 출력하기

function printScoreReport(scores) {
  scores.forEach((score) => {
    let passStatus = "";
    if (score >= 60) {
      passStatus = "합격";
    } else {
      passStatus = "불합격";
    }
    console.log(score + "점" + getGrade(score) + "등급," + passStatus);
  });
}

// 문제 7. 최종 요약 출력하기
function printSummary(scores) {
  console.log("평균 점수:" + getAverage(scores) + "점");
  console.log("합격 점수:" + getPassedScores(scores) + "점");
  console.log("점수 설명");
  const messages = getScoreMessages(scores);
  messages.forEach((message) => {
    console.log(message);
  });
}

//도전 문제 (이름과 점수 연결하기)

const names = ["민수", "지은", "도윤", "서연", "하준", "유나", "지호"];
function printNamedScoreReport(names, scores) {
  names.forEach((name, i) => {
    const score = scores[i];

    const passStatus = score >= 60 ? "합격" : "불합격";

    console.log(
      name + ": " + score + "점 " + getGrade(score) + "등급, " + passStatus,
    );
  });
}
