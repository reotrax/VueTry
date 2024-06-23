<template lang="pug">
.frontLevel2(
  @click="onClickRoot"
)
  .frontInfo
    .frontInfo-name
      | {{ selectedItem.name }}
    //- 入力したら対象項目のdescriptionが同じ値になるように実装しなさい。
    input(v-model="selectedItem.description" @click.stop="")
    button(@click.stop="onClickBtnAdd") 追加
    select(v-model="selectedAuthority")
      option() admin
      option() guest

  .frontInfo
    .frontInfo-length
      | {{ listLength }} 個

  .frontList(v-show="listLength")
    template(v-for="item, i in authorityList")
      front-list-item(
        :item="item"
        :key="item.id"
        @click="onClickItem(item)"
        @click-btn-add="onClickButton(i)"
        @click-btn-delete="onClickButtonDelete(i)"
      )
  .frontList(v-show="!listLength")
    | 項目がありません。

</template>
<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import FrontListItem from "@/components/common/FrontListItem.vue";

export interface ListItem {
  id: string | "separator";
  name: string;
  description: string;
  authority: "admin" | "guest";
  isSelected: boolean;
}

export default defineComponent({
  name: "FrontListLevel2",

  components: {
    "front-list-item": FrontListItem,
  },

  setup() {
    const DEFAULT_ITEM: ListItem = {
      id: "",
      name: "",
      description: "",
      isSelected: false,
      authority: "admin",
    };

    let itemCountId = 0;

    // v-for
    // リスト作成しなさい。
    // 項目はコンポーネントにする事。
    // ただしslotは禁止とする。
    const list = ref<ListItem[]>([]);

    // これは事前に作成しておく。
    function generateObjectsArray(): ListItem[] {
      const authorities: ListItem["authority"][] = ["admin", "guest"]; // 権限の例
      const letters = ["a", "b", "c", "d", "e"]; // 使用する頭文字
      const nameVariants = [""]; // 各頭文字に対するnameのバリエーション
      const objectsArray: ListItem[] = [];

      letters.forEach((letter, i) => {
        // 各アルファベットの区切りオブジェクトを追加
        // objectsArray.push({ id: "separator", name: letter });

        // 各アルファベットに対応するオブジェクトを生成
        nameVariants.forEach((variant) => {
          objectsArray.push({
            id: String(i),
            name: `${letter.toUpperCase()}${variant}`,
            description: "description",
            isSelected: false,
            authority:
              authorities[Math.floor(Math.random() * authorities.length)],
          });
        });
      });

      return objectsArray;
    }
    list.value = generateObjectsArray();
    itemCountId = list.value.length;

    const selectedItem = ref<ListItem>(DEFAULT_ITEM);

    const authorityList = computed(() =>
      list.value.filter((item) =>
        ["guest", selectedAuthority.value].includes(item.authority)
      )
    );

    // computedなら● / watchは▲ - 項目の数を表示する機能を実装しなさい。
    const listLength = computed(() => list.value.length);

    const selectedAuthority = ref("admin");

    // v-show
    // エンプティステートを実装し、非表示でも要素はDOMツリーに残るようにしなさい。

    // v-if or filter（どちらを使用するかは発想の問題で、実装できる人はどっちも理解できるはず）
    // ボタン毎の権限を指定して項目の表示をコントロールできること。
    // 非表示になったら要素がDOMツリーから消えていること。
    function authorityFilter() {
      list.value.filter((itm) => itm.authority);
    }

    // map
    // 権限によって文言を変更しなさい。

    // 3段階の権限毎にリストの機能を実装しなさい。

    // find
    // 指定した情報にいっちする項目の情報をfindで取得して表示させなさい。

    // 配列とObjectの扱いかた
    // 項目の種別で区切り行を作りなさい。
    // v-forの使用はひとつにすること。

    // findIndex

    // ボタンをクリックしたら、入力欄の値を使用してリストの最後に項目を追加する機能を実装しなさい。
    function onClickBtnAdd() {
      list.value.push({
        ...DEFAULT_ITEM,
        id: String(itemCountId),
        description: selectedItem.value.description,
      });
      itemCountId++;
    }

    function onSelectAuthority(item: any) {
      console.log(item);
    }

    // splice
    // 選択した項目の下に新しい項目を追加する機能を実装しなさい。
    function onClickButton(index: number) {
      const item = { ...DEFAULT_ITEM, id: String(itemCountId) };
      list.value.splice(index + 1, 0, item);
      itemCountId++;
    }

    function onClickButtonDelete(index: number) {
      list.value.splice(index, 1);
    }

    // 入力した情報で選択した項目を入れ替える機能を実装しなさい。

    // イベント伝播を止められるか
    /**
     * root要素のクリック
     */
    function onClickRoot() {
      list.value.forEach((item) => (item.isSelected = false));
      selectedItem.value = DEFAULT_ITEM;
    }

    // 選択項目は常に1つでなければならない。
    /**
     * 項目のクリック
     * @param item item
     */
    function onClickItem(item: ListItem) {
      list.value.forEach((itm) => {
        itm.isSelected = false;
      });
      const selectItem = list.value.find((itm) => itm.id === item.id);
      if (!selectItem) return;
      selectItem.isSelected = true;
      selectedItem.value = selectItem;
    }

    return {
      list,
      authorityList,
      selectedItem,
      listLength,
      selectedAuthority,

      onClickRoot,
      onClickBtnAdd,
      onClickItem,
      onClickButton,
      onClickButtonDelete,
    };
  },
});
</script>

<style lang="scss" scoped>
.frontList {
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 10px;
  padding: 20px;
  border: 1px solid;
  margin: 0 auto;
  width: 500px;
  height: 300px;
  overflow: hidden scroll;
}

.frontInfo-name {
  height: 20px;
}
</style>
