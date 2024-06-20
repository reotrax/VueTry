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
    onMounted(() => {
      // ここに回答を記載

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
