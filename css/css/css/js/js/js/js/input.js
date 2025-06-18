// وظائف إدخال بيانات الأجهزة
document.addEventListener('DOMContentLoaded', function() {
    const deviceForm = document.getElementById('deviceForm');
    
    if (deviceForm) {
        deviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع بيانات النموذج
            const deviceName = document.getElementById('deviceName').value;
            const power = document.getElementById('power').value;
            const hours = document.getElementById('hours').value;
            const quantity = document.getElementById('quantity').value;
            const notes = document.getElementById('notes').value;
            
            // حساب الاستهلاك اليومي
            const dailyConsumption = (power * hours * quantity / 1000).toFixed(2);
            
            // عرض رسالة نجاح
            alert(`تم حفظ بيانات الجهاز بنجاح!\nالاستهلاك اليومي: ${dailyConsumption} ك.و/س`);
            
            // إعادة تعيين النموذج
            this.reset();
        });
    }
    
    // حذف الأجهزة
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('هل أنت متأكد من رغبتك في حذف هذا الجهاز؟')) {
                const row = this.closest('tr');
                row.remove();
            }
        });
    });
});
