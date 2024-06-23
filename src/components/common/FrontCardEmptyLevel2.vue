<template lang="pug">
.bl-frontCard
  .bl-frontCard-header
    .bl-frontCard-header-label
    .bl-tooltip
    button.bl-frontCard-header-btn
  .bl-frontCard-body
    .bl-frontCard-body-inner

</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "FrontCard",

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  setup() {
    //
  },
});
</script>

<style lang="scss" scoped></style>
