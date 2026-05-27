/* ==========================================================================
   Gourmet Haven - Core JavaScript Elements
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // تغيير شكل الأيقونة من قائمة إلى علامة X عند الفتح
            const icon = menuToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
                // تحسين حركة القائمة بالـ CSS مؤقتاً عند تفعيل الكلاس
                navbar.style.display = 'block';
                navbar.style.position = 'absolute';
                navbar.style.top = '100%';
                navbar.style.left = '0';
                navbar.style.width = '100%';
                navbar.style.backgroundColor = '#1a1a1a';
                navbar.style.padding = '20px';
                navbar.querySelector('.nav-list').style.flexDirection = 'column';
                navbar.querySelector('.nav-list').style.gap = '15px';
            } else {
                icon.className = 'fa-solid fa-bars';
                navbar.style.display = '';
            }
        });
    }

    // 2. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // إزالة الكلاس النشط من جميع الروابط وإضافته للرابط الحالي
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            // إغلاق قائمة الموبايل تلقائياً بعد الضغط على أي رابط
            if (navbar && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                if (menuToggle) {
                    menuToggle.querySelector('i').className = 'fa-solid fa-bars';
                    navbar.style.display = '';
                }
            }
        });
    });

    // 3. Dynamic Header Shadow on Scroll
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '12px 0';
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        }
    });

});