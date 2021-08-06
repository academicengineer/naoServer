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
            qis.service('ALMotion').done(function(ins){
                als.alMotion = ins;
            });
            qis.service('ALRobotPosture').done(function(ins){
                als.alRobotPosture = ins;
            });
            qis.service('ALAudioDevice').done(function(ins){
                als.alALAudioDevice = ins;
                als.alALAudioDevice.setOutputVolume(0);
            });
            qis.service('ALAnimatedSpeech').done(function(ins){
                als.alAnimatedSpeech = ins;
            });
            qis.service('ALTabletService').done(function(ins){
                als.alALTabletService = ins;
            });
            qis.service('ALAutonomousLife').done(function(ins){
                als.alALAutonomousLife = ins;
            });
            qis.service('ALBehaviorManager').done(function(ins){
                als.alALBehaviorManager = ins;
            });
            qis.service('ALBattery').done(function(ins){
                als.alALBattery = ins;
            });
            qis.service('ALBasicAwareness').done(function(ins){
                als.alALBasicAwareness = ins;
            });
            qis.service('ALAutonomousMoves').done(function(ins){
                als.alALAutonomousMoves = ins;
            });
            qis.service('ALLeds').done(function(ins){
                als.alALLeds = ins;
            });
            qis.service('ALSystem').done(function(ins){
                als.alALSystem = ins;
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
        //qis.service('ALTextToSpeech').done(function(tts){
        //    tts.say('こんにちは、僕はペッパー！');
        //});
        qis.service('ALAnimatedSpeech').done(function(ins){
            ins.say('こんにちは、僕はNAO先生です');
        });
    });
});
