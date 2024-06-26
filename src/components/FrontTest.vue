<template lang="pug">
.un-helloWorld
  .un-helloWorld-main
    .un-helloWorld-btns
      button(@click="selectedTestLevel = 3") 優
      button(@click="selectedTestLevel = 31") 優:レビュー1
      button(@click="selectedTestLevel = 32") 優:レビュー2
      button(@click="selectedTestLevel = 33") 優:レビュー3
      button(@click="selectedTestLevel = 2") 良
      button(@click="selectedTestLevel = 1") 可
      button(@click="selectedTestLevel = 11") 可:回答

    p
      | {{ selectedTestComponent }}

    component(
      :is="selectedTestComponent"
      :cardList="cardList"
      propName="review"
    )
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import FontCard, { CardItem } from "@/components/common/FrontCard.vue";
import TestLevel3 from "@/components/common/TestLevel3.vue";
import TestLevel3Review1 from "@/components/common/TestLevel3Review1.vue";
import TestLevel3Review2 from "@/components/common/TestLevel3Review2.vue";
import TestLevel3Review3 from "@/components/common/TestLevel3Review3.vue";
// import TestLevel2 from "@/components/common/TestLevel2.vue";
import TestLevel2 from "@/components/common/FrontListLevel2.vue";
import TestLevel1 from "@/components/common/FrontLevel1GapFill.vue";
import TestLevel1Answer from "@/components/common/FrontLevel1GapFillAnswer.vue";

export default defineComponent({
  name: "HelloWorld",

  components: {
    FontCard,
    TestLevel3,
    TestLevel3Review1,
    TestLevel3Review2,
    TestLevel3Review3,
    TestLevel2,
    TestLevel1,
    TestLevel1Answer,
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
      11: "TestLevel1Answer",
      2: "TestLevel2",
      3: "TestLevel3",
      31: "TestLevel3Review1",
      32: "TestLevel3Review2",
      33: "TestLevel3Review3",
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

.un-helloWorld-btns {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>

<style lang="scss"></style>
