// 📚 5. 최대 매출
function solution(k, arr){
  let answer, sum=0;
  for(let i=0; i<k; i++) sum+=arr[i];
  answer=sum;
  for(let i=k; i<arr.length; i++){
      sum+=(arr[i]-arr[i-k]);
      answer=Math.max(answer, sum);
  }                    
  return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// 📚 6. 학급 회장(해쉬)
function solution(s){  
  let answer;
  let sH = new Map();
  for(let x of s){
      if(sH.has(x)) sH.set(x, sH.get(x)+1);
      else sH.set(x, 1);
  }
  let max=Number.MIN_SAFE_INTEGER;
  for(let [key, val] of sH){
      if(val>max){
          max=val;
          answer=key;
      }
  }
  return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));

// 📚 7. 아나그램
function solution(str1, str2){
  let answer="YES"; 
  let sH = new Map();
  for(let x of str1){
      if(sH.has(x)) sH.set(x, sH.get(x)+1);
      else sH.set(x, 1);
  }
  for(let x of str2){
      if(!sH.has(x) || sH.get(x)==0) return "NO";
      sH.set(x, sH.get(x)-1);
  }
  return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));

// 📚 8. 모든 아나그램
function compareMaps(map1, map2){
  if(map1.size!==map2.size) return false;
  for(let [key, val] of map1){
      if(!map2.has(key) || map2.get(key)!==val) return false;
  }
  return true;
}
function solution(s, t){
  let answer=0;
  let tH = new Map();
  let sH = new Map();
  for(let x of t){
      if(tH.has(x)) tH.set(x, tH.get(x)+1);
      else tH.set(x, 1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
      else sH.set(s[i], 1);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
      else sH.set(s[rt], 1);
      if(compareMaps(sH, tH)) answer++;
      sH.set(s[lt], sH.get(s[lt])-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));
