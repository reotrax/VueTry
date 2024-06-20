<template lang="pug">
.bl-testLevel3
  h2 優
  .bl-versatile-area
    input()
  .bl-cardList(@scroll="onScrollList")
    template(v-for="(item, index) of cardList")
      //- v-forとv-ifが分かれている
      //- keyが設定されている
      font-card(
        v-if="true"
        :key="`card-${index}`"
        :item="item"
        :class="item.isSelected ? 'is-selected' : ''"
        @mouseenter="onMouseEnter(item)"
        @mouseleave="onMouseLeave(item)"
        @click="onClickCard(item)"
      )

</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import FontCard, { CardItem } from "@/components/common/FrontCard.vue";

export default defineComponent({
  name: "TestLevel3",

  components: {
    FontCard,
  },

  props: {
    cardList: {
      type: Array as PropType<CardItem[]>,
      required: true,
    },
  },

  setup() {
    function onScrollList(event: Event) {
      const el = event.target;
      const rect = (el as HTMLElement)?.getBoundingClientRect();
      console.log(rect);
    }

    function onMouseEnter(item: CardItem) {
      item.isShowPopover = true;
    }

    function onMouseLeave(item: CardItem) {
      item.isShowPopover = false;
    }

    /**
     * ボタンのクリックイベント
     */
    function onClickButton() {
      //
    }

    /**
     * カードのクリックイベント
     * @param item カード情報
     */
    function onClickCard(item: CardItem): void {
      item.isSelected = !item.isSelected;
    }

    return {
      onScrollList,
      onClickCard,
      onClickButton,
      onMouseEnter,
      onMouseLeave,
    };
  },
});
</script>

<style lang="scss" scoped></style>
