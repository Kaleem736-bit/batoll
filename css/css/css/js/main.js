// وظائف مشتركة بين جميع الصفحات

// تسجيل الخروج
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = "login.html";
        });
    }
    
    // القائمة المنسدلة للمستخدم
    const userProfile = document.querySelector('.user-profile');
    const dropdown = document.querySelector('.dropdown');
    
    if (userProfile) {
        userProfile.addEventListener('click', function(e) {
            dropdown.classList.toggle('show');
        });
    }
    
    // إغلاق القائمة المنسدلة عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (userProfile && !userProfile.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    // التنقل بين علامات التبويب
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab') + '-tab';
            
            // تحديث أزرار التبويب
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // إظهار محتوى التبويب
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
});
