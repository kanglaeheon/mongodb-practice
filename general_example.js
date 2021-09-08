const Ticker = require("./modules/ticker");
let count = 0;  //  카운트 변수

//  tick 이벤트를 받으면 처리할 리스너
process.on("tick", () => {
    count ++;
    console.log(count, "초 경과");

    if (count >= 10) {
        ticker.emit("stop");
        console.log("Ticker 종료!");
    }
});

//  ticker 생성
let ticker = new Ticker(process);
ticker.start();