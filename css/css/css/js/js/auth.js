// وظائف تسجيل الدخول
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // تسجيل الدخول الافتراضي لأغراض العرض
            if(username && password) {
                // تخزين حالة تسجيل الدخول في localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                
                // توجيه إلى لوحة التحكم
                window.location.href = "dashboard.html";
            } else {
                alert('الرجاء إدخال اسم المستخدم وكلمة المرور');
            }
        });
    }
    
    // التحقق من حالة تسجيل الدخول
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    if (isLoggedIn === 'true' && currentPage === 'login.html') {
        window.location.href = "dashboard.html";
    } else if (isLoggedIn !== 'true' && currentPage !== 'login.html') {
        window.location.href = "login.html";
    }
    
    // تعيين اسم المستخدم في لوحة التحكم
    if (isLoggedIn === 'true') {
        const username = localStorage.getItem('username');
        const usernameElements = document.querySelectorAll('.user-profile span');
        
        if (usernameElements.length > 0 && username) {
            usernameElements[0].textContent = username;
        }
    }
});
