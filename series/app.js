const generate = (event) => {
  event.preventDefault();
  const a = parsInt(document.querySelector(".firstNum").input.value);
  const n = parsInt(document.querySelector(".secondNum").input.value);
  const result = document.querySelector(".sum");
  let sum = 0;
  for (let i = a; i <= n; i++) {
    sum = sum + i;
    console.log(finalResult);
}

result.innerText = sum;

}