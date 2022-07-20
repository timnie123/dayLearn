<template>
  <h2>Demo</h2>
  <div>
    <span>props: {{ title }} </span>
  </div>
  <div>
    <span>ref: {{ num }} </span>
  </div>
  <div>
    <span>reactive: name:{{ name }} &nbsp;age:{{ age }}</span>
  </div>
  <div>
    <span>watch: old:{{ old }}to new:{{ newVal }}</span>
  </div>
  <div>
    <span>computed: {{big}}</span>
  </div>
</template>

<script>
import {ref, reactive, toRefs, onMounted, watch, computed} from "vue";

export default {
  name: "CompositionDemo",
  props: {
    text: {
      type: String,
      required: true,
      default: 'no data'
    }
  },
  setup(props) {
    // ref 申明响应式变量
    const num = ref(2);
    let old = ref(0);
    let newVal = ref(0);
    // props 参数
    const title = ref(props.text);
    // reactive
    const obj = reactive({
      name: 'tim',
      age: 12
    });
    let {name, age} = toRefs(obj);
    // 生命周期
    onMounted(() => {
      let timer = setInterval(() => {
        obj.age++
        if (age.value > 50) {
          clearInterval(timer);
        }
      }, 1000)
    });

    watch(age, (value, oldValue) => {
      newVal.value = value
      old.value = oldValue
    });


    const big = computed(() => num.value * newVal.value)


    return {num, title, name, age, newVal, old, big};
  }
}
</script>

<style scoped>

</style>
