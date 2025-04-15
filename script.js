document.addEventListener("DOMContentLoaded", () => {
  // Гарантируем запуск Telegram WebApp
  Telegram.WebApp.ready();

  // Календарь
  flatpickr("#date", {
    dateFormat: "d.m.Y",
    locale: "ru",
    minDate: "today"
  });

  // Время
  flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
  });

  // Обработка формы
  const form = document.getElementById("event-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      title: document.getElementById("title").value,
      place: document.getElementById("place").value,
      comment: document.getElementById("comment").value
    };

    // Проверка полей
    if (!data.date || !data.time || !data.title || !data.place) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    // Отправка данных в Telegram WebApp
    Telegram.WebApp.sendData(JSON.stringify(data));
    Telegram.WebApp.close();
  });
});
