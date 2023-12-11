<template>
  <div class="container" @click="doFlip">
    <div class="card" :class="{ flipped: card.flipped }">
      <img v-if="card.name === 'chip'" class="front" src="../../assets/chip.png" />
      <img v-if="card.name === 'cooler'" class="front" src="../../assets/cooler.png" />
      <img v-if="card.name === 'fq'" class="front" src="../../assets/fq.png" />
      <img v-if="card.name === 'memo'" class="front" src="../../assets/memo.png" />
      <img v-if="card.name === 'mae_bord'" class="front" src="../../assets/mae_bord.png" />
      <img v-if="card.name === 'hd'" class="front" src="../../assets/hd.png" />
      <img v-if="card.name === 'imare'" class="front" src="../../assets/imare.png" />
      <img v-if="card.name === 'mem'" class="front" src="../../assets/mem.png" />

      <img class="back" src="../../assets/back.png" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import type { ICard } from '@/IType'
import { GameStoreKey } from '@/stores'

interface IGameCardProps {
  card: ICard
}

const props = defineProps<IGameCardProps>()

const emit = defineEmits(['onFlip'])

const { card } = toRefs(props)
const { commit } = useStore(GameStoreKey)

const doFlip = () => {
  if (card.value.flipped) {
    return
  }
  commit('flips', [card.value])
  emit('onFlip', card.value)
}
</script>

<style scoped>
.container {
  width: 100px;
  height: 121px;
  margin-right: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background: blue;
  transform: rotateY(0deg);
}

.card .front {
  background: blue;
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}
</style>
