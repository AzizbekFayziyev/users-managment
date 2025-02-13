<!-- Info popup for nodes -->
<template>
  <div v-if="node" class="overlay" @click.self="closePopup">
    <div class="popup" :class="{ 'fade-out': closing }">
      <h3>{{ node.label }}</h3>
      <p>{{ nodeDescriptions[node.id] || 'No description available.' }}</p>
      <button
        @click="closePopup"
        :class="{ 'btn-press': buttonPressed }"
        @mousedown="buttonPressed = true"
        @mouseup="buttonPressed = false"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

defineProps({
  node: Object,
})

const emit = defineEmits(['close'])
const closing = ref(false)
const buttonPressed = ref(false)

const closePopup = () => {
  closing.value = true
  setTimeout(() => emit('close'), 300)
}

// Descriptions for nodes
const nodeDescriptions: Record<string, string> = {
  1: 'CEO (Chief Executive Officer) — manages the overall strategy and development of the company.',
  2: 'Project Manager — plans projects and manages the team.',
  3: 'HR Manager — hires employees and improves their working conditions.',
  4: 'Front-end Developer — creates user interfaces and converts UI/UX design into code.',
  5: 'Back-end Developer — writes server-side code and manages databases.',
  6: 'Web Designer — develops website designs and creates UI components.',
  7: 'QA Tester — checks software quality and finds bugs.',
  8: 'Final Product — the end result delivered to clients or users.',
}
</script>

<style scoped>
.overlay {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-in-out;
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  text-align: center;
  animation: slideIn 0.3s ease-in-out;
}

button {
  margin-top: 10px;
  padding: 8px 15px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #0056b3;
}

button:active,
.btn-press {
  transform: scale(0.95);
}

.fade-out {
  animation: fadeOut 0.3s ease-in-out forwards, slideOut 0.3s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes slideOut {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}
</style>
