<template>
  <header>
    <h1>任务进度-概览</h1>
    <div class="showTime">当前时间：{{ time }}</div>
  </header>
  <section class="mainbox">
    <!--  行1 begin  -->
    <div class="line">
      <div class="line1 panel bar">
        <h2>分析3天内将超期</h2>
        <div ref="chart1" class="chart"></div>
        <div class="panel-footer"></div>
      </div>
      <div class="line1 panel">
        <h2>今日即将超期</h2>
        <div ref="chart2" class="chart"></div>
        <div class="panel-footer"></div>
      </div>
      <div class="line1 panel pie">
        <h2>需求分析已超期</h2>
        <div ref="chart3" class="chart"></div>
        <div class="panel-footer"></div>
      </div>
    </div>
    <!--  行1 end  -->

    <div class="subBox">
      <div class="column">
        <div class="panel">
          <h2>开发延期人员</h2>
          <scroll-table :names="devNames" :counts="devCounts" />
          <div class="panel-footer"></div>
        </div>
        <div class="panel">
          <h2>小组开发超时</h2>
          <div ref="chart4" class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel" style="height: calc(3.875rem * 2 + 0.1875rem)">
          <h2>需求管理平台延期</h2>
          <div ref="chart6" class="chart mid"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel">
          <h2>测试延期人员</h2>
          <scroll-table :names="testNames" :counts="testCounts" />
          <div class="panel-footer"></div>
        </div>
        <div class="panel">
          <h2>小组测试超时</h2>
          <div ref="chart5" class="chart"></div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ScrollTable from "./components/ScrollTable.vue";
import "./components/flexible";
import { onMounted, onUnmounted, reactive, ref } from "vue";
import * as echarts from "echarts";

let time = ref<string>("");
let interval = ref<number>();

let chart1 = ref<HTMLElement>();
let chart2 = ref<HTMLElement>();
let chart3 = ref<HTMLElement>();
let chart4 = ref<HTMLElement>();
let chart5 = ref<HTMLElement>();

let devNames = ref<string[]>([
  "石润杰",
  "石润杰",
  "test3",
  "test4",
  "test5",
  "test6",
  "test7",
  "test8",
  "test9",
  "test10",
  "test11",
]);
let devCounts = ref<number[]>([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

let testNames = ref<string[]>([
  "test1",
  "test2",
  "test3",
  "test4",
  "test5",
  "test6",
  "test7",
  "test8",
  "test9",
  "test10",
  "test11",
]);
let testCounts = ref<number[]>([11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

let option1 = reactive({
  color: ["#2f89cf"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: "0%",
    top: "10px",
    right: "0%",
    bottom: "4%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [] as string[],
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
      },
      axisLine: {
        show: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          // width: 1,
          // type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        },
      },
    },
  ],
  series: [
    {
      name: "",
      type: "bar",
      barWidth: "30%",
      data: [] as number[],
      itemStyle: {
        barBorderRadius: 5,
      },
    },
  ],
});

function setChart1() {
  // 实例化对象
  let myChart = echarts.init(chart1.value as HTMLElement);
  // 指定配置和数据
  let name = ["旅游", "教培", "游戏", "医疗", "电商", "社交", "金融"];
  let count = [2, 3, 3, 9, 15, 12, 6];
  let option = Object.assign({}, option1);
  option.xAxis[0].data = name;
  option.series[0].data = count;

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function setChart2() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(chart2.value as HTMLElement);

  // 指定配置和数据
  let name = ["旅游", "教培", "游戏", "医疗", "电商", "社交", "金融"];
  let count = [2, 3, 3, 9, 15, 12, 6];
  let option = Object.assign({}, option1);
  option.xAxis[0].data = name;
  option.series[0].data = count;

  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function setChart3() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(chart3.value as HTMLElement);

  // 指定配置和数据
  let name = ["旅游", "教培", "游戏", "医疗", "电商", "社交", "金融"];
  let count = [2, 3, 3, 9, 15, 12, 6];
  let option = Object.assign({}, option1);
  option.xAxis[0].data = name;
  option.series[0].data = count;

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function setChart4() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(chart4.value as HTMLElement);

  // 指定配置和数据
  let name = ["旅游", "教培", "游戏", "医疗", "电商", "社交", "金融"];
  let count = [2, 3, 3, 9, 15, 12, 6];
  let option = Object.assign({}, option1);
  option.xAxis[0].data = name;
  option.series[0].data = count;

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function setChart5() {
  // 基于准备好的dom，初始化echarts实例
  let myChart = echarts.init(chart5.value as HTMLElement);

  // 指定配置和数据
  let name = ["旅游", "教培", "游戏", "医疗", "电商", "社交", "金融"];
  let count = [2, 3, 3, 9, 15, 12, 6];
  let option = Object.assign({}, option1);
  option.xAxis[0].data = name;
  option.series[0].data = count;

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

onMounted(() => {
  setChart1();
  setChart2();
  setChart3();
  setChart4();
  setChart5();

  interval.value = setInterval(() => {
    let date = new Date();
    let y = date.getFullYear();
    let mt = date.getMonth() + 1;
    let day = date.getDate();
    let h = date.getHours(); //获取时
    let m = date.getMinutes(); //获取分
    let s = date.getSeconds(); //获取秒
    time.value =
      "当前时间：" +
      y +
      "年" +
      mt +
      "月" +
      day +
      "-" +
      h +
      "时" +
      m +
      "分" +
      s +
      "秒";
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
@font-face {
  font-family: electronicFont;
  src: url(./assets/DS-DIGIT.TTF);
}
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  /*  背景图定位 / 背景图尺寸  cover 完全铺满容器  contain 完整显示在容器内 */
  background: url(./assets/bg.jpg) no-repeat #000;
  background-size: cover;
  /* 行高是字体1.15倍 */
  line-height: 1.15;
}
header {
  position: relative;
  height: 1.25rem;
  background: url(./assets/head_bg.png) no-repeat top center;
  background-size: 100% 100%;
}
header h1 {
  font-size: 0.475rem;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}
header .showTime {
  position: absolute;
  top: 0;
  right: 0.375rem;
  line-height: 0.9375rem;
  font-size: 0.25rem;
  color: rgba(255, 255, 255, 0.7);
}
.mainbox {
  min-width: 1024px;
  max-width: 1920px;
  padding: 0.125rem 0.125rem 0;
  /*display: flex;*/
}
.mainbox .line {
  display: flex;
}
.mainbox .line .line1 {
  width: 33.33%;
}
.mainbox .subBox {
  display: flex;
}
.mainbox .subBox .column {
  flex: 1;
}

.mainbox .subBox .column .mid {
  height: calc(100% - 0.1875rem);
}

.panel {
  position: relative;
  height: 3.875rem;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(255, 255, 255, 0.04) url(./assets/line.png);
  padding: 0 0.1875rem 0.5rem;
  margin-bottom: 0.1875rem;
}
.panel::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}
.panel::after {
  position: absolute;
  top: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}
.panel .panel-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.panel .panel-footer::before {
  position: absolute;
  bottom: 0;
  left: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}
.panel .panel-footer::after {
  position: absolute;
  bottom: 0;
  right: 0;
  content: "";
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}
.panel h2 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  font-size: 0.25rem;
  font-weight: 400;
}
.panel h2 a {
  margin: 0 0.1875rem;
  color: #fff;
  text-decoration: underline;
}
.panel .chart {
  height: 3rem;
}
.chart {
  width: 100%;
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}
@media screen and (min-width: 1920px) {
  html {
    font-size: 80px !important;
  }
}
</style>
