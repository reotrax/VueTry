<template lang="pug">
.high-charts
  .high-charts-header
    .btn-wrap
      button(@click="chartType = chartType === 'column' ? 'stack' : 'column'")
        | {{ chartType }}
    .btn-wrap
      button(@click="onClickBtnReload")
        | reload
    .input-wrap
      input(v-model.number="tickPixelInterval" placeholder="tickPixelInterval")
    .input-wrap
      input(v-model.number="max" placeholder="max")
    .input-wrap
      input(v-model.number="min" placeholder="min")
    .input-wrap
      input(v-model.number="tickInterval" placeholder="tickInterval")
    .input-wrap
      input(v-model.number="tickAmount" placeholder="tickAmount")
  .high-charts-main
    Chart(
      v-if="options"
      ref="chartRef"
      :options="options"
    )
  //- .high-charts-main
    Chart(
      v-if="options"
      ref="chartRef"
      :options="options"
    )
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  nextTick,
  watch,
} from "@vue/composition-api";
// import * as Highcharts from "highcharts";
// import Highcharts from "highcharts";
import { Chart } from "highcharts-vue";

type XAxisBackBoardData = {
  id: string;
  class: string;
  fill: string;
  d: string | undefined;
  "data-z-index": string | null;
  stroke?: string | undefined;
  "stroke-width": string | null;
  style: string;
};

export default defineComponent({
  name: "HighCharts",

  components: {
    Chart,
  },

  setup() {
    const X_AXIS_CAT_BACKBOARD = "x-axis-cat-backboard-";

    let seriesPoints: [];

    const chartRef = ref<InstanceType<typeof Chart>>();

    const chartMain = computed(() => chartRef.value?.chart);

    const chartType = ref<"column" | "stack">("stack");

    const series = ref([
      {
        id: "tokyo",
        name: "Tokyo",
        data: [
          49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
      },
      {
        name: "New York",
        data: [
          83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6,
          92.3,
        ],
      },
      {
        name: "London",
        data: [
          48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
          51.2,
        ],
      },
      {
        name: "Berlin",
        data: [
          42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
          51.1,
        ],
      },
    ]);

    // eslint-disable-next-line vue/return-in-computed-property
    const seriesLinkedTo = computed<
      { [key: string]: string | number | boolean | number[] | undefined }[]
    >(() => {
      return [
        {
          name: "Tokyo-Secondary",
          grouping: false,
          linkedTo: "tokyo",
          color: "transparent",
          pointPadding: 0,
          groupPadding: 0,
          data: series.value[0].data.map(() => 100),
        },
      ];
    });

    /** X軸のカテゴリ選択ずみのindex一覧 */
    const xAxisBackBoardData = ref<XAxisBackBoardData[]>([]);

    const tickPixelInterval = ref(1);
    const tickPositions = ref();
    const tickInterval = ref();
    const tickAmount = ref();
    const min = ref();
    const max = ref();

    const isNullOptions = ref(false);

    /** options */
    const options = computed(() => {
      // インスタンス再作成用
      if (isNullOptions.value) return;

      return {
        chart: {
          animation: false,
          type: "column",
          scrollablePlotArea: {
            minWidth: 3000, // 横スクロールを有効にするために大きな横幅を設定
            scrollPositionX: 1,
          },
          events: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            load(e: any) {
              // console.log("load");
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onLoadEvents(e, this as any);

              //
              // const chart = this;
              // 横スクロール可能にする
              // const container = containerRef.value;
              // container.style.overflowX = 'auto';
              // container.style.whiteSpace = 'nowrap';
              // スクロールイベントを監視
              // container.addEventListener('scroll', () => {
              //   updateLabels(chart);
              // });
              // 初期ラベルの更新
              // updateLabels(chart);
            },
            // render(e: any) {
            //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
            //   onLoadEvents(e, this as any);
            // },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            click(e: any) {
              // console.log("click");
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClickEvents(e, this as any);
            },
          },
        },
        title: {
          text: "Monthly Average Rainfall",
        },
        subtitle: {
          text: "Source: WorldClimate.com",
        },
        xAxis: {
          // categories: [
          //   "Jan",
          //   "Feb",
          //   "Mar",
          //   "Apr",
          //   "May",
          //   "Jun",
          //   "Jul",
          //   "Aug",
          //   "Sep",
          //   "Oct",
          //   "Nov",
          //   "Dec",
          // ],
          crosshair: true,
          // type: "linear",
          // min: 0,
          // max: 5, // 初期表示範囲を設定（必要に応じて調整）
          scrollbar: {
            enabled: true,
          },
        },
        yAxis: {
          tickPixelInterval:
            tickPixelInterval.value && !isNaN(tickPixelInterval.value)
              ? Number(tickPixelInterval.value)
              : null,
          tickPositions: tickPositions.value,
          tickInterval:
            tickInterval.value !== "" && !isNaN(tickInterval.value)
              ? Number(tickInterval.value)
              : null,
          tickAmount: tickAmount.value,
          min: min.value !== "" && !isNaN(min.value) ? Number(min.value) : null,
          max: max.value !== "" && !isNaN(max.value) ? Number(max.value) : null,
          title: {
            text: "Rainfall (mm)",
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
              // color: ( // theme
              //   Highcharts.defaultOptions.title.style &&
              //   Highcharts.defaultOptions.title.style.color
              //   "gray",
            },
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            dataLabels: {
              enabled: true,
            },
            borderWidth: 0,
            groupPadding: 0.2, // グループ間の余白を調整
            pointPadding: 0.2, // 棒同士の余白を設定
            pointWidth: 20, // 棒の幅を指定
            stacking: chartType.value === "column" ? "" : "normal",
          },
          animation: false,
          series: {
            animation: false,
          },
        },
        series: generateHeavyData(chartType.value, 20, 100),
        // series: seriesLinkedTo.value.concat(series.value),
      };
    });

    // MEMO: インスタンス再作成時に必要な処理
    watch(options, (_, oldOptions) => {
      if (oldOptions) return;
      renderDataBackBoards();
    });

    watch(xAxisBackBoardData, (newData, oldData) => {
      if (newData.length === oldData.length) return;
      if (!chartRef.value) return;
      const chart = chartRef.value;
      // 削除
      xAxisBackBoardData.value.forEach((datum) => {
        document.querySelector(`#${datum.id}`)?.remove();
        chart.chart.renderer.path().attr(datum).add();
      });
    });

    function onLoadEvents(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e: any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      chart: any
    ) {
      const series = chart.series[0];
      // 各棒の幅を取得
      seriesPoints = series.points;
    }

    /** optionsのclickイベント */
    function onClickEvents(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      e: any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      chart: any
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const c = chart;
      const crosshair = document.querySelector(".highcharts-crosshair");
      if (!crosshair) return;

      // X軸の値を取得
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const xAxis: any = c.xAxis[0];
      // クリックされた位置のX軸の値（数値）を取得
      const xValue: number = xAxis.toValue(e.chartX);
      // カテゴリインデックスの計算（近い整数に丸める）
      const categoryIndex: number = Math.round(xValue);
      // 追加要素のID
      const id = getId(categoryIndex);

      const datumIndex = xAxisBackBoardData.value.findIndex(
        (datum) => datum.id === id
      );

      // 削除
      if (datumIndex !== -1) {
        xAxisBackBoardData.value.splice(datumIndex, 1);
        document.querySelector(`#${id}`)?.remove();
        return;
      }

      console.log(seriesPoints);
      // 追加
      const attrObj = {
        id,
        class: "test",
        fill: "rgba(200, 0, 0, 0.3)",
        d: crosshair.getAttribute("d") || "",
        "data-z-index": crosshair.getAttribute("data-z-index") || "",
        stroke: "rgba(200, 0, 0, 0.3)", //crosshair.getAttribute("stroke"),
        "stroke-width": seriesPoints[categoryIndex]["graphic"]["width"] || "", // crosshair.getAttribute("stroke-width") || "",
        style: "", //crosshair.getAttribute("style"),
      };

      // クロスヘアの位置と同じ位置に長方形を描画
      // 長方形のサイズや色は必要に応じて調整
      // xAxisBackBoardData.value.push(attrObj);
      const ary = [...xAxisBackBoardData.value];
      ary.push(attrObj);
      xAxisBackBoardData.value = ary;
    }

    /**  */
    function renderDataBackBoards() {
      if (!chartRef.value) return;
      const chart = chartRef.value;
      const obj = xAxisBackBoardData.value.map((datum) => {
        return createDataBackBoard(datum);
      });
      obj.forEach((o) => chart.chart.renderer.path().attr(o).add());
    }

    // function removeDataBackBoard() {

    // }

    function createDataBackBoard(datum: XAxisBackBoardData, id?: string) {
      // TODO: reactiveに描画
      return {
        id: id || datum.id,
        class: datum.class,
        fill: datum.fill,
        d: datum.d || "",
        "data-z-index": datum["data-z-index"],
        stroke: datum.stroke,
        "stroke-width": datum["stroke-width"],
        style: datum.style,
      };
    }

    /**
     * ID取得
     * @param categoryIndex index
     */
    function getId(categoryIndex: number) {
      return `${X_AXIS_CAT_BACKBOARD}${String(categoryIndex)}`;
    }

    function onClickBtnReload() {
      isNullOptions.value = true;
      nextTick(() => (isNullOptions.value = false));
    }

    return {
      chartRef,
      chartMain,
      chartType,
      tickPixelInterval,
      tickPositions,
      tickInterval,
      tickAmount,
      min,
      max,
      options,

      onClickBtnReload,
    };
  },
});

/**
 * Highchartsのデータを生成
 * @param numSeries 凡例数
 * @param numPoints データポイント数
 */
function generateHeavyData(
  type: "column" | "stack",
  numSeries: number,
  numPoints: number
) {
  const data = [];
  switch (type) {
    case "column":
      for (let i = 0; i < numSeries; i++) {
        const seriesData = [];
        for (let j = 0; j < numPoints; j++) {
          seriesData.push({
            // x: j,
            y: Math.random() * 100,
          });
        }
        data.push({
          // name: `Series ${i + 1}`,
          data: seriesData,
        });
      }
      break;
    case "stack":
      for (let i = 0; i < numSeries; i++) {
        const seriesData = [];
        for (let j = 0; j < numPoints; j++) {
          seriesData.push(Math.random() * 100);
        }
        data.push({
          name: `Series ${i + 1}`,
          data: seriesData,
        });
      }
      break;
  }
  return data;
}
</script>

<style lang="scss">
.high-charts {
  height: 100%;
  display: flex;

  .high-charts-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .high-charts-main {
    flex: 1;
    width: 0;
    > * {
      width: 100%;
      height: 100%;
    }
  }

  .highcharts-series-0 {
    .highcharts-point {
      fill: rgba(200, 0, 0, 0.3);
    }
  }

  .test {
    fill: rgba(200, 0, 0, 0.3) !important;
  }
}
</style>
