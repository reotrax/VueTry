<template lang="pug">
.bl-frontCard(
  :class="selectedClass"
  @click="$emit('click')"
)
  .bl-frontCard-header
    //- mouseイベントが使えるか
    .bl-frontCard-header-label(
      @mouseenter="$emit('mouseenter')"
      @mouseleave="$emit('mouseleave')"
    )
      | {{ item.title }}
    .bl-tooltip(v-if="item.isShowPopover")
      | {{ item.title }}
    //- 修飾子を使って伝播を止められるか
    //- form要素を適切に使えるか
    button.bl-frontCard-header-btn(
      @click.stop="onClickButton"
    )
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
