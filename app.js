async function init() {
    try {
        // راه‌اندازی وب اپ
        await eitaa.webApp.init();

        // بررسی عضویت
        checkChannelMembership();
    } catch (err) {
        console.error('خطا در init برنامه:', err);
    }
}

async function checkChannelMembership() {
    try {
        // دریافت اطلاعات کاربر
        const userData = await eitaa.webApp.getUserInfo();

        // بررسی عضویت در کانال Hamserr
        const isMember = await eitaa.webApp.isMemberOfChannel('Hamserr');

        if (!isMember) {
            // کاربر عضو نیست → پیام عضویت نشان بده
            document.getElementById('mainContent').style.display = 'none';
            document.getElementById('joinMessage').style.display = 'block';
        } else {
            // کاربر عضو هست → محتوای اصلی نمایش داده شود
            document.getElementById('mainContent').style.display = 'block';
            document.getElementById('joinMessage').style.display = 'none';
        }
    } catch (err) {
        console.error('خطا در بررسی عضویت:', err);
    }
}

// فراخوانی init هنگام باز شدن صفحه
window.onload = init;
