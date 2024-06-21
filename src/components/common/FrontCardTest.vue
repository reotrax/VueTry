<template lang="pug">
.bl-frontCard(
  :class="selectedClass"
  @click="$emit('click')"
)
  .bl-frontCard-header
    //- カード名をマウスオーバーしたイベントを取得して、ツールチップの表示/非表示を実現させなさい。
    .bl-frontCard-header-label
      //- カード名を表示させなさい。
    .bl-tooltip
      //- ツールチップにはカード名を表示させること（改行禁止）
    //- 修飾子を使って伝播を止められるか
    //- ボタンをクリックしたらカードの選択状態を変更できないようにしなさい。再度クリックでこの機能を解除できること。
    .bl-frontCard-header-btn
      | hold
  .bl-frontCard-body
    .bl-frontCard-body-inner
      | {{ item.text }}

</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "@vue/composition-api";

export interface CardItem {
  id: string;
  title: string;
  text: string;
  isSelected: boolean;
  isShowPopover: boolean;
}

export default defineComponent({
  name: "FrontCard",

  props: {
    item: {
      type: Object as PropType<CardItem>,
      required: true,
    },
  },

  setup(props, { emit }) {
    /** 選択クラス */
    const selectedClass = computed(() =>
      props.item.isSelected ? "is-selected" : ""
    );

    function onClickButton(event: Event) {
      emit("click-btn", { item: props.item, event });
    }

    return {
      selectedClass,
      onClickButton,
    };
  },
});
</script>

<style lang="scss" scoped></style>
