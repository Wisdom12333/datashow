<template>
  <vue-seamless-scroll
    ref="scroll"
    :data="props.names"
    :class-option="option"
    class="scroll"
    :style="{ width: `${props.width - 27}px` }"
  >
    <ul class="scroll-ul">
      <li
        v-for="(item, index) in props.names"
        :key="index"
        class="scroll-li1"
        v-text="item"
      ></li>
    </ul>
    <ul class="scroll-ul">
      <li
        v-for="item in props.counts"
        :key="item"
        class="scroll-li2"
        v-text="item"
      ></li>
    </ul>
  </vue-seamless-scroll>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
// eslint-disable-next-line
const props = defineProps({
  names: Array,
  counts: Array,
  width: Number,
});

const scroll = ref<HTMLElement>();

const option = computed(() => {
  console.log((props.width as number) - 27);
  // console.log(42 * (props.names?.length as number));

  return {
    step:
      (props.width as number) - 27 > 42 * (props.names?.length as number)
        ? 0
        : 0.2,
    direction: 2,
    limitMoveNum: props.names?.length,
    hoverStop: true,
    openWatch: true,
  };
});

onMounted(() => {
  console.log(props.width as number);

  setInterval(() => {
    console.log(props.width as number);
  }, 2000);
});
</script>

<style scoped>
* {
  color: #ffffff;
}
.scroll {
  overflow: hidden;
  height: calc(2.5875rem - 2px);
}
.scroll-ul {
  border: 1px solid #ffe0e6;
  display: flex;
}
.scroll-ul .scroll-li1 {
  height: calc((2.5875rem - 2px) / 2 - 5px);
  width: 42px;
  border: 1px solid #ffe0e6;
  writing-mode: tb-rl;
  line-height: 42px;
  text-align: center;
}
.scroll-ul .scroll-li2 {
  height: calc((2.5875rem - 2px) / 2 - 5px);
  width: 42px;
  border: 1px solid #ffe0e6;
  line-height: calc((2.5875rem - 2px) / 2 - 5px);
  text-align: center;
}
</style>
