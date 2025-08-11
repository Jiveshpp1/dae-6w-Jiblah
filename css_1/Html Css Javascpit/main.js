console.log('initial js load');

// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js"; // fixed
console.log('import');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQTllvhfaCWrEPxgZsMV7yy6t1jhOTQQQ",
  authDomain: "calendarpreject-thingy.firebaseapp.com",
  projectId: "calendarpreject-thingy",
  storageBucket: "calendarpreject-thingy.firebasestorage.app",
  messagingSenderId: "885696417935",
  appId: "1:885696417935:web:463af5e32b67a55554a0fa",
  measurementId: "G-XK7FLC21XW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized");

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

    saveEventBtn.addEventListener('click', () => {
      saveEvent();
      renderEvents();
      renderCalendar();
      renderReminders();
    });

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

    const mName = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function renderCalendar(){
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const lastDay = new Date(year,month + 1,0).getDate();
        const firstDayIndex = new Date(year,month,1).getDay();

        monthDisplay.innerText = `${mName[month]} ${year}`;

        calendarGrid.querySelectorAll('.cal-date, .other-month, .today').forEach(el => el.remove());

        for (let i = 0; i < firstDayIndex; i++) {
            const blank = document.createElement('div');
            blank.classList.add('other-month');
            calendarGrid.appendChild(blank);
        }

        for (let i = 1; i <= lastDay; i++){
            const dayElement = document.createElement('div');
            dayElement.classList.add('cal-date');
            dayElement.textContent = i;
            calendarGrid.appendChild(dayElement);

            dayElement.addEventListener('click', () => {
                openModal(new Date(year, month, i));
            });

            const today = new Date();
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

    prevBtn.addEventListener('click', () => {
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

    function openModal(date){
        selectedDate = date;
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
            const dateStr = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
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
