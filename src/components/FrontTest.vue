<template lang="pug">
.un-helloWorld
  .un-helloWorld-main
    button(@click="selectedTestLevel = 3") 優
    button(@click="selectedTestLevel = 2") 良
    button(@click="selectedTestLevel = 1") 可

    component(
      :is="selectedTestComponent"
      :cardList="cardList"
    )
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import FontCard, { CardItem } from "@/components/common/FrontCard.vue";
import TestLevel3 from "@/components/common/TestLevel3.vue";
// import TestLevel2 from "@/components/common/TestLevel2.vue";
import TestLevel2 from "@/components/common/FrontListLevel2.vue";
import TestLevel1 from "@/components/common/TestLevel1.vue";

export default defineComponent({
  name: "HelloWorld",

  components: {
    FontCard,
    TestLevel3,
    TestLevel2,
    TestLevel1,
  },

  props: {
    msg: String,
  },
  setup() {
    // Lv.3 - アンスコで命名できていなければコメント
    // Lv.2 - 型を定義できるか
    // Lv.1 - 静的化動的かを認識し、定数/変数を使い分けられる、配列を理解できる
    /** カード情報 */
    const CARD_INFO: CardItem[] = [
      // この情報は用意してあげる？
      {
        id: "0",
        title: "テキスト",
        text: "説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文",
        isSelected: false,
        isShowPopover: false,
      },
      {
        id: "1",
        title: "長いテキスト長いテキスト長いテキスト",
        text: "説明文説明文説明文説明文説明文説明文説明文説明文説明文",
        isSelected: false,
        isShowPopover: false,
      },
      {
        id: "2",
        title: "長いテキスト長いテキスト長いテキスト",
        text: "説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文",
        isSelected: false,
        isShowPopover: false,
      },
      {
        id: "3",
        title: "長いテキスト長いテキスト長いテキスト",
        text: "説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文",
        isSelected: false,
        isShowPopover: false,
      },
    ];

    function useType() {
      const obj = {
        a: 0,
        b: "1",
        c: "2",
      };
      // 文字を数値に変換して計算できる
    }

    function useObject() {
      const obj: any = {};

      console.log(obj);
    }

    // for/forEachを使えること
    function useFor() {
      const data: number[] = [];
      for (let i = 0; i < CARD_INFO.length; i++) {
        data.push(i);
      }
      console.log(data);
    }

    useFor();

    function useForEach() {
      const data: string[] = [];
      CARD_INFO.forEach((info) => {
        data.push(info.title);
      });
      console.log(data);
    }

    useForEach();

    // javascript
    function vanilaJavaScript() {
      const cardListElement = document.querySelector("#card-list");
      const cardElement = document.createElement("div");
    }

    /** コンポーネント名 */
    const TEST_NAME: { [key: number]: string } = {
      1: "TestLevel1",
      2: "TestLevel2",
      3: "TestLevel3",
    };

    /** 選択コンポーネント番号 */
    const selectedTestLevel = ref(3);

    const selectedTestComponent = computed(
      () => TEST_NAME[selectedTestLevel.value]
    );

    /** カード一覧 */
    const cardList = ref<CardItem[]>(CARD_INFO);

    return {
      selectedTestLevel,
      selectedTestComponent,
      cardList,
    };
  },
});
</script>

<style scoped lang="scss">
// SASS変数を適切に使用しているか
$card-width: 200px;
$card-height: 160px;
$card-margin: 20px;
$font-size: 14px;

//- 複数の単語で命名されているか
.un-helloWorld-main {
  overflow: hidden scroll;
}
</style>

<style lang="scss">
// SASS変数を適切に使用しているか
$card-width: 200px;
$card-height: 160px;
$card-margin: 20px;
$font-size: 14px;

* {
  box-sizing: border-box;
}

//- ルール通りの命名規則になっているか（ケバブケース）
.bl-cardList {
  // flexが使えるか
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  // デザイン通りか
  border: 2px solid #aaa;
  // 余白は適切か
  gap: $card-margin;
  padding: $card-margin 4px $card-margin $card-margin;
  // calcが使えるか
  width: calc(
    (#{$card-width} * 3) + (#{$card-margin} * 2) + (#{$card-margin} * 2) + 4px
  );
  // 内容物に応じた可変サイズが設定できるか
  max-height: 240px;
  // スクロールさせられるか
  overflow: hidden scroll;
}

// importantを使いこなせるか
.help {
  padding: 0 !important;
}

.bl-frontCard {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: $card-width;
  height: $card-height;
  border-radius: 10px;
  border: 2px solid gray;
  background: white;
  &.is-selected {
    border-color: red;
    .bl-frontCard-header,
    .bl-frontCard-body {
      background-color: #ffcdcd;
    }
  }
}

.bl-frontCard-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-bottom: 1px solid #00000033;
  border-radius: 8px 8px 0 0;
}

.bl-frontCard-body {
  padding: 10px;
  flex: 1;
  border-radius: 0 0 8px 8px;
}

.bl-frontCard-body-inner {
  text-align: left;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

//- 文字数が多くてもずれないか
.bl-frontCard-header-label {
  position: relative;
  font-size: $font-size;
  max-width: 90px;
  text-wrap: nowrap;
  overflow: hidden;
}

.bl-tooltip {
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translate(-50%, -100%);
  background-color: white;
  pointer-events: none;
  border-radius: 10px;
  border: 2px solid;
  width: fit-content;
  text-wrap: nowrap;
}

// button要素を使わないで定義したか
// positionが使えるか
.bl-frontCard-header-btn {
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 6px;
  border-radius: 12px;
  border: 2px solid #00000033;
  // buttonタグのスタイルを打ち消せるか
  padding: 0;
  text-align: center;
  width: 42px;
  height: 24px;
  // 影を使えるか（見た目はなんとなくでOK）
  // box-shadow: 0 0 6px -1px #00000055;
  background: lightblue;
}

// importantを使いこなせるか
.help {
  padding: 0 !important;
}
</style>
