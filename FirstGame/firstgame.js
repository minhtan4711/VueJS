/* Blood */
var youBlood = new Vue({
    el: '#you-blood-bar',
    data: {
        blood: 100,
        width: 100,
    }

})
var monsterBlood = new Vue({
    el: '#monster-blood-bar',
    data: {
        blood: 100,
        width: 100,
    }
})


var play = document.getElementById('play')
// console.log(play)
play.style.display = 'none'




// console.log(monsterBlood)

/* Play Button */
var start = new Vue({
    el: '#start',
    methods: {
        begin: function () {
            play.style.display = 'flex'
        },
    }
})

var attack = new Vue({
    el: '#attack',
    methods: {
        fight: function () {
            youBlood.blood -= 3;
            monsterBlood.blood -= 5;
        },
    }
})

var specialAttack = new Vue({
    el: '#special-attack',
    methods: {
        superFight: function () {
            monsterBlood.blood -= 15;
            
        },
    }
})

var heal = new Vue({
    el: '#heal',
    methods: {
        healUp: function () {
            if (youBlood.blood <= 97) {
                youBlood.blood += 3;
            }
            if (monsterBlood.blood <= 99) {
                monsterBlood.blood += 2;
            }
        }
    }
})

var giveup = new Vue({
    el: '#giveup',
    methods: {
        restart: function () {

            play.style.display = 'none'
            youBlood.blood = 100
            monsterBlood.blood = 100
        }
    }
})


