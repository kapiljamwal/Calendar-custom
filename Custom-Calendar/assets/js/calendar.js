const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('monthYear');
let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();
    const days = [];

    for (let i = firstDay; i > 0; i--) {
        days.push(`<li class="inactive">${prevLastDate - i + 1}</li>`);
    }

    for (let i = 1; i <= lastDate; i++) {
        const isActive = i === date.getDate() ? 'active' : '';
        days.push(`<li class="${isActive}">${i}</li>`);
    }

    daysContainer.innerHTML = days.join('');
    monthYear.innerHTML = `${monthNames[month]} ${year}`;
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar(currentDate);
});
