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
            qis.service('ALTextToSpeech').done(function(tts){
                als.alTextToSpeech = tts;
                tts.say('接続成功');
            });
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
        qis.service('ALTextToSpeech').done(function(tts){
            als.alTextToSpeech = tts;
            tts.say('こんにちは、NAOです！よろしくお願いいたします。');
        });
        qis.service('ALMotion').done(function(alm){
            als.alMotion = alm;
        });
        qis.service('ALRobotPosture').done(function(arp){
            als.alRobotPosture = arp;
        });
        qis.service('ALAudioDevice').done(function(aad){
            als.alALAudioDevice = aad;
            als.alALAudioDevice.setOutputVolume(0);
        });
        qis.service('ALAnimatedSpeech').done(function(aas){
            als.alAnimatedSpeech = aas;
        });
        qis.service('ALAutonomousLife').done(function(aal){
            als.alALAutonomousLife = aal;
        });
        qis.service('ALBehaviorManager').done(function(abm){
            als.alALBehaviorManager = abm;
        });
        qis.service('ALBattery').done(function(alb){
            als.alALBattery = alb;
        });
        qis.service('ALBasicAwareness').done(function(aba){
            als.alALBasicAwareness = aba;
        });
        qis.service('ALAutonomousMoves').done(function(aam){
            als.alALAutonomousMoves = aam;
        });
        qis.service('ALLeds').done(function(all){
            als.alALLeds = all;
        });
        qis.service('ALSystem').done(function(als){
            als.alALSystem = als;
        });
    })
    .on('disconnect', function(){
        if(als.alTextToSpeech) als.alTextToSpeech.say('接続失敗です');
        //qis.service('ALAnimatedSpeech').done(function(ins){
        //    ins.say('こんにちは、僕はNAO先生です');
        //});
    });
});
