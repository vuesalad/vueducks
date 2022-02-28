<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>Yiheyuan Road</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        Pingshan Road
      </n-layout-content>
      <n-layout-footer>Chengfu Road</n-layout-footer>
    </n-layout>
    <n-layout>
      <n-layout-header>Yiheyuan Road</n-layout-header>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          Handian Bridge
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          Pingshan Road
        </n-layout-content>
      </n-layout>
      <n-layout-footer>Chengfu Road</n-layout-footer>
    </n-layout>
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        Handian Bridge
      </n-layout-sider>
      <n-layout>
        <n-layout-header>Yiheyuan Road</n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          Pingshan Road
        </n-layout-content>
        <n-layout-footer>Chengfu Road</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
export default {
    name: "DemoLayout",
    setup() {
        
    },
}
</script>

