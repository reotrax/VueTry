<template lang="pug">
.bl-testLevel2
  h2 良
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
      onScrollList,
      onClickCard,
    };
  },
});
</script>

<style lang="scss" scoped></style>
