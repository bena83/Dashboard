
Apex.grid = {
  padding: {
    right: 0,
    left: 0
  }
}

Apex.dataLabels = {
  enabled: false
}

var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

// the default colorPalette for this dashboard
//var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

var spark1 = {
chart: {
  id: 'sparkline1',
  group: 'sparklines',
  type: 'area',
  height: 160,
  sparkline: {
    enabled: true
  },
},
stroke: {
  curve: 'straight'
},
fill: {
  opacity: 1,
},
series: [{
  name: 'Admissions',
  data: randomizeArray(sparklineData)
}],
labels: [...Array(24).keys()].map(n => `2023-01-0${n+1}`),
yaxis: {
  min: 0
},
xaxis: {
  type: 'datetime',
},
colors: ['#DCE6EC'],
title: {
  text: '3000',
  offsetX: 30,
  style: {
    fontSize: '24px',
    cssClass: 'apexcharts-yaxis-title'
  }
},
subtitle: {
  text: 'Admissions',
  offsetX: 30,
  style: {
    fontSize: '14px',
    cssClass: 'apexcharts-yaxis-title'
  }
}
}
new ApexCharts(document.querySelector(".spark1"), spark1).render();
var spark1 = {
chart: {
  id: 'sparkline1',
  group: 'sparklines',
  type: 'area',
  height: 160,
  sparkline: {
    enabled: true
  },
},
stroke: {
  curve: 'straight'
},
fill: {
  opacity: 1,
},
series: [{
  name: 'Deliveries',
  data: randomizeArray(sparklineData)
}],
labels: [...Array(24).keys()].map(n => `2023-01-0${n+1}`),
yaxis: {
  min: 0
},
xaxis: {
  type: 'datetime',
},
colors: ['#DCE6EC'],
title: {
  text: '2000',
  offsetX: 30,
  style: {
    fontSize: '24px',
    cssClass: 'apexcharts-yaxis-title'
  }
},
subtitle: {
  text: 'Deliveries',
  offsetX: 30,
  style: {
    fontSize: '14px',
    cssClass: 'apexcharts-yaxis-title'
  }
}
}
new ApexCharts(document.querySelector(".spark2"), spark1).render();


var spark1 = {
chart: {
  id: 'sparkline1',
  group: 'sparklines',
  type: 'area',
  height: 160,
  sparkline: {
    enabled: true
  },
},
stroke: {
  curve: 'straight'
},
fill: {
  opacity: 1,
},
series: [{
  name: 'Maternal Deaths',
  data: randomizeArray(sparklineData)
}],
labels: [...Array(24).keys()].map(n => `2023-01-0${n+1}`),
yaxis: {
  min: 0
},
xaxis: {
  type: 'datetime',
},
colors: ['#DCE6EC'],
title: {
  text: '0',
  offsetX: 30,
  style: {
    fontSize: '24px',
    cssClass: 'apexcharts-yaxis-title'
  }
},
subtitle: {
  text: 'Maternal Deaths',
  offsetX: 30,
  style: {
    fontSize: '14px',
    cssClass: 'apexcharts-yaxis-title'
  }
}
}
new ApexCharts(document.querySelector(".spark3"), spark1).render();

var spark1 = {
chart: {
  id: 'sparkline1',
  group: 'sparklines',
  type: 'area',
  height: 160,
  sparkline: {
    enabled: true
  },
},
stroke: {
  curve: 'straight'
},
fill: {
  opacity: 1,
},
series: [{
  name: 'Neonatal Deaths',
  data: randomizeArray(sparklineData)
}],
labels: [...Array(24).keys()].map(n => `2023-01-0${n+1}`),
yaxis: {
  min: 0
},
xaxis: {
  type: 'datetime',
},
colors: ['#DCE6EC'],
title: {
  text: '0',
  offsetX: 30,
  style: {
    fontSize: '24px',
    cssClass: 'apexcharts-yaxis-title'
  }
},
subtitle: {
  text: 'Neonatal Deaths',
  offsetX: 30,
  style: {
    fontSize: '14px',
    cssClass: 'apexcharts-yaxis-title'
  }
}
}
new ApexCharts(document.querySelector(".spark4"), spark1).render();

var options = {
  series: [
  {
    name: "2019",
    data: [28, 29, 33, 36, 32, 32, 33,37,39,110,80,70]
  },
  {
    name: "2020",
    data: [12, 11, 14, 18, 17, 13, 13,38]
  },
  {
    name: "2021",
    data: [6, 24, 14, 17, 20, 23, 24,38]
  },
  {
    name: "2022",
    data: [20, 43, 50, 80, 55, 46, 21,27]
  }
],
  chart: {
  height: 430,
  type: 'line',
  dropShadow: {
    enabled: true,
    color: '#000',
    top: 18,
    left: 7,
    blur: 10,
    opacity: 0.2
  },
  toolbar: {
    show: false
  }
},
colors: ['#77B6EA', '#545454','#00FF00','hsl(184, 100%, 22%)'],
dataLabels: {
  enabled: true,
},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'Deliveries by Month',
  align: 'left'
},
grid: {
  borderColor: '#e7e7e7',
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
markers: {
  size: 1
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
  title: {
    text: 'Month'
  }
},
yaxis: {
  title: {
    text: 'Deliveries'
  },
  min: 20,
  max: 110
},
legend: {
  position: 'top',
  horizontalAlign: 'right',
  floating: true,
  offsetY: -25,
  offsetX: -5
}
};

var chart = new ApexCharts(document.querySelector(".chart1"), options);
chart.render();


var optionDonut = {
chart: {
    type: 'donut',
    width: '100%',
    height: 400
},
dataLabels: {
  enabled: false,
},
tooltip: {
  intersect: true,
  shared: false,
},
plotOptions: {
  pie: {
    customScale: 0.8,
    donut: {
      size: '75%',
    },
    offsetY: 20,
  },
  stroke: {
    colors: undefined
  }
},

colors: colorPalette,
title: {
  text: 'Deliveries by Gender',
  style: {
    fontSize: '18px'
  }
},
series: [2000,1232],
labels: ['Male', 'Female'],
legend: {
  position: 'left',
  offsetY: 80
}
}

var donut = new ApexCharts(
document.querySelector(".pie-chart"),
optionDonut
)
donut.render();

var donut = new ApexCharts(
document.querySelector("#donut"),
optionDonut
)
donut.render();


//function trigoSeries(cnt, strength) {
//var data = [];
//for (var i = 0; i < cnt; i++) {
   // data.push((Math.sin(i / strength) * (i / strength) + i / strength+1) * (strength*2));
//}

//return data;
//}

//var options = {
  //      series: [44, 55, 41, 17, 15],
        //chart: {
        //type: 'donut',
        //  height: 400
      //},
      //responsive: [{
        //breakpoint: 480,
        //options: {
          //chart: {
          //  width: 30
         // },
          //legend: {
           // position: 'bottom'
         // ..}
       // }
      //}]
      //};

     // var chart = new ApexCharts(document.querySelector(".chart3"), options);
      //chart.render();
    
    
var optionsArea = {
chart: {
  height: 340,
  type: 'area',
  zoom: {
    enabled: false
  },
},
stroke: {
  curve: 'straight'
},
colors: colorPalette,
series: [
  {
    name: "Blog",
    data: [{
      x: 0,
      y: 0
    }, {
      x: 4,
      y: 5
    }, {
      x: 5,
      y: 3
    }, {
      x: 9,
      y: 8
    }, {
      x: 14,
      y: 4
    }, {
      x: 18,
      y: 5
    }, {
      x: 25,
      y: 0
    }]
  },
  {
    name: "Social Media",
    data: [{
      x: 0,
      y: 0
    }, {
      x: 4,
      y: 6
    }, {
      x: 5,
      y: 4
    }, {
      x: 14,
      y: 8
    }, {
      x: 18,
      y: 5.5
    }, {
      x: 21,
      y: 6
    }, {
      x: 25,
      y: 0
    }]
  },
  {
    name: "External",
    data: [{
      x: 0,
      y: 0
    }, {
      x: 2,
      y: 5
    }, {
      x: 5,
      y: 4
    }, {
      x: 10,
      y: 11
    }, {
      x: 14,
      y: 4
    }, {
      x: 18,
      y: 8
    }, {
      x: 25,
      y: 0
    }]
  }
],
fill: {
  opacity: 1,
},
title: {
  text: 'Daily Visits Insights',
  align: 'left',
  style: {
    fontSize: '18px'
  }
},
markers: {
  size: 0,
  style: 'hollow',
  hover: {
    opacity: 5,
  }
},
tooltip: {
  intersect: true,
  shared: false,
},
xaxis: {
  tooltip: {
    enabled: false
  },
  labels: {
    show: false
  },
  axisTicks: {
    show: false
  }
},
yaxis: {
  tickAmount: 4,
  max: 12,
  axisBorder: {
    show: false
  },
  axisTicks: {
    show: false
  },
  labels: {
    style: {
      colors: '#78909c'
    }
  }
},
legend: {
  show: false
}
}

var chartArea = new ApexCharts(document.querySelector('.chart2'), optionsArea);
chartArea.render();
var optionDonut = {
chart: {
    type: 'donut',
    width: '100%',
    height: 400
},
dataLabels: {
  enabled: false,
},
tooltip: {
  intersect: true,
  shared: false,
},
plotOptions: {
  pie: {
    customScale: 0.8,
    donut: {
      size: '75%',
    },
    offsetY: 20,
  },
  stroke: {
    colors: undefined
  }
},
colors: colorPalette,
title: {
  text: 'Department Sales',
  style: {
    fontSize: '18px'
  }
},
series: [21, 23, 19, 14, 6],
labels: ['Clothing', 'Food Products', 'Electronics', 'Kitchen Utility', 'Gardening'],
legend: {
  position: 'left',
  offsetY: 80
}
}

var donut = new ApexCharts(
document.querySelector(".donut"),
optionDonut
)
donut.render();

var donut = new ApexCharts(
document.querySelector("#donut"),
optionDonut
)
donut.render();


function trigoSeries(cnt, strength) {
var data = [];
for (var i = 0; i < cnt; i++) {
    data.push((Math.sin(i / strength) * (i / strength) + i / strength+1) * (strength*2));
}

return data;
}

var options = {
        series: [44, 55, 41, 17, 15],
        chart: {
        type: 'donut',
          height: 400
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 30
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      };

      var chart = new ApexCharts(document.querySelector(".chart4"), options);
      chart.render();
    
    
  
