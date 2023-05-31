let myChart = document.getElementById("myChart").getContext("2d");

Chart.defaults.font.family="Lato";
Chart.defaults.font.size= 18;
Chart.defaults.color= "black"; 

let pokemonStatChart = new Chart(myChart,{
    type: "radar", //bar, horizontalBar, pie, line, doughnut, radar. polarArea
    data: {
        labels:["HP", "Attack","Defense", "Special Attack", "Special Defense", "Speed", ],
        datasets:[{
            label:"Input 'Mon",
            data:[
                80, 82, 83, 100, 100, 80
            ],
            backgroundColor:["rgba(88, 144, 11, 0.8)", "grey", "skyblue", "lavender", "rgba(255,99,132,0.6)", "rgba(203, 135, 223, 0.29)", "rgba(33, 237, 103, 0.29)"],
            borderColor:"black",
            borderWidth:"1",
            hoverBorderColor:"grey",
            hoverBorderWidth:"2",
        }, {
            label:"Arceus",
            data:[
                78, 84, 78, 109, 85, 100
            ],
            // backgroundColor:["grey", pattern.draw('square', '#1f77b4'), "skyblue", "rgba(255, 231, 151, 0.8)", "rgba(18, 136, 116, 0.8)", 'rgba(255, 128, 7, 0.8)'],
            backgroundColor: [
                pattern.draw('square', '#1f77b4'),
                pattern.draw('circle', '#ff7f0e'),
                pattern.draw('diamond', '#2ca02c'),
                pattern.draw('zigzag-horizontal', '#17becf'),
                pattern.draw('zigzag-horizontal', '#17becf'),
                pattern.draw('triangle', 'rgb(255, 99, 132, 0.4)') // with opacity
              ],
            borderColor:"black",
            borderWidth:"1",
        }]
    },
    options:{
        legend: {
            position: "bottom"
          }
    },
    

}); 
/*
const actions = [
    {name: 'Position: bottom',
    handler(chart) {
      chart.options.plugins.legend.position = 'bottom';
      chart.update();
    }
}
]; */