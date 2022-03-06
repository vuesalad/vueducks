<template>
    <div v-once ref="root">I am frozen</div>
</template>

<script>

import { onMounted, ref } from 'vue'
import Draggable from '@dnd';

export default {
    name: "drag wrapper",

    setup(props) {
        const root = ref(null)

        console.log("root", root)
        // do nothing now 

        onMounted( () => {
            console.log("mounted root", root)
            console.log("mounted root value", root.value)

            /* as htmlElement */
            parent = root.value.parentElement;

            console.log("mounted parent", parent)

            const nodedrag = document.createElement("div");
            nodedrag.innerHTML = "BangBang"
            nodedrag.className = "dnd"

            const nodenomal = document.createElement("div");
            nodenomal.innerHTML = "ChCh"
            nodenomal.className = "no"

           root.value.appendChild(nodedrag);
           root.value.appendChild(nodenomal);


           const draggable = new Draggable(root.value, {
             draggable: '.dnd',
             delay: 0,
            });

        })

        return {
            root
        }
    },

}

</script>