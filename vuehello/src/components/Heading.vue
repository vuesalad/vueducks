<script>
import { h, ref , onMounted } from 'vue'

export default {
  name:"myHeading",

  props: {
      title : String
  },
  setup(props) {
    const count = ref(245);
    const root = ref();
    function rendera () {
      console.log("Render: Who am I? :", this)
      console.log("Render: what is input props", props)
      console.log("Render: What is my props?", this.$props)
      console.log("Render: I am count", count)
      return h('div', {ref: root, class: "a", innerHTML: "hello"  + count.value + props.title })
    };

    onMounted(function some() {
      console.log("onMounted: count", count.value)
      console.log("onMounted: Who am I ?", root)
      console.log("onMounted: Who am I ?", root.value)

    })


    return  rendera;
  }
}

</script>



<style scoped>
a {
  color: #42b983;
}
</style>
