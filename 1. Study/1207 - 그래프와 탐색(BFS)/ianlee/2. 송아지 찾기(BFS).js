function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0); // 중복체크용
  let dis = Array.from({ length: 10001 }, () => 0); // 레벨확인용
  let queue = []; // 탐색용
  queue.push(s); // 출발좌표 넣음
  ch[s] = 1; // check 시작지점 체크
  dis[s] = 0; // 출발 지점 0 level
  while (queue.length) { // queue가 비어서 0이되면 종료
    let x = queue.shift(); // 첫 출발 좌표 5가 shift되어 탐색
    for (let nx of [x - 1, x + 1, x + 5]) { // 순서대로 방향 탐색
      if (nx === e) return dis[x] + 1; // 도착점과 같으면 distance배열의 x값 +1이 정답
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) { // 체크가 0이어야 나오지 않은 숫자
        ch[nx] = 1; // 나온값은 체크
        queue.push(nx); // 탐색할 다음 값들 queue에 넣기
        dis[nx] = dis[x] + 1; // 새로운 level에 전 level값에 +1
      }
    }
  }
  return answer;
}

console.log(solution(5, 14));
