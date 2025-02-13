<template>
  <div class="screen">
    <!-- Nodes graph -->
    <VueFlow v-model="elements" class="vue-flow-basic-example" :default-zoom="1.5" :min-zoom="0.4" :max-zoom="4">
      <!-- UI elements -->
      <Background />
      <MiniMap class="ui-map" :style="`background-color: ${theme === 'light' ? '#fff' : '#000'}`" />
      <Controls />

      <!-- Theme panel -->
      <Panel :position="PanelPosition.TopRight">
        <button class="theme-btn" @click="toggleTheme">
          <component :is="theme === 'light' ? Moon : Sun" :size="24" />
        </button>
      </Panel>
    </VueFlow>

    <!-- Nodes info -->
    <PopupInfo v-if="selectedNode" :node="selectedNode" @close="selectedNode = null" />
  </div>
</template>

<script lang="ts" setup>
import { MiniMap, Controls, Background, Panel, PanelPosition } from '@vue-flow/additional-components'
import { VueFlow, useVueFlow, Elements } from '@vue-flow/core'
import PopupInfo from './components/PopupInfo.vue'
import { ref } from 'vue'
import nodesData from './data'
import { Sun, Moon } from 'lucide-vue-next'

const theme = ref(localStorage.getItem('theme') || 'light')
// data
const elements = ref<Elements>(nodesData)
const { onPaneReady, onConnect, addEdges, onNodeClick } = useVueFlow()
const selectedNode = ref<{ id: string; label: string } | null>(null)

// Get description for node
onNodeClick(({ node }) => {
  selectedNode.value = { id: node.id, label: String(node.label) || 'Unknown' }
})

onPaneReady(({ fitView }) => {
  fitView()
})
onConnect((params) => addEdges([params]))

// Change theme
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.body.classList.toggle('dark', theme.value === 'dark')
  localStorage.setItem('theme', theme.value)
}

onMounted(() => {
  if (theme.value === 'dark') {
    document.body.classList.add('dark')
  }
})
</script>
