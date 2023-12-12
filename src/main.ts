import { createApp } from 'vue'
import MemoryGame from './MemoryGame.vue'
import { GameStore, GameStoreKey } from './stores'

createApp(MemoryGame).use(GameStore, GameStoreKey).mount('#game')
