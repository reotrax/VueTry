<template lang="pug">
.un-helloWorld
  .un-helloWorld-main
    //- LEVEL:可
    //- JavaScript（Vue.jsより難しいのでは）
    .test-javascript
      h2 JavaScript
      #card-list.bl-cardList
        .bl-cardItem(v-for="item of 4")
          //- 設計にheaderの概念があるか
          .bl-cardItem-header
            .bl-cardItem-header-label
              | テキストテキストテキスト
            //- form要素を適切に使えるか
            button.bl-cardItem-header-btn
              | btn
          .bl-cardItem-body

    //- LEVEL:良
    //- Vue.js
    .test-vue
      h2 Vue.js
      .bl-versatile-area
        input()
      .bl-cardList(@scroll="onScrollList")
        .bl-cardItem(
          v-for="(item, index) of cardList"
          :key="index"
          :class="item.isSelected ? 'is-selected' : ''"
          @click="onClickCard(item)"
        )
          .bl-cardItem-header
            //- mouseイベントが使えるか
            .bl-cardItem-header-label(
              @mouseenter="onMouseEnter(item)"
              @mouseleave="onMouseLeave(item)"
            )
              | {{ item.title }}
            .bl-popover(v-if="item.isShowPopover")
              | {{ item.title }}
            //- 修飾子を使って伝播を止められるか
            //- form要素を適切に使えるか
            button.bl-cardItem-header-btn(
              @click.stop="onClickButton(item)"
            )
              | hold
          .bl-cardItem-body
            | {{ item.text }}

    //- LEVEL:優
    .test-level-3
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

interface CardInfo {
  title: string;
  text: string;
  isSelected: boolean;
  isShowPopover: boolean;
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    // Lv.3 - アンスコで命名できていなければコメント
    // Lv.2 - 型を定義できるか
    // Lv.1 - 静的化動的かを認識し、定数/変数を使い分けられる、配列を理解できる
    /** カード情報 */
    const CARD_INFO: CardInfo[] = [
      // この情報は用意してあげる？
      {
        title: "テキスト",
        text: "説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文",
        isSelected: false,
        isShowPopover: false,
      },
      {
        title: "長いテキスト長いテキスト長いテキスト",
        text: "説明文説明文説明文説明文説明文説明文説明文説明文説明文",
        isSelected: false,
        isShowPopover: false,
      },
      {
        title: "長いテキスト長いテキスト長いテキスト",
        text: "説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文説明文",
        isSelected: false,
        isShowPopover: false,
      },
      {
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

    /** カード一覧 */
    const cardList = ref<CardInfo[]>(CARD_INFO);

    // JSDocが書けているか
    /**
     * ボタンのクリックイベント
     */
    function onClickButton(): void {
      //
    }

    // 型定義が適切か
    /**
     * カードのクリックイベント
     * @param item カード情報
     */
    function onClickCard(item: CardInfo): void {
      item.isSelected = !item.isSelected;
    }

    function onScrollList(event: Event) {
      const el = event.target;
      const rect = (el as HTMLElement)?.getBoundingClientRect();
      console.log(rect);
    }

    function onMouseEnter(item: CardInfo) {
      item.isShowPopover = true;
    }

    function onMouseLeave(item: CardInfo) {
      item.isShowPopover = false;
    }

    return {
      cardList,
      onClickButton,
      onClickCard,
      onScrollList,
      onMouseEnter,
      onMouseLeave,
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

.un-helloWorld {
  * {
    box-sizing: border-box;
  }
}

//- 複数の単語で命名されているか
.un-helloWorld-main {
  overflow: hidden scroll;
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

.bl-cardItem {
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
    .bl-cardItem-header,
    .bl-cardItem-body {
      background-color: #ffcdcd;
    }
  }
}

.bl-cardItem-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-bottom: 1px solid #00000033;
  border-radius: 8px 8px 0 0;
}

.bl-cardItem-body {
  text-align: left;
  padding: 10px;
  flex: 1;
  border-radius: 0 0 8px 8px;
}

//- 文字数が多くてもずれないか
.bl-cardItem-header-label {
  position: relative;
  font-size: $font-size;
  max-width: 90px;
  text-wrap: nowrap;
  overflow: hidden;
}

.bl-popover {
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
.bl-cardItem-header-btn {
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
