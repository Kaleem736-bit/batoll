// وظائف لوحة المشرف
document.addEventListener('DOMContentLoaded', function() {
    // رسم بياني للمشرف
    const adminCtx = document.getElementById('adminChart').getContext('2d');
    if (adminCtx) {
        const adminChart = new Chart(adminCtx, {
            type: 'bar',
            data: {
                labels: ['المستخدم 1', 'المستخدم 2', 'المستخدم 3', 'المستخدم 4', 'المستخدم 5'],
                datasets: [{
                    label: 'استهلاك الشهر (ك.و/س)',
                    data: [1240, 980, 1500, 1100, 1350],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(46, 204, 113, 0.7)',
                        'rgba(231, 76, 60, 0.7)',
                        'rgba(241, 196, 15, 0.7)',
                        'rgba(155, 89, 182, 0.7)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'استهلاك المستخدمين لهذا الشهر',
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
    
    // حذف المستخدمين
    document.querySelectorAll('.admin-table .btn-delete').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('هل أنت متأكد من رغبتك في حذف هذا المستخدم؟')) {
                const row = this.closest('tr');
                row.remove();
            }
        });
    });
    
    // حفظ إعدادات النظام
    const saveSettingsBtn = document.querySelector('.admin-card .btn-success');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            const limit = document.querySelector('input[type="number"]').value;
            alert(`تم حفظ الإعدادات بنجاح!\nحد الاستهلاك الشهري: ${limit} ك.و/س`);
        });
    }
    
    // زر تنزيل التقرير
    const downloadReportBtn = document.querySelector('.admin-card .btn-primary');
    if (downloadReportBtn) {
        downloadReportBtn.addEventListener('click', function() {
            alert('سيتم تنزيل التقرير قريبًا! هذه ميزة ستضاف في الإصدارات القادمة.');
        });
    }
});
