# naoServer
クライアントPCから，JavaScript経由でNAOをサーバとしてやり取りするためのプログラムです．
# 使い方
以下のNAOのディレクトリに必要なファイルを配置します．※NAOのnginxの都合です．

    /opt/aldebaran/var/www/apps

必要なファイルは，下記の通りです．

    test.html
    qimessaging.js
    socket.io.min.js
    jquery.min.js
    nao.js
 
クライアントPCのブラウザから下記のアドレスを開きます．なぜか nao.local ではうまくいかないので注意を．

    http://NAOのIPアドレス/apps/test.html

「接続」ボタンをクリックし，ブラウザのデベロッパーツールで，[CONNECTED]が表示されると成功です．

「テスト」ボタンをクリックして，NAOがしゃべるのを確認してください．

# NAOのAPI一覧について
公式の http://doc.aldebaran.com/2-1/naoqi/ を参考にする．


# 管理
適宜，下記のgitコマンドでバージョン管理しています．最後に scp して NAOにファイルを転送します．


うまくNAOの講義が再生されない場合は，ブラウザのキャッシュを削除してください．

    git add ファイル名
    git commit -m "コメント"
    git push origin main
    scp .\nao.js nao@nao.local:/data/home/nao/.local/share/PackageManager/apps/

# 参考
下記の情報に基づき作成しました．https://qiita.com/ExA_DEV/items/dd4bda65dfab1e7f5d07.md

    https://qiita.com/ExA_DEV/items/dd4bda65dfab1e7f5d07
    https://qiita.com/oggata/items/0a9b144d585b8dafa8d9

# BuFFALO-A-3420 のIPアドレス
nv8kvdvb8k6ua

# NAOqiの使い方
こんな感じです．


        qis.service('ALMotion').done(function(alm){
            als.alMotion = alm;
            alm.moveTo();
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

**JavaScript制御で使えそうなNAOqiモジュール一覧**

| モジュール名 | 機能 | 使えそうなメソッド |
|:-----------|:------------|:------------|
| ALMemory　| NAOqiは key, value の組み合わせで内部状態をメモリ管理しています。ALMemory を使うとそれらの値にアクセスできるようになります。| <nobr>`insertData`</nobr><br />メモリに値を登録<br /><nobr>`getData`</nobr><br />メモリの値を取得<br /><nobr>`raiseEvent`</nobr><br />イベントを発火させる |
| ALBehaviorManager     | Pepperにインストールされたアプリケーション（Behaviorと呼ばれています）の起動や停止を行います。 | <nobr>`stopAllBehaviors`</nobr><br />起動中のBehaviorを全て終了<br /><nobr>`runBehavior`</nobr><br />指定IDのBehaviorを起動する    |
| ALAutonomousLife | Pepperはオートノマスライフと呼ばれる動作モードがあり、デフォルトではsolitaryモードになっています。ALAutonomousLifeはこのモードを制御します。 | <nobr>`getState`</nobr><br />現在のモードを取得する<br /><nobr>`setState`</nobr><br />モードを設定する     |
| ALTabletService | Pepperに装着されているタブレットを制御します。 | <nobr>`showWebview`</nobr><br />ブラウザを起動する<br /><nobr>`enableWifi`</nobr><br />タブレットのwifiを有効化<br /><nobr>`loadUrl`</nobr><br />指定URLを開く<br /><nobr>`showImage`</nobr><br />画像を表示する<br /><nobr>`showInputDialog`</nobr><br />入力欄付きダイアログの表示<br /><nobr>`hideWebview`</nobr><br />ブラウザを閉じる |
| ALMotion       | Pepperにポーズを取らせたり、移動させたりと物理的な動きを制御するほか、スリープモードに切り替えたりできます。 | <nobr>`rest`</nobr><br />スリープモードにする<br /><nobr>`wakeUp`</nobr><br />スリープモードから復帰する<br /><nobr>`robotIsWakeUp`</nobr><br />起きていればtrueを返す<br /><nobr>`moveTo`</nobr><br />移動・回転を行う<br /><nobr>`setAngles`</nobr><br />関節を動かす |
| ALAnimatedSpeech    | 身振り手振りを伴いつつしゃべらせます。 | <nobr>`say`</nobr><br />身振り手振りしつつしゃべる<br /> |
| ALAudioDevice    | 音声の設定を行います。 |  <nobr>`getOutputVolume`</nobr><br />声の大きさを取得する<br /><nobr>`setOutputVolume`</nobr><br />声の大きさを設定する<br /> |
| ALSpeechRecognition    | 簡易的な音声認識を行います。予め登録された語彙に反応します。 | <nobr>`setVocabulary`</nobr><br />認識する語彙を設定する<br /><nobr>`subscribe`</nobr><br />聞き取り開始<br /><nobr>`unsubscribe`</nobr><br />聞き取り停止<br /> |
| ALTextToSpeech    | しゃべらせます。 | <nobr>`say`</nobr><br />しゃべらせる |
| ALBattery    | 内蔵バッテリーの状態を取得します。 |   <nobr>`getBatteryCharge`</nobr><br />バッテリー残量を取得する<br /> |

