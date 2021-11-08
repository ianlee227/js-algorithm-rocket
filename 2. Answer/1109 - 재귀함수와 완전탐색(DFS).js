// 📚 1. 재귀함수
function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

solution(3);

// 📚 2. 이진수 출력(재귀)
function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));

// 📚 3. 이진트리순회(깊이우선탐색)
function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + " ";
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));

// 📚 4. 부분집합 구하기(DFS)
function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L) {
    if (L === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));

// 📚 5. 합이 같은 부분집합(DFS : 아마존 인터뷰)
function solution(arr) {
  let answer = "NO",
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
