$(function(){
    var qis, ip, als = {};

    // 接続ボタンclickイベント
    $('#connect-btn').on('click', function(){
        // 入力IP取得
        ip = $('#ip').val();
        // NAOqi Session 生成
        qis = new QiSession(ip);
        // 接続
        qis.socket()
        .on('connect', function(){
            // 接続成功
            console.log('[CONNECTED]');
            // ALTextToSpeechを使う
            qis.service('ALTextToSpeech').done(function(ins){
                als.alTextToSpeech = ins;
            });
        })
        .on('disconnect', function(){
            // 接続断
            console.log('[DISCONNECTED]');
        })
        .on('error', function(){
            // 接続エラー
            console.log('[CONNECTION ERROR]');
        });
    });

    // テストボタンclickイベント
    $('#test-btn').on('click', function(){
        // NAOにしゃべらせる
        console.log('[TEST]');
        if(als.alTextToSpeech) als.alTextToSpeech.say('こんにちは、僕はNAO先生です！よろしく');
        qis.service('ALTextToSpeech').done(function(tts){
            tts.say('こんにちは、僕はペッパー！');
        });
        //qis.service('ALAnimatedSpeech').done(function(ins){
        //    // TODO: ここにモジュールを使ったコードを書く
        //});
    });
});
