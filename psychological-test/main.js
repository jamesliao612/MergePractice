$(document).ready(function () {
    let currenQuiz = null;
    $("#startButton").click(function () {
        if (currenQuiz == null) {
            //設定目前為第0題
            currenQuiz = 0;
            //顯示題目
            $("#question").text(questions[0].question);
            //清空option內容(從頭開始時才不會遺留答案)
            $("#options").empty();
            //顯示選項
            for (let x = 0; x < questions[0].answers.length; x++) {
                $("#options").append(
                    "<input name='options' type='radio' value=" + x +
                    "><label>" + questions[0].answers[x][0] +
                    "</label><br><br>"
                );
                //將按鈕變為下一題
                $("#startButton").attr("value", "Next");
            }
        } else {
            $.each(
                $(":radio"), function (i, val) {
                    if (val.checked) {
                        //分成下一題或顯示結果
                        if (isNaN(questions[currenQuiz].answers[i][1])) {
                            let finalResult = questions[currenQuiz].answers[i][1];
                            //顯示結果標題
                            $("#question").text(finalAnswers[finalResult][0]);
                            //清空options內容
                            $("#options").empty();
                            //顯示結果內容
                            $("#options").append(finalAnswers[finalResult][1] + "<br><br>");
                            //將目前題數變數清空
                            currenQuiz = null;
                            //將按鈕變為重新開始,因為currenQuiz為null
                            $("#startButton").attr("value", "Restart");
                        } else {
                            //指定下一題
                            currenQuiz = questions[currenQuiz].answers[i][1] - 1;
                            //顯示新題目
                            $("#question").text(questions[currenQuiz].question);
                            //清空舊選項
                            $("#options").empty();
                            //顯示新選項
                            for (let x = 0; x < questions[currenQuiz].answers.length; x++) {
                                $("#options").append(
                                    "<input name='options' type='radio' value=" + x +
                                    "><label>" + questions[currenQuiz].answers[x][0] +
                                    "<label><br><br>"
                                );
                            }
                        }
                        return false;
                    }
                }
            );
        };
    });
});