var player; //撥放器
var currentPlay = 0; //紀錄目前撥放第幾部影片

// YT iFrame API 載入完成
function onYouTubeIframeAPIReady(){

    player = new YT.Player("player",
    {
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0, //自動播放
            "controls":0, //控制項
            "start":playTime[currentPlay][0], //開始秒數
            "end":playTime[currentPlay][1], //結束秒數
            "showinfo":0, // 此功能已被廢除(開關上方標題)
            "rel":0, //此功能已被廢除(推薦影片連結)可透過預先載入影片迴避
            "iv_load_policy":3 //不顯示影片註解行銷
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    });
};
// 播放器準備完成
function onPlayerReady(event){

    $("#playButton").click(function(){
        $("#info").text(player.getVideoData().title);
        player.playVideo();
    });
};
// 播放器狀態改變
function onPlayerStateChange(event){
    // 當播放秒數等於設定結束秒數時,播放下一首
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        // 清單未播放完畢，播放下一首
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });

        // 若清單播放完畢，呼叫第一首
        }else{
            currentPlay = 0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
    }
    //切換影片自動抓取標題
    if(player.getVideoLoadedFraction()>0){
        $("#info").text(player.getVideoData().title);
    }
};