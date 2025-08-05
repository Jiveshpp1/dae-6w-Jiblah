console.log("JavaScript is running");
document.addEventListener('DOMContentLoaded', () => { 
    const monthDisplay = document.getElementById('dateth');
    const calendarGrid = document.getElementById('m-cal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentDate = new Date();
    console.log(currentDate);
function renderCalendar(){
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    console.log(year, month); 
    const lastDay = new Date(year,month + 1,0).getDate();
    console.log(lastDay);
    const firstDayIndex = new Date(year,month,1).getDay();
    const mName =[
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    document.getElementById('dateth').innerText = `${mName[month]} ${year}`;
    calendarGrid.querySelectorAll('.cal-date, .other-month, .today').forEach(el => el.remove());
    
    for (let i = 0; i < firstDayIndex; i++) {
        const blank = document.createElement('div');
        blank.classList.add('other-month'); // use gray or blank style
        calendarGrid.appendChild(blank);
    }
    for (let i = 1; i <= lastDay; i++){
        const dayElement = document.createElement('div');
        dayElement.classList.add('cal-date')
        dayElement.textContent = i;
        calendarGrid.appendChild(dayElement);
        const today = new Date();
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayElement.classList.add('today');
        }
    }
    
}
prevBtn.addEventListener('click',() => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});
nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});
renderCalendar();

});