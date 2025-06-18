// وظائف لوحة التحكم
document.addEventListener('DOMContentLoaded', function() {
    // رسم بياني للاستهلاك الشهري
    const ctx = document.getElementById('consumptionChart').getContext('2d');
    if (ctx) {
        const consumptionChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
                datasets: [{
                    label: 'استهلاك الكهرباء (ك.و/س)',
                    data: [1200, 1100, 1300, 1250, 1400, 1240],
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 1)',
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
                        text: 'استهلاك الكهرباء خلال الأشهر الستة الماضية',
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'كيلو واط/ساعة'
                        }
                    }
                }
            }
        });
    }
    
    // زر تصدير PDF
    const exportBtn = document.querySelector('.btn-primary');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('سيتم تصدير التقرير قريبًا! هذه ميزة ستضاف في الإصدارات القادمة.');
        });
    }
});
