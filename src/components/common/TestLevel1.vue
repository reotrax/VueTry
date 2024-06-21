<template lang="pug">
.bl-testLevel1
  h2 可

  input#title-input(type="text")
  button#card-add カード追加
  button#card-delete カード削除

  //- ・作成後のイメージは画像で提供
  //- ・仕様書も簡易的に提供

  //- ここにカードを並べてスクロールを発生させなさい。
  #card-list.bl-cardList
    //- IDの重複禁止
    .bl-frontCard
      .bl-frontCard-header
        //- 何文字であろうとも中央に配置されるようにしなさい。
        //- （カードごとに文字数を変更し、飛び出さない様にすること）
        .bl-frontCard-header-label
          .bl-frontCard-header-label-text
            | タイトル
          .bl-tooltip
            | タイトル
        //- ボタンを実装しなさい
        button.bl-frontCard-header-btn
      //- 左寄せで3行にしなさい。
      .bl-frontCard-body
        .bl-frontCard-body-inner
          | 説明文
          br
          | 説明文
          br
          | 説明文

    .bl-frontCard
      .bl-frontCard-header
        .bl-frontCard-header-label
          .bl-frontCard-header-label-text
            | タイトルタイトル
          .bl-tooltip
            | タイトルタイトル
        button.bl-frontCard-header-btn
      //- 1つの文章を左寄せで3行になるようにしなさい。（改行コード禁止）
      .bl-frontCard-body
        .bl-frontCard-body-inner
          | 説明文説明文説明文説明文説明文説明文説明文説明文説明文

    .bl-frontCard
      .bl-frontCard-header
        .bl-frontCard-header-label
          .bl-frontCard-header-label-text
            | タイトルタイトルタイトル
          .bl-tooltip
            | タイトルタイトルタイトル
        button.bl-frontCard-header-btn
      //- 左寄せで改行されるようにし、要素の越えて表示される文字量にし、ただし飛び出さない様にしなさい。
      .bl-frontCard-body
        .bl-frontCard-body-inner
          | 説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文

    .bl-frontCard
      .bl-frontCard-header
        .bl-frontCard-header-label
          .bl-frontCard-header-label-text
            | タイトル
          .bl-tooltip
            | タイトル
        button.bl-frontCard-header-btn
      .bl-frontCard-body
        .bl-frontCard-body-inner
          | 説明文説明文説明文説明文説明文説明文説明文説明文説明文

</template>
<script>
import { defineComponent, onMounted } from "@vue/composition-api";

export default defineComponent({
  name: "TestLevel1",

  props: {
    cardList: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const value1 = 0;
    const value2 = 1;
    const value3 = "1";
    const value4 = "2";

    onMounted(() => {
      // ここに回答を記載

      /**
       * 型
       */
      // 定数value1-value4を全て1回づつ使用して整数103を作成し、ブラウザの開発者ツールのコンソールに表示しなさい。
      const ans = String(value2) + value1 + (Number(value3) + Number(value4));
      console.log("ans", Number(ans));

      // 空の配列を持った定数aryを作り、その配列にvalue1-value4を全て含め、for文で加算してコンソールに表示しなさい。
      let sum = 0;
      const ary = [];
      ary.push(value1);
      ary.push(value2);
      ary.push(value3);
      ary.push(value4);
      for (let i = 0; i < ary.length; i++) {
        sum = sum + Number(ary[i]);
      }
      console.log("sum", sum);

      // 空の変数objを作成し、任意のプロパティと値を持ったObjectを作成しなさい。
      let obj;
      obj = { id: 0 };
      // 上記で作成した変数objに作成したプロパティの値を変更しなさい。
      obj.id = 1;
      // 変数objにプロパティ「1」と任意の値を追加し、コンソールに表示しなさい。
      obj[1] = "one";
      console.log("obj", obj);
      // 変数objをfor文でループ処理を行って取得できるプロパティ名と、それぞれの型名もコンソールの1行に表示しなさい。
      for (const key in obj) {
        console.log(key, typeof key);
      }

      // true/falseそれぞれと数値をif分で比較してtrueを返してコンソールに表示しなさい。
      const booleanTrue = true;
      const booleanFalse = false;
      console.log("true", true == 1);
      console.log("false", false == 0);
      if (booleanTrue == 1) {
        console.log("if", booleanTrue == 1);
      }
      if (booleanFalse == 0) {
        console.log("else", booleanFalse == 0);
      }

      // nullとundefinedを比較してtrueの場合とfalseの場合をそれぞれコンソールに表示しなさい。
      console.log(null == undefined);
      console.log(null === undefined);

      // input： 画面表示時にinputに値を表示させなさい。
      const input = document.getElementById("title-input");
      input.value = "初期化";

      // イベントの追加： カードをクリックしたらカードの並び順の番号がinputに表示させるように実装しなさい。（0始まりとする）
      const cardList = document.querySelectorAll(".bl-frontCard");
      cardList.forEach((card, i) => {
        card.addEventListener("click", () => {
          input.value = i;
        });
      });

      //
    });
  },
});
</script>

<style lang="scss" scoped>
// SCSSの記述箇所

// importantの禁止
// クラス以外の使用禁止

.bl-frontCard-header-label {
  overflow: visible;
  &:hover {
    .bl-tooltip {
      display: block;
    }
  }
}

.bl-frontCard-header-label-text {
  overflow: hidden;
}

.bl-tooltip {
  display: none;
}

// 疑似要素: before/afterを使用してholdという単語を表示させなさい
.bl-frontCard-header-btn {
  &::before {
    content: "hold";
  }
}

.bl-frontCard-body {
  overflow: hidden;
}
</style>
