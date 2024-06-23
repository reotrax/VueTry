<template lang="pug">
.frontItem(
  :class="selectedClass"
  @click.stop="$emit('click')"
)
  .frontItem-inner
    .frontItem-title
      | {{  item.id }}
    .frontItem-description
      | {{  item.description }}

    .frontButtons
      button.frontItem-btn(
        v-if="item.id !== 'separator'"
        @click.stop="$emit('click-btn-add')"
      )
        | 追加
      button.frontItem-btn(
        v-if="item.id !== 'separator'"
        @click.stop="$emit('click-btn-delete')"
      )
        | 削除

</template>
<script lang="ts">
import { defineComponent, computed, PropType } from "@vue/composition-api";
import { ListItem } from "@/components/common/FrontListLevel2.vue";

export default defineComponent({
  name: "FrontListItem",

  props: {
    item: {
      type: Object as PropType<ListItem>,
      required: true,
    },
  },

  setup(props) {
    /** 選択クラス */
    const selectedClass = computed(() => {
      return props.item.isSelected ? "is-selected" : "";
    });

    return {
      selectedClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.frontItem {
  border: 1px solid;
  // border-radius: 10px;
  width: 100%;
  // min-height: 30px;
  // max-height: 30px;
  padding: 10px;
  cursor: pointer;

  &.is-selected {
    background: #e2b8b8;
  }
}

.frontItem-inner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
