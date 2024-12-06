// script.js

function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();

    // รูปแบบวันเดือนปี
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('th-TH', options);

    // เวลา (ถ้าต้องการ)
    const time = now.toLocaleTimeString('th-TH');

    // แสดงวันเดือนปีและเวลา
    dateTimeElement.textContent = `${formattedDate}, เวลา ${time}`;
}

// อัพเดตวันที่และเวลาเมื่อโหลดหน้า
updateDateTime();

// ตั้งค่าอัพเดตเวลาเป็นวินาที
setInterval(updateDateTime, 1000);
