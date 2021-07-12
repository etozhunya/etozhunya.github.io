// CHART
if ($('.global-content__core').attr('data-name') == 'Report') {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    let currentMonth = ' ' +monthNames[d.getMonth()]


    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2' + currentMonth, '4' + currentMonth, '6' + currentMonth, '8' + currentMonth, '10' + currentMonth, '12' + currentMonth,
             '14' + currentMonth, '16' + currentMonth, '18' + currentMonth, '20' + currentMonth, '22' + currentMonth, '24' + currentMonth, '26' + currentMonth, '28' + currentMonth, '30' + currentMonth],
            datasets: [{
                label: 'Scheduled 1', // Name the series
                data: [11, 22, 3, 14, 1, 29, 25, 4, 13, 11, 1, 19, 14, 7, 29], // Specify the data values array
                fill: false,
                borderColor: '#56E2F8', // Add custom color border (Line)
                backgroundColor: '#56E2F8', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
                      {
                label: 'Cancelled', // Name the series
                data: [1, 3, 4, 1, 4, 2, 1, 5, 2, 1, 5, 3, 2, 3, 7], // Specify the data values array
                fill: false,
                borderColor: '#FF5E5C', // Add custom color border (Line)
                backgroundColor: '#FF5E5C', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            },
                      {
                label: 'No show', // Name the series
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Specify the data values array
                fill: false,
                borderColor: '#FFA600', // Add custom color border (Line)
                backgroundColor: '#FFA600', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }
            ]
        },
        options: {
            responsive: true,
            "maintainAspectRatio": false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                        title: {
                            display: true,
                            text: 'Number of Appointments',
                            align: 'start',
                            color: '#6D6D6D',
                        },
                        legend: {
                                    display: true,
                                    position: 'top',
                                    align: 'center',
                                    labels: {
                                        font: {
                                            size: 14
                                        },
                                    }
                        },
                    }
        }
    });

   // if ($(window).width() < 768) {

   //  }
   
}