# フロントシラバス

## 出題方法

Lv.3
コンポーネント作成は仕様を定義し、それをもとに実装してもらう。
実装にも条件を付け、できるだけ抜け道はなくす。

Lv.2

Lv.1
pug記法
scss記法

仕様書
カード幅：
カード高さ：
カード角丸：
カード枠線：
カード上下の境界線：
ボタン幅：
ボタン高さ：
カード名の文字数は最低3段階：1、５、２０

### Vue

Lv.3
・Vueコンポーネントの作成/使用
-> 子コンポーネントを作成して親で動作させる

provide/inject
-> 親の関数を子で実行

Vuex
-> storeファイルを作成し、reactiveな値をまとめる

VueRouter
-> 画面遷移をする

Drag&Drop（VueDraggle使用）
-> トラブル防止のために用意しておく？
-> 使用設定もさせる？
-> 自力で実装（ネットで探してOK、ChatGPTは禁止）

グラフ（Highcharts使用）
-> トラブル防止のために用意しておく？
-> 使用設定もさせる？
-> 自力で実装（ネットで探してOK、ChatGPTは禁止）

Lv.2
mouseイベント
-> 

v-for
-> （key設定、v-ifと別階層になること）

v-if
-> 

v-show
-> 

template
-> 

ref
-> 

computed
-> 

watch
-> 

props/emit
-> 

Lv.1
なし

### TypeScript

Lv.3
継承（extends）
-> 

Omit
-> 

readonly
-> 

enum的な定義
-> 

Lv.2
型定義（type/interface）
-> 

パイプ（or）
-> 

Lv.1
なし

### JavaScript

Lv.3
vanillaのJSでDOM生成
-> 

Drag&Drop（VueDraggle使用）
-> 

グラフ（Highcharts使用）
-> 

flat/flatMap
-> 

リファクタリング
-> 

optional
-> 

return節
-> 

Lv.2
mouseイベント
-> 

イベント伝播
-> 

設計
-> 

JSDoc
-> JSDoc/TSDocが枯れているか(ref/computed/functionなど)

Lv.1
型（String/Numberなど）
-> 

Object
-> 

配列
-> 

for/forEach
-> 

関数の作成
-> 

不等号
-> 

if
-> 

### HTML/CSS

Lv.3
SCSS変数
-> 

position sticky
-> 

Lv.2
CSS設計
-> 

SCSS記法の基本
-> 

影響範囲の意識
-> 

モディファイアの使用
-> 

CSS変数
-> 

z-index
-> 

Lv.1
・pug

・命名規則
-> ケバブケース、複数の単語を用いて命名すること。

・form要素の使用（button/inputなど）
-> divタグを使わずに実装しなさい。

・overflow: hidden
・テキストの位置調整
-> カードタイトルが何文字であろうとも中央に配置されるようにしなさい。（カードごとに文字数を変更し、飛び出さない様にすること）
-> 左寄せで3行にしなさい。
-> 1つの文章を左寄せで3行になるようにしなさい。（改行コード禁止）
-> 左寄せで改行されるようにし、要素の越えて表示される文字量にし、ただし飛び出さない様にしなさい。

margin/padding
-> カードの配置、buttonの余白

position（relative/absolute）
マウスオーバー（hover）
-> カード名のマウスオーバーでツールチップを表示させなさい。（ツールチップにはカード名を表示させること）

疑似要素（before/after）
-> before/afterを使用してholdという単語を表示させなさい。

scroll
-> カードを並べてスクロールさせなさい。
