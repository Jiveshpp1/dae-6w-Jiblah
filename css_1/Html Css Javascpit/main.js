console.log("JavaScript is running");
document.addEventListener('DOMContentLoaded', () => { 
    const monthDisplay = document.getElementById('dateth');
    const calendarGrid = document.getElementById('m-cal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const eventModal = document.getElementById('event-modal');
    const modalDate = document.getElementById('modal-date');
    const eventTitleInput = document.getElementById('event-title');
    const saveEventBtn = document.getElementById('save');
    const closeBtn = document.getElementById('close');
    const eventList = document.getElementById('event-list');
    const reminderList = document.getElementById('reminder-list');

    saveEventBtn.addEventListener('click', saveEvent);
    closeBtn.addEventListener('click', closeModal);
    let currentDate = new Date();
    let selectedDate = null;
    let events = {}; 
    function getToday() {
    const t = new Date();
    return `${t.getFullYear()}-${t.getMonth()}-${t.getDate()}`;
    }
    function getTodaysEvents() {
    const todayKey = getToday();
    return events[todayKey] || [];
    }
    function renderReminders() {
    reminderList.innerHTML = '';
    getTodaysEvents().forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      reminderList.appendChild(li);
    });
  }

    console.log(currentDate);
    const mName =[
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
function renderCalendar(){
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    console.log(year, month); 
    const lastDay = new Date(year,month + 1,0).getDate();
    console.log(lastDay);
    const firstDayIndex = new Date(year,month,1).getDay();
    
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
        dayElement.addEventListener('click', () => {
            openModal(new Date(year,month,i));
        });
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayElement.classList.add('today');
        }
         const key = `${year}-${month}-${i}`;
        if (events[key] && events[key].length > 0) {
        const dot = document.createElement('span');
        dot.classList.add('event-dot');
        dayElement.appendChild(dot);
    }
    }
   
    
}
 saveEventBtn.addEventListener('click', () => {
    saveEvent();
    renderEvents();
    renderCalendar();
    renderReminders();
  });
prevBtn.addEventListener('click',() => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
    renderEvents();
    renderReminders();
});
nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
    renderEvents();
    renderReminders();
});
renderCalendar();
renderEvents();
renderReminders();
function openModal(date){
    selectedDate=date;
    modalDate.textContent = date.toDateString();
    eventModal.style.display = 'flex';
}
function closeModal(){
    eventModal.style.display = 'none';
    eventTitleInput.value = '';
}
function saveEvent(){
    const eTitle = eventTitleInput.value;
    if (eTitle && selectedDate){
        const dateStr =`${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
        if (!events[dateStr]){
            events[dateStr] = [];
        }
        events[dateStr].push(eTitle);
        closeModal();
        renderCalendar();
    }
}
function renderEvents() {
    eventList.innerHTML = '';
    const year  = currentDate.getFullYear();
    const month = currentDate.getMonth();
    for (const dateKey in events) {
      const [y, m, d] = dateKey.split('-').map(Number);
      if (y === year && m === month) {
        events[dateKey].forEach(title => {
          const li = document.createElement('li');
          li.textContent = `${d} ${mName[m]}: ${title}`;
          eventList.appendChild(li);
        });
      }
    }
  }
renderCalendar();
renderEvents();
renderReminders();
});