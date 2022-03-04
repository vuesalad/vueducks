<script>
import { h, createElementVNode,ref , onMounted } from 'vue'

export default {
  name:"myHeading",

  props: {
      title : String
  },
  setup(props, {attrs}) {
    const count = ref(245);
    const root = ref();
    function rendera () {
      console.log("Render: Who am I? :", this)
      console.log("Render: what is input props", props)
      console.log("Render: What is my props?", this.$props)
      console.log("Render: I am count", count)

      function myaction() {
         console.log(count.value);
         count.value ++;
         console.log("attr", attrs)
         console.log("root", root.value)

         const node = document.createElement("div");
         node.innerHTML = "BangBang"
         root.value.appendChild(node)

      }

      var subVnode = createElementVNode ('div',  { onClick: myaction,  innerHTML: "hello"  + count.value + props.title +"click!me"}, null, 64)
      console.log (subVnode)
      var fullVnode =  createElementVNode('div', {ref: root, class: "a"  } , 
      [
        subVnode
      ])
      console.log("fullVNode", fullVnode)
      return fullVnode
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
