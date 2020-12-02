Chart.defaults.global.maintainAspectRatio = false;

var ctx1 = document.getElementById('chart1').getContext('2d');
var ctx2 = document.getElementById('chart2').getContext('2d');
var ctx3 = document.getElementById('chart3').getContext('2d');

var chart1Data = {
    type: 'horizontalBar',
    data: {
        labels: [
            ["Aumenterà il numero", "di giornate per", "lavorare da remoto"], 
            ["Amplierà il numero", "di smart worker"],
            ["Includerà nel progetto", "figure professionali", "finora escluse"],
            ["Agirà sull'orario", "di lavoro"],
        ],
        datasets: [
            {
                label: "Grandi Imprese",
                backgroundColor: "#003459",
                data: [70,65,42, 17]
            },
            {
                label: "Pubblica amministrazione",
                backgroundColor: "#F6AE2D",
                data: [47, 72, 25, 14]
            },
        ]
    },
    options: {
        title: {
            display: true,
            text: ["L'evoluzione dello smart working", "per il new normal"],
            fontSize: 20,
            fontColor: "#003459",
        },
        responsive: true,
        barValueSpacing: 20,
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 15,
                    fontColor: "#003459",
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 15,
                    fontColor: "#003459",
                    callback: function (value) {
                        return value + '%'; // convert it to percentage
                    },
                }
            }]
        },
        legend: {
            labels: {
                fontSize: 15,
                fontColor: "#003459",
            }
        },
    },
};

var chart2Data = {
    type: 'bar',
    data: {
      labels: ["2019", "Lockdown Marzo 2020", "Da settembre 2020", "Stime post-ergemza"],
      datasets: [{
            label: 'Grandi Aziende',
            data: [570, 2110, 1670, 1720],
            backgroundColor: [
                "#003459",
                "#003459",
                "#003459",
                "#003459",
            ],
            borderWidth: 2
        },
        {
            label: 'PMI',
            data: [0, 1130, 890, 920],
            backgroundColor: [
                "#ff6600",
                "#ff6600",
                "#ff6600",
                "#ff6600",
            ],
            borderWidth: 2
        },
        {
            label: 'Microimprese',
            data: [0, 1500, 1180, 1230],
            backgroundColor: [
                "#F6AE2D",
                "#F6AE2D",
                "#F6AE2D",
                "#F6AE2D",
            ],
            borderWidth: 2
        },
        {
            label: 'Pubblica Amministrazione',
            data: [0, 1850, 1320, 1480],
            backgroundColor: [
                "#e5e5e5",
                "#e5e5e5",
                "#e5e5e5",
                "#e5e5e5",
            ],
            borderWidth: 2
        },
      ]
    },
    options: {
        title: {
            display: true,
            text: ["I lavoratori da remoto.", "Dati in migliaia di unità"],
            fontSize: 20,
            fontColor: "#003459",
        },
        scales: {
            yAxes: [{
            stacked: true,
            ticks: {
                beginAtZero: true,
                fontSize: 15,
                fontColor: "#003459",
            }
            }],
            xAxes: [{
            stacked: true,
            ticks: {
                beginAtZero: true,
                fontSize: 15,
                fontColor: "#003459",
            }
            }]
  
        },
        legend: {
            labels: {
                fontSize: 15,
                fontColor: "#003459",
            }
        },
    }
};


var chart3Data = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [38, 29, 12, 11, 10],
            backgroundColor: [
                "#003459",
                "#F6AE2D",
                "#ff6600",
                "#cc6600",
                "#e5e5e5",
            ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Cambierà solo le regole di utilizzo degli spazi',
            'Li differenzierà',
            'Li amplierà',
            'Non li modificherà',
            'Li ridurrà',
        ]
    },
    options: {
        title: {
            display: true,
            text: ["Il 51% delle grandi", "imprese sta valutando di", "riprogettare i propri spazi fisici"],
            fontSize: 20,
            fontColor: "#003459",
        },
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(2)+"%";
                    return percentage;
                },
                color: '#fff',
            }
        },
        legend: {
            labels: {
                fontSize: 15,
                fontColor: "#003459",
            }
        },
    }
};

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

var inView1 = false;
var inView2 = false;
var inView3 = false;

$(window).scroll(function() {
    if (isScrolledIntoView('#cw1')) {
        if (inView1) { return; }
        inView1 = true;
        new Chart(ctx1, chart1Data);
        new Chart(ctx2, chart2Data);
    }
    if (isScrolledIntoView('#cw2')) {
        if (inView2) { return; }
        inView2 = true;
        new Chart(ctx2, chart2Data);
    }
    if (isScrolledIntoView('#cw3')) {
        if (inView3) { return; }
        inView3 = true;
        new Chart(ctx3, chart3Data);
    }
});
