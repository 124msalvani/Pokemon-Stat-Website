var HPGet;
var AttackGet;
var DefenseGet;
var SpAttackGet;
var SpDefenseGet;
var SpeedGet;

document.getElementById("submit").addEventListener("click", onClick);
function onClick() {
  getHP();
  getAttack();
  getDefense();
  getSpAttack();
  getSpDefense();
  getSpeed();
  addData();
};
function getHP() {
    HPGet = document.getElementById("HP").value;
    console.log(HPGet);
}
function getAttack() {
    AttackGet = document.getElementById("Attack").value;
    console.log(AttackGet);
}
function getDefense() {
    DefenseGet = document.getElementById("Defense").value;
    console.log(DefenseGet);
}
function getSpAttack() {
    SpAttackGet = document.getElementById("Sp.Attack").value;
    console.log(SpAttackGet);
}
function getSpDefense() {
    SpDefenseGet = document.getElementById("Sp.Defense").value;
    console.log(SpDefenseGet);
}
function getSpeed() {
    SpeedGet = document.getElementById("Speed").value;
    console.log(SpeedGet);
}

let myChart = document.getElementById("myChart").getContext("2d");
let myChart2 = document.getElementById("myChart2").getContext("2d");

Chart.defaults.font.family="Lato";
Chart.defaults.font.size= 18;
Chart.defaults.color= "black"; 
let pokemonStatChart = new Chart(myChart,{
    type: "radar", //bar, horizontalBar, pie, line, doughnut, radar. polarArea
    data: {
        labels:["HP", "Attack","Defense", "Special Attack", "Special Defense", "Speed", ],
        datasets:[{
            label:"Your Pokemon",
            data:[
                100,100,100,100,100,100
            ],
            backgroundColor:["rgba(101, 173, 226, 0.5)", "navy"],
            borderColor:"black",
            borderWidth:"1",
            hoverBorderColor:"grey",
            hoverBorderWidth:"2",
        }, {
            label:"Arceus",
            data:[
                120, 120, 120, 120, 120, 120
            ],
            // backgroundColor:["grey", pattern.draw('square', '#1f77b4'), "skyblue", "rgba(255, 231, 151, 0.8)", "rgba(18, 136, 116, 0.8)", 'rgba(255, 128, 7, 0.8)'],
            backgroundColor: [
                "grey",
                pattern.draw('diamond', 'rgba(213, 192, 31, 0.3)'),
                /*pattern.draw('square', '#1f77b4'),
                pattern.draw('circle', '#ff7f0e'),
                pattern.draw('diamond', '#2ca02c'),
                pattern.draw('zigzag-horizontal', '#17becf'),
                pattern.draw('zigzag-horizontal', '#17becf'),
                pattern.draw('triangle', 'rgb(255, 99, 132, 0.4)') */ // with opacity
              ],
            borderColor:"black",
            borderWidth:"1",
        }]
    },
    options: {
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
}); 
let pokemonStatChart2 = new Chart(myChart2,{
    type: "radar", //bar, horizontalBar, pie, line, doughnut, radar. polarArea
    data: {
        labels:["HP", "Attack","Defense", "Special Attack", "Special Defense", "Speed", ],
        datasets:[{
            label:"Your Pokemon",
            data:[
                100,100,100,100,100,100
            ],
            backgroundColor:["rgba(101, 173, 226, 0.5)", "navy"],
            borderColor:"black",
            borderWidth:"1",
            hoverBorderColor:"grey",
            hoverBorderWidth:"2",
        }, {
            label:"Victini",
            data:[
                100, 100, 100, 100, 100, 100
            ],
            // backgroundColor:["grey", pattern.draw('square', '#1f77b4'), "skyblue", "rgba(255, 231, 151, 0.8)", "rgba(18, 136, 116, 0.8)", 'rgba(255, 128, 7, 0.8)'],
            backgroundColor: [
                "grey",
                pattern.draw('triangle', 'rgba(239, 114, 29, 0.3)'),
                /*pattern.draw('square', '#1f77b4'),
                pattern.draw('circle', '#ff7f0e'),
                pattern.draw('diamond', '#2ca02c'),
                pattern.draw('zigzag-horizontal', '#17becf'),
                pattern.draw('zigzag-horizontal', '#17becf'),
                pattern.draw('triangle', 'rgb(255, 99, 132, 0.4)') */ // with opacity
              ],
            borderColor:"black",
            borderWidth:"1",
        }]
    },
    options: {
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
}); 
let pokemonStatChart3 = new Chart(myChart3,{
    type: "radar", //bar, horizontalBar, pie, line, doughnut, radar. polarArea
    data: {
        labels:["HP", "Attack","Defense", "Special Attack", "Special Defense", "Speed", ],
        datasets:[{
            label:"Your Pokemon",
            data:[
                100,100,100,100,100,100
            ],
            backgroundColor:["rgba(101, 173, 226, 0.5)", "navy"],
            borderColor:"black",
            borderWidth:"1",
            hoverBorderColor:"grey",
            hoverBorderWidth:"2",
        }, {
            label:"Mega Rayquaza",
            data:[
                105, 180, 100, 180, 100, 115
            ],
            // backgroundColor:["grey", pattern.draw('square', '#1f77b4'), "skyblue", "rgba(255, 231, 151, 0.8)", "rgba(18, 136, 116, 0.8)", 'rgba(255, 128, 7, 0.8)'],
            backgroundColor: [
                "grey",
                pattern.draw('triangle', 'rgba(239, 114, 29, 0.3)'),
                /*pattern.draw('square', '#1f77b4'),
                pattern.draw('circle', '#ff7f0e'),
                pattern.draw('diamond', '#2ca02c'),
                pattern.draw('zigzag-horizontal', '#17becf'),
                pattern.draw('zigzag-horizontal', '#17becf'),
                pattern.draw('triangle', 'rgb(255, 99, 132, 0.4)') */ // with opacity
              ],
            borderColor:"black",
            borderWidth:"1",
        }]
    },
    options: {
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
}); 
function addData(){
    pokemonStatChart.data.datasets[0].data[0] = HPGet;
    pokemonStatChart.data.labels[0] = "HP";

    pokemonStatChart.data.datasets[0].data[1] = AttackGet;
    pokemonStatChart.data.labels[1] = "Attack";

    pokemonStatChart.data.datasets[0].data[2] = DefenseGet;
    pokemonStatChart.data.labels[2] = "Defense";

    pokemonStatChart.data.datasets[0].data[3] = SpAttackGet;
    pokemonStatChart.data.labels[3] = "Sp.Attack";

    pokemonStatChart.data.datasets[0].data[4] = SpDefenseGet;
    pokemonStatChart.data.labels[4] = "Sp.Defense";

    pokemonStatChart.data.datasets[0].data[5] = SpeedGet;
    pokemonStatChart.data.labels[5] = "Speed";
    /*Chart 2*/
    pokemonStatChart2.data.datasets[0].data[0] = HPGet;
    pokemonStatChart2.data.labels[0] = "HP";

    pokemonStatChart2.data.datasets[0].data[1] = AttackGet;
    pokemonStatChart2.data.labels[1] = "Attack";

    pokemonStatChart2.data.datasets[0].data[2] = DefenseGet;
    pokemonStatChart2.data.labels[2] = "Defense";

    pokemonStatChart2.data.datasets[0].data[3] = SpAttackGet;
    pokemonStatChart2.data.labels[3] = "Sp.Attack";

    pokemonStatChart2.data.datasets[0].data[4] = SpDefenseGet;
    pokemonStatChart2.data.labels[4] = "Sp.Defense";

    pokemonStatChart2.data.datasets[0].data[5] = SpeedGet;
    pokemonStatChart2.data.labels[5] = "Speed";
    /*Chart 3*/
    pokemonStatChart3.data.datasets[0].data[0] = HPGet;
    pokemonStatChart3.data.labels[0] = "HP";

    pokemonStatChart3.data.datasets[0].data[1] = AttackGet;
    pokemonStatChart3.data.labels[1] = "Attack";

    pokemonStatChart3.data.datasets[0].data[2] = DefenseGet;
    pokemonStatChart3.data.labels[2] = "Defense";

    pokemonStatChart3.data.datasets[0].data[3] = SpAttackGet;
    pokemonStatChart3.data.labels[3] = "Sp.Attack";

    pokemonStatChart3.data.datasets[0].data[4] = SpDefenseGet;
    pokemonStatChart3.data.labels[4] = "Sp.Defense";

    pokemonStatChart3.data.datasets[0].data[5] = SpeedGet;
    pokemonStatChart3.data.labels[5] = "Speed";

    pokemonStatChart.update();
    pokemonStatChart2.update();
    pokemonStatChart3.update();
}

document.getElementById("darkmode").addEventListener('click', darkmodeToggle);

function darkmodeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }