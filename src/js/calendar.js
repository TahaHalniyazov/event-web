import moment from "moment"
let dates = [
    {
      id: 0,
      name: "Янв",
      days: 31
    },
    {
      id: 1,
      name: "Фев",
      days: 28
    },
    {
      id: 2,
      name: "Март",
      days: 31
    },
    {
      id: 3,
      name: "Апр",
      days: 30
    },
    {
      id: 4,
      name: "Май",
      days: 31
    },
    {
      id: 5,
      name: "Июнь",
      days: 30
    },
    {
      id: 6,
      name: "Июль",
      days: 31
    },
    {
      id: 7,
      name: "Авг",
      days: 31
    },
    {
      id: 8,
      name: "Сен",
      days: 30
    },
    {
      id: 9,
      name: "Окт",
      days: 31
    },
    {
      id: 10,
      name: "Ноя",
      days: 30
    },
    {
      id: 11,
      name: "Дек",
      days: 31
    },
  ]

  

  function allDates(dates) {
    let calendar = [];
    let year = moment().format('YYYY');
    console.log("year", year);
    let leap_year = year % 4;
    if (leap_year == 0) {dates[1].days = 29}
    dates.forEach(date => {
      for (let i = 1; i <= date.days; i++) {
        calendar.push({
          id: date.id,
          day: i,
          name: date.name
        });
      }
    })    

    return calendar;
}


export default allDates(dates);
