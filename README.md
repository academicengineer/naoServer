# naoServer
クライアントPCから，JavaScript経由でNAOをサーバとしてやり取りするためのプログラムです．
# 使い方
以下のNAOのディレクトリに必要なファイルを配置します

    /opt/aldebaran/var/www/apps

必要なファイルは，下記の通りです

    test.html
    qimessaging.js
    socket.io.min.js
    jquery.min.js
    pepper.js
 
クライアントPCのブラウザから下記のアドレスを開きます．

    http://nao.local/apps/test.html

「接続」ボタンをクリックし，ブラウザのデベロッパーツールで，[CONNECTED]が表示されると成功です．「テスト」ボタンをクリックして，NAOがしゃべるのを確認してください．
