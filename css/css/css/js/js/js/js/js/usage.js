// وظائف صفحة تحليل الاستهلاك
document.addEventListener('DOMContentLoaded', function() {
    // رسم بياني يومي
    const dailyCtx = document.getElementById('dailyChart').getContext('2d');
    if (dailyCtx) {
        const dailyChart = new Chart(dailyCtx, {
            type: 'bar',
            data: {
                labels: ['12:00 ص', '3:00 ص', '6:00 ص', '9:00 ص', '12:00 م', '3:00 م', '6:00 م', '9:00 م'],
                datasets: [{
                    label: 'استهلاك اليوم (ك.و/س)',
                    data: [5, 3, 8, 15, 25, 30, 20, 10],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'استهلاك الكهرباء خلال اليوم',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // رسم بياني أسبوعي
    const weeklyCtx = document.getElementById('weeklyChart').getContext('2d');
    if (weeklyCtx) {
        const weeklyChart = new Chart(weeklyCtx, {
            type: 'line',
            data: {
                labels: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
                datasets: [{
                    label: 'استهلاك الأسبوع (ك.و/س)',
                    data: [45, 52, 48, 60, 55, 58, 50],
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'استهلاك الكهرباء خلال الأسبوع',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // رسم بياني شهري
    const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
    if (monthlyCtx) {
        const monthlyChart = new Chart(monthlyCtx, {
            type: 'bar',
            data: {
                labels: Array.from({length: 30}, (_, i) => (i + 1).toString()),
                datasets: [{
                    label: 'استهلاك الشهر (ك.و/س)',
                    data: Array.from({length: 30}, () => Math.floor(Math.random() * 50) + 10),
                    backgroundColor: 'rgba(155, 89, 182, 0.7)',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'استهلاك الكهرباء خلال الشهر',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    
    // رسم بياني سنوي
    const yearlyCtx = document.getElementById('yearlyChart').getContext('2d');
    if (yearlyCtx) {
        const yearlyChart = new Chart(yearlyCtx, {
            type: 'line',
            data: {
                labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                datasets: [{
                    label: 'استهلاك السنة (ك.و/س)',
                    data: [1200, 1100, 1300, 1250, 1400, 1240, 1500, 1600, 1450, 1350, 1300, 1400],
                    backgroundColor: 'rgba(241, 196, 15, 0.2)',
                    borderColor: 'rgba(241, 196, 15, 1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'استهلاك الكهرباء خلال السنة',
                        font: {
                            size: 16
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
