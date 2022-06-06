<template>
  <vue-seamless-scroll
    ref="scroll"
    :data="props.names"
    :class-option="option"
    class="scroll"
  >
    <ul class="scroll-ul">
      <li v-for="(item, index) in props.names" :key="index" class="scroll-li">
        <div class="scroll-div">
          <span v-text="item"></span><span v-text="props.counts[index]"></span>
        </div>
      </li>
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
    step: 0.2,
    direction: 1,
    // limitMoveNum: props.names?.length,
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
  width: 100%;
}
.scroll-ul {
  width: 100%;
}
.scroll-ul .scroll-li {
  text-align: center;
}
.scroll-ul .scroll-li .scroll-div {
  width: 200px;
  margin: auto;
}
</style>
