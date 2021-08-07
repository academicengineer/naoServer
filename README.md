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
適宜，下記のgitコマンドでバージョン管理しています．うまくNAOの講義が再生されない場合は，ブラウザのキャッシュを削除してください．

    git add ファイル名
    git commit -m "コメント"
    git push origin main
    git status
    git pull origin :naoServer # リモートからローカルに pull してくる
    git push origin naoServer  # ローカルからリモートに push する
    git push origin main
    scp .\nao.js nao@nao.local:/data/home/nao/.local/share/PackageManager/apps/

# 参考
下記の情報に基づき作成しました．

    https://qiita.com/ExA_DEV/items/dd4bda65dfab1e7f5d07
    https://qiita.com/oggata/items/0a9b144d585b8dafa8d9
