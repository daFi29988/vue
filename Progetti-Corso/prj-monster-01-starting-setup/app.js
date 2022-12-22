function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%'}
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: '0%'}
      }
      return { width: this.playerHealth + "%" };
    },
    disableSpecialAttack() {
    return this.currentRound % 3 !== 0
    },
    },
    watch: {
      playerHealth(value) {
        if (value <= 0 && this.monsterHealth <= 0) {
          // Pareggio
          this.winner = 'draw'
        } else if (value <= 0) {
          // Player lost
          this.winner = 'monster'
        }
      },
      monsterHealth(value) {
        if (value <= 0 && this.playerHealth <= 0) {
          // Pareggio
          this.winner = 'draw'
        } else if (value <= 0) {
          // Monster lost
          this.winner = 'player'
        }
      }
    },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
    },
    speAttackMonster() {
      this.currentRound++;
      const specialAttackValue = getRandomValue(15, 18);
      this.monsterHealth -= specialAttackValue;
      this.addLogMessage('player', 'special-attack', specialAttackValue);
      this.attackPlayer();

      this.speAttackPlayer();
    },
    speAttackPlayer() {
      const attackValue = getRandomValue(10, 14);
      this.playerHealth -= attackValue;
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(10, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer;
    },
    resetGame() { 
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    surrendButton() {
      this.playerHealth = 0;
      /* this.winner = 'monster'; Corso Vue.js */
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },

  },
});
app.mount("#game");
