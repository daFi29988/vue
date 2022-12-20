function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    disableSpecialAttack() {
    return this.currentRound % 3 !== 0
    },
    },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    speAttackMonster() {
      this.currentRound++;
      const specialAttackValue = getRandomValue(15, 18);
      this.monsterHealth -= specialAttackValue;

      this.speAttackPlayer();
    },
    speAttackPlayer() {
      const attackValue = getRandomValue(10, 14);
      this.playerHealth -= attackValue;
    },
    healPlayer() {
      if (this.playerHealth < 75) {
        const heal = getRandomValue(6, 9);
        this.playerHealth += heal;
      }
    },
  },
});
app.mount("#game");
