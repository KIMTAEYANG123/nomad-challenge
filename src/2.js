const main = document.querySelector(".main");
const rdn = document.querySelector(".rdn");
let guess = document.querySelector(".guess");
const form = document.querySelector("form");
let rdnValue;

rdn.addEventListener("blur", (e) => {
  rdnValue = e.target.value;

  if (isNaN(parseInt(rdnValue, 10))) {
    e.target.value = "";
    rdnValue = "";
    alert("숫자를 입력해주세요");
  } else {
    rdnValue = parseInt(rdnValue, 10);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";
  const guessValue = parseInt(guess.value, 10);

  const random = Math.ceil(Math.random() * rdnValue);

  main.innerHTML =
    guessValue === random
      ? `<p>You chose : ${guessValue}  the machine chose : ${random}.</p>
          <h2>You Win!</h2>`
      : `<p>You chose : ${guessValue}  the machine chose : ${random}.</p>
          <h2>You lost!!</h2>`;
});
