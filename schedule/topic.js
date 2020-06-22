let topicsArray = new Array(
    "@勇士 勝",
    "vs籃網 負",
    "@籃網 負",
    "vs爵士 勝",
    "vs黃蜂 勝",
    "@灰熊 勝"
);

let startDate = new Date();

function setMonthAndDate(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略,設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//先在程式碼中指定社團課程第一天
setMonthAndDate(4,1);