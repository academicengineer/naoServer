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

適宜，下記のgitコマンドでバージョン管理しています．

    git add ファイル名
    git commit -m "コメント"
    git push origin main
    git status
