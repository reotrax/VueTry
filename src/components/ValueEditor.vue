<template lang="pug">
div
  input(v-model="minValue", :disabled="!isEditing")
  input(v-model="maxValue", :disabled="!isEditing")
  select(v-model="digit", :disabled="!isEditing")
    option(value="0") なし
    option(value="3") 千円
    option(value="4") 万円
    option(value="8") 億円
  div
    button(@click="toggleEdit") {{ isEditing ? 'キャンセル' : '編集' }}
    button(@click="applyEdit", v-if="isEditing") 適用

</template>

<script lang="ts">
import { defineComponent, ref, watch } from "@vue/composition-api";

export default defineComponent({
  name: "ValueEditor",

  setup() {
    // ベースとなる値
    const ORIGINAL_MIN = 0;
    const ORIGINAL_MAX = 1000;
    // 編集後の値
    let modifiedMinValue = ORIGINAL_MIN;
    let modifiedMaxValue = ORIGINAL_MAX;
    let originalDigit = 0;
    // 編集中の値
    const minValue = ref(0);
    const maxValue = ref(1000);
    const isEditing = ref(false);
    const digit = ref(0); // デフォルト値を 0 に設定

    watch(digit, (newValue) => {
      minValue.value = adjustValue(modifiedMinValue, newValue, originalDigit);
      maxValue.value = adjustValue(modifiedMaxValue, newValue, originalDigit);
    });

    function toggleEdit() {
      isEditing.value = !isEditing.value;
      if (!isEditing.value) {
        minValue.value = modifiedMinValue;
        maxValue.value = modifiedMaxValue;
        digit.value = originalDigit;
      }
    }

    function applyEdit() {
      modifiedMinValue = minValue.value;
      modifiedMaxValue = maxValue.value;
      originalDigit = Number(digit.value);
      isEditing.value = false;
    }

    function adjustValue(
      value: number,
      digit: number | string,
      originalDigit: number
    ): number {
      if (value === 0) return value; // 桁数が 0 の場合、値をそのまま返す
      const digitNumber = typeof digit === "string" ? Number(digit) : digit;
      console.log(value, digitNumber, originalDigit, Math.pow(10, digitNumber));
      return value / Math.pow(10, digitNumber);
    }

    return {
      minValue,
      maxValue,
      isEditing,
      digit,
      toggleEdit,
      applyEdit,
    };
  },
});
</script>
