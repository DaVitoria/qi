<template>
  <div class="status-footer">
    <span v-if="status === IStatus.READY">Tempo</span>
    <span v-if="status === IStatus.PLAYING">Jogar</span>
    <a v-if="status === IStatus.PASSED" @click.prevent.stop="reset">Jogar Novamente</a>
    <span class="time-cost">{{ timeCost }} s</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { GameStoreKey } from '@/stores'
import { IStatus } from '@/constants'

const { state, commit } = useStore(GameStoreKey)

const status = computed(() => state.status)
const timeCost = computed(() => state.timeCost)
const reset = () => commit('reset')
</script>

<style scoped>
.status-footer {
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.time-cost {
  position: absolute;
  right: 10px;
  font-size: 15px;
  font-weight: normal;
}
</style>
