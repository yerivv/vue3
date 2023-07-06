<template>
  <div>
    <h2>1</h2>
    <p>{{ reactMsg }}</p>
    <button v-on:click="reactMsgAdd">눌러</button>
    <h2>2</h2>
    <p>{{ normalMsg }}</p>
    <button v-on:click="normalMsgAdd">눌러</button>
  </div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue';

export default {
  setup () {
    console.log('1');
    const reactMsg = ref('Hello R');
    const reactMsgAdd = () => {
      reactMsg.value = reactMsg.value + '!';
    };

    //console.log('isRef(reactMsg) : ', isRef(reactMsg));

    let normalMsg = 'Hello N';
    const normalMsgAdd = () => {
      normalMsg = normalMsg + '!';
    };

    onMounted(() => {
      console.log('2');
    })
    onBeforeMount(() => {
      console.log('3');
    })


    return {
      reactMsg,
      reactMsgAdd,
      normalMsg,
      normalMsgAdd
    };
  }
}
</script>

<style lang="scss" scoped>

</style>