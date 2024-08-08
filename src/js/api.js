// api.js
export function fetchEvents() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            eventName: 'Монополия',
            eventHost: 'Алексей Иванов',
            eventDate: '2024-07-01',
            eventTime: '19:00',
            location: [44.952116, 34.102411],
            description: 'Замечательный вечер с живой музыкой в уютной атмосфере.',
            cafeName: 'Eaty',
            eventAdress: 'улица Пушкина, дом Колотушкина'
          },
          {
            id: 2,
            eventName: 'Мафия',
            eventHost: 'Мария Петрова',
            eventDate: '2024-07-05',
            eventTime: '15:00',
            location: [45.035653, 35.158237],
            description: 'Выставка современного искусства с участием молодых художников.',
            cafeName: 'Eaty',
            eventAdress: 'проспект Мира, 20'
          },
          {
            id: 3,
            eventName: 'Кешфлоу',
            eventHost: 'Ольга Сидорова',
            eventDate: '2024-07-10',
            eventTime: '11:00',
            location: [45.957217, 34.110682],
            description: 'Изучение основ кулинарии с профессиональными шеф-поварами.',
            cafeName: 'Eaty',
            eventAdress: 'улица Гастрономическая, 5'
          }
        ]);
      }, 1000);
    });
  }
  