let myChart = document.getElementById("myChart").getContext("2d");

Chart.defaults.font.family="Lato";
Chart.defaults.font.size= 18;
Chart.defaults.color= "black"; 


let pokemonStatChart = new Chart(myChart,{
    type: "radar", //bar, horizontalBar, pie, line, doughnut, radar. polarArea
    data: {
        labels:["HP", "Attack","Defense", "Special Attack", "Special Defense", "Speed", ],
        datasets:[{
            label:"Input Mon",
            data:[
                80, 82, 83, 100, 100, 80
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
