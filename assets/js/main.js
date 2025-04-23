/*the chart function that is used to provide detail about the chart such as data, color and so on*/
window.onload = function () {
  /*the function for the first chart*/
  const ctx = document.getElementById('barchart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'Java', 'JavaScript', 'Python'],
      datasets: [{
        label: 'Programming Skill Level',
        data: [70, 50, 50, 20, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    
    /*changing the color of font to white*/
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        },
        title: {
          display: true,
          text: 'Programming Skills',
          color: 'white' 
        }
      },
      scales: {
        x: {
          ticks: {
            color: 'white' 
          }
        },
        y: {
          ticks: {
            color: 'white' 
          }
        }
      }
    }
  });

  /*the function for the second chart*/
  const ctx2 = document.getElementById('barchart2').getContext('2d');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['English', 'Malay', 'Chinese'],
      datasets: [{
        label: 'Language Skill Level',
        data: [70, 70, 80],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
      }]
    },

    /*changing the color of font to white*/
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'white' 
          }
        },
        title: {
          display: true,
          text: 'Language Skills',
          color: 'white'
        }
      },
      scales: {
        x: {
          ticks: {
            color: 'white'
          }
        },
        y: {
          ticks: {
            color: 'white' 
          }
        }
      }
    }
  });
};
