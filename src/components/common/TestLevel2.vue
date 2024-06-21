<template lang="pug">
.bl-testLevel2
  h2 良
  .bl-versatile-area
    input()
  .bl-cardList(@scroll="onScrollList")
    //- 配列cardListを使用してFontCardにを並べなさい。
    template(v-for="(item, index) of cardList")
      font-card(
        v-if="true"
        :key="`card-${index}`"
        :item="item"
        :class="selectedClass(item)"
        @click="onClickCard(item)"
      )

</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import FontCard, { CardItem } from "@/components/common/FrontCard.vue";

export default defineComponent({
  name: "TestLevel2",

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
    /**
     *
     * @param item カード情報
     * @returns string 選択クラス
     */
    function selectedClass(item: CardItem) {
      return item.isSelected ? "is-selected" : "";
    }

    function onScrollList(event: Event) {
      const el = event.target;
      const rect = (el as HTMLElement)?.getBoundingClientRect();
      console.log(rect);
    }

    /**
     * カードのクリックイベント
     * @param item カード情報
     */
    function onClickCard(item: CardItem): void {
      item.isSelected = !item.isSelected;
    }

    return {
      selectedClass,
      onScrollList,
      onClickCard,
    };
  },
});
</script>

<style lang="scss" scoped></style>
