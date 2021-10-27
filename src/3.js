const clockTitle = document.querySelector(".js-clock");

writeTime();

setInterval(writeTime, 1000);

/**
 * 크리스마스까지 남은 일 수 그리기
 */
function writeTime() {
  const christmas = new Date(2021, 11, 25).getTime();
  const currentTime = Date.now();

  const timeDifference = christmas - currentTime;

  const day = Math.floor(timeDifference / 1000 / 86400)
    .toString()
    .padStart(2, "0");
  const hour = Math.floor((timeDifference / 1000 / 60 / 60) % day)
    .toString()
    .padStart(2, "0");
  const minute = Math.floor((timeDifference / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  const second = Math.floor((timeDifference / 1000) % 60)
    .toString()
    .padStart(2, "0");

  clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
}
