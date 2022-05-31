<template>
  <table class="table">
    <tr>
      <th v-for="(item, index) in props.names" :key="index">
        {{ item }}
      </th>
    </tr>
    <tr>
      <td v-for="item in props.counts" :key="item">
        {{ item }}
      </td>
    </tr>
  </table>
</template>

<script lang="ts" setup>
// eslint-disable-next-line
const props = defineProps({
  names: Array,
  counts: Array,
});
</script>

<style scoped>
* {
  color: #ffffff;
}
.table {
  width: 100%;
  height: 80%;
  text-align: center;
  border: 1px solid #ffe0e6;
}
.table tr {
  height: 40%;
}
.table tr th {
  border: 1px solid #ffe0e6;
  writing-mode: tb-rl;
}
.table tr td {
  border: 1px solid #ffe0e6;
}
</style>
