# レポジトリ内容

このレポジトリは[Web白熱教室](https://tsuyopon.xyz/)の[JavaScriptの学習コンテンツ > JavaScriptバックエンド編](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/)にある「[【エクササイズ】掲示板APIを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/js-excercise-for-backend-7/)」で利用するものです。

## 課題

- 以下の「課題をクリアするためのステップ」の内容を全て対応する

### 課題をクリアするためのステップ

- [ ] 依存ライブラリはpackage.jsonで管理する
- [ ] node_modulesは `.gitignore` でgit管理から外す
- [ ] APIサーバーはexpressで実装する
- [ ] 以下の機能を実装する
    - [ ] APIサーバーに「GET /api/comments」でリクエストを投げると `コメント一覧` がレスポンス値として返ってくる
    - [ ] APIサーバーに「POST /api/comments」でリクエストを投げると `新規にコメントを1件作成して、作成したコメント1件` がレスポンス値として返ってくる
    - [ ] APIサーバーに「PUT /api/comments/:id」でリクエストを投げると `idに紐づくコメントを1件更新して、更新したコメント1件` がレスポンス値として返ってくる
    - [ ] APIサーバーに「DELETE /api/comments/:id」でリクエストを投げると `idに紐づくコメントを1件削除して、削除したコメント1件` がレスポンス値として返ってくる
- [ ] コメント(Model)が持つ情報は以下の通り
    - id : 数値。新しいコメントを作成するたびにid値が1増えて、他のコメントとidが重複しないようにする。([オートインクリメント](https://qiita.com/sakuraya/items/0dd0bb4114e56f42556d))
    - username : 文字列
    - body : 文字列
    - createdAt : [Date](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date)。コメントを作成した時点の日付をセットする
    - updatedAt : [Date](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date)。コメントを作成した時点と更新した時点の日付をセットする
- [ ] 「POST /api/comments」「PUT /api/comments/:id」を実行する際は、`username`、 `body`の送信を必須とする。
    - `username` が送信データに含まれていない場合は、`usernameは必須です` というエラーメッセージを返し、ステータスコードには400を返す
    - `body` が送信データに含まれていない場合は、`bodyは必須です` というエラーメッセージを返す、ステータスコードには400を返す
- [ ] [git flow](https://qiita.com/KosukeSone/items/514dd24828b485c69a05)を意識して機能別にブランチを切って作業を進める
    - [ ] masterブランチから、開発ブランチとして「develop」ブランチを作成する
    - [ ] developブランチから機能毎にfeatureブランチを作成する(以下のfeatureブランチ名は一例)
        - [ ] feature/setup-env : 開発を始めるのに必要なライブラリや設定などを行う
        - [ ] feature/create-a-comment-model : Comment Modelの用意
        - [ ] feature/implement-the-find-all-method-in-the-model : Comment Modelにコメント一覧を取得するメソッドを用意する
        - [ ] feature/implement-the-create-method-in-the-model : Comment Modelに新規コメントを追加するメソッドを用意する
        - [ ] feature/implement-the-update-method-in-the-model : Comment Modelに既存コメント1件を更新するメソッドを用意する
        - [ ] feature/implement-the-remove-method-in-the-model : Comment Modelに既存コメント1件を削除するメソッドを用意する
        - [ ] feature/implement-api-for-the-get-comments :  「GET /api/comments」にリクエストを投げたらコメント一覧が返ってくるAPIを実装する
        - [ ] feature/implement-api-for-the-post-comments :  「POST /api/comments」にリクエストを投げたら新規にコメントを1件作成して、作成したコメントデータが返ってくるAPIを実装する
        - [ ] feature/implement-api-for-the-put-comments-id :  「PUT /api/comments/:id」にリクエストを投げたらidに紐づくコメントが更新されるAPIを実装する
        - [ ] feature/implement-api-for-the-delete-comments-id :  「DELETE /api/comments/:id」にリクエストを投げたらidに紐づくコメントが削除されるAPIを実装する
- [ ] Modelの機能、APIの機能全てのテストを実装する
- [ ] 実装後は、Postmanやテストコードを使って意図通り動いていることを確認する

## レビュー依頼時の注意

- featureブランチでの実装が終わって、プルリクエストを作成する場合は、マージ先ブランチはdevelopブランチとする
- レビューでOKが出てマージしたとき、GitHub上のdevelopブランチだけが更新されている状態で、ローカル(=自分のパソコン)のdevelopブランチはまだ更新されていないので、`git pull`をしてローカルのdevelopブランチも最新の状態にする。(GitHub上のdevelopブランチと同じ状態を保つようにする)


## 実装に行き詰まったら

以下の「参考記事」のそれぞれの記事で、機能別に1つずつ実装を行っています。
該当する機能(GET, POST, PUT, DELETE)ごとに、該当する記事を参考にしながら実装を進めて頂けたらと思います。

以下の「参考記事」のプルリクエストでは、1ブランチ毎にどのように実装を進めているか見える化しているので、そちらも参考にしていただけたらと思います。


## 参考記事

課題をこなしていて、行き詰まったら以下の資料を参考にしていただければ解答にたどり着けるかと思います。


- Web白熱教室
    - [【事前準備】Modelファイルの作成【配列でダミーのDBを作る】](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/create-a-model-with-mock-db/)
    - [【Model実装】Todo一覧を取得する機能を実装【テスト含む】](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/implement-the-find-all-method-in-a-model/)
    - [【Controller実装】Todo一覧を取得するAPIを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/create-a-controller-and-router-and-implement-get-todos/)
    - [【テスト実装】Todo一覧を取得するAPIのテストを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/create-a-test-file-for-the-get-todos-api/)
    - [【Model実装】Todo1件を新規作成する機能を実装【テスト含む】](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/implement-the-create-method-in-a-model/)
    - [【Controller実装】Todo1件を新規作成するAPIを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/implement-an-api-for-the-post-todo/)
    - [【テスト実装】Todo1件を新規作成するAPIのテストを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/create-a-test-file-for-the-post-todos-api/)
    - [【リファクタリング】Todo一覧を取得するAPIのテストを修正する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/refactor-the-test-file-of-the-get-todos-api/)
    - [【Model実装】既存のTodo1件を更新する機能を実装【テスト含む】](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/implement-the-update-method-in-a-model/)
    - [【Controller作成】既存のTodo1件を更新するAPIを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/implement-an-api-for-the-put-todo/)
    - [【テスト実装】既存のTodo1件を更新するAPIのテストを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/create-a-test-file-for-the-put-todos-id-api/)
    - [【Model実装】既存のTodo1件を削除する機能を実装【テスト含む】](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/implement-the-remove-method-in-a-model/)
    - [【Controller作成】既存のTodo1件を削除するAPIを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/implement-an-api-for-the-delete-todo/)
    - [【テスト実装】既存のTodo1件を削除するAPIのテストを実装する](https://tsuyopon.xyz/learning-contents/web-dev/javascript/backend/create-a-test-file-for-the-delete-todos-id-api/)
- プルリクエスト(`git flow` の開発スタイルで機能毎にブランチを分けて実装を進める際に参考になるページ)
    - https://github.com/tsuyopon-xyz/api_server_with_mock_db/pulls?q=is%3Apr+is%3Aclosed