# jogo de memoria (qi)

## Componentes

1. `MemoryGame`, o tabuleiro do jogo
2. `ScoreBoard`, painel da parte superior, que inclui "GameLogo", "ProgressBar", "GameScore"
3. `GameLogo`, a esquerda de `ScoreBoard`, mostrando o logotipo do jogo
4. `ProgressBar`, no centro do `ScoreBoard`, mostrando as informações das ocorrências actuais
5. `GameScore`, a direita do `ScoreBoard`, mostrando a melhor pontuação
6. `ChessBoard`, no centro do `MemoryGame`, zona do jogo
7. `GameCard`, cada carta do `Chessboard`
8. `GameStatus`, a parte do rodapé, exibindo o estado actual

## Estrutura do jogo

```
jodo de memoria (qi)
├── src
|   ├── assets
|   |   ├── chip.png
|   |   ├── ...
|   |   └── mem.png
│   │
│   ├── components
│   │   ├── ChessBoard
│   │   │   ├── GameCard.vue
│   │   │   └── index.vue
│   │   ├── ScoreBoard
│   │   │   ├── index.vue
│   │   │   ├── GameLogo.vue
│   │   │   ├── ProgressBar.vue
│   │   │   └── GameScore.vue
│   │   ├── GameStatus.vue
│   │   └── index.vue
│   │
│   ├── stores
│   │   ├── CountTimer.ts
│   │   ├── GameStore.ts
│   │   └── index.ts
│   │
│   ├── MemoryGame.vue
│   ├── constants.ts
│   ├── IType.ts
│   └── main.ts
│
├── index.html
├── env.d.ts
├── package.json
├── tsconfig.config.json
├── tsconfig.json
└── vite.config.ts
```

### Ambiente de execução

- [node.js](https://nodejs.org/en/), version `>=18`
- [pnpm](https://pnpm.io/installation), version `~7`

### Editor de texto

- [visual studio code](https://code.visualstudio.com/)

```bash
#clonar o codigo
git clone https://github.com/leftstick/vue-memory-game.git
cd vue-memory-game

#instalar as dependencias
Yarn
Npm
#start debug server
yarn start
npm start

```
