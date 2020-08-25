new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [], //mang chua tung luot gay damage
    },
    methods: {
        startGame: function () { //khoi dong game
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            })
            //kiem tra xem ai thang
            if (this.checkWin()) {
                return; //thoat game    
            }


            //khoi dong lai damage
            this.monsterAttack();

        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + damage
            })
            //kiem tra xem ai thang
            if (this.checkWin()) {
                return; //thoat game    
            }
            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10
            } else {
                this.playerHealth = 100
            }
            this.monsterAttack()
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        monsterAttack: function () {
            var damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            })
        },
        calculateDamage: function (min, max) {

            return Math.max(Math.floor((Math.random() * max) + 1), min)
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true;
            }
            return false;
        }

    }
})