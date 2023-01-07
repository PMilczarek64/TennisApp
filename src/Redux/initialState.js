const initialState = {
  users: [
    {
      id: 1,
      userName: "user",
      password: "user",
      loggedInfo: false,
    },
    {
      id: 2,
      userName: "user2",
      password: "user2",
      loggedInfo: false,
    },
  ],
  cities: ["Cracow", "Warsaw", "Katowice", "Gdansk"],
  objects: [
    {
      id: 1,
      propertyOfUser: 2,
      name: "SPORT Center",
      city: "Cracow",
      address: "Rakowicka 45",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
      logo: 'sport-center-logo.png',
      priceListCourt: [
        {
          header: "WINTER/SUMMER",
          headerDescription: "from October 1, 2022",
          weekdays: [
            {
              id: 1,
              time: "Morning",
              hours: "07:00-14:00",
              price: "100",
            },
            {
              id: 2,
              time: "afternoon",
              hours: "14:00-22:00",
              price: "120",
            },
          ],
          weekend: [
            {
              id: 3,
              time: "whole-day",
              hours: "07:00-22:00",
              price: "110",
            },
          ],
        },
      ],
      contentData: [
        {
          id: 1,
          name: "Info",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10.0,
          closingHour: 20.0,
        },
        {
          id: 2,
          name: "Gallery",
          photos: [],
        },
        {
          id: 3,
          name: "Booking",
          busyTerms: [],
        },
      ],
      courts: [
        {
          id: 1,
          type: "Clay",
          doubles: "yes",
        },
        {
          id: 2,
          type: "Clay",
          doubles: "yes",
        },
      ],
      events: [
        {
          id: 1,
          startDate: "2022-12-03T12:30:00+01:00",
          endDate: "2022-12-03T13:30:00+01:00",
          court: 1,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
        {
          id: 2,
          startDate: "2022-12-03T15:30:00+01:00",
          endDate: "2022-12-03T16:00:00+01:00",
          court: 1,
          repeat: false,
          name: 'Adam Turek',
          phone: '654-456-654'
        },
        {
          id: 3,
          startDate: "2022-12-03T14:30:00+01:00",
          endDate: "2022-12-03T15:00:00+01:00",
          court: 2,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
      ],
    },
    {
      id: 2,
      propertyOfUser: 1,
      name: "TENNIS MAX",
      city: "Warsaw",
      address: "Towarowa 132",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
      logo: 'tennis-max-logo.png',
      priceListCourt: [
        {
          header: "WINTER/SUMMER",
          headerDescription: "from October 1, 2022",
          weekdays: [
            {
              id: 1,
              time: "Morning",
              hours: "07:00-14:00",
              price: "100",
            },
            {
              id: 2,
              time: "afternoon",
              hours: "14:00-22:00",
              price: "120",
            },
          ],
          weekend: [
            {
              id: 3,
              time: "whole-day",
              hours: "07:00-22:00",
              price: "110",
            },
          ],
        },
      ],
      contentData: [
        {
          id: 1,
          name: "Info",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingHour: 20,
        },
        {
          id: 2,
          name: "Gallery",
          photos: [],
        },
        {
          id: 3,
          name: "Booking",
          busyTerms: [],
        },
      ],
      courts: [
        {
          id: 1,
          type: "Clay",
          doubles: "yes",
        },
        {
          id: 2,
          type: "hard",
          doubles: "yes",
        },
        {
          id: 3,
          type: "grass",
          doubles: "yes",
        },
      ],
      events: [
        {
          id: 1,
          startDate: "2022-12-03T12:30:00+01:00",
          endDate: "2022-12-03T13:30:00+01:00",
          court: 1,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
        {
          id: 2,
          startDate: "2022-12-03T15:30:00+01:00",
          endDate: "2022-12-03T16:00:00+01:00",
          court: 1,
          repeat: false,
          name: 'Adam Turek',
          phone: '654-456-654'
        },
        {
          id: 3,
          startDate: "2022-12-03T14:30:00+01:00",
          endDate: "2022-12-03T15:00:00+01:00",
          court: 2,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
      ],
    },
    {
      id: 3,
      propertyOfUser: 1,
      name: "TENNIS ACADEMY",
      city: "Katowice",
      address: "sportowa 8B",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
      logo: 'tennis-academy-logo.png',
      priceListCourt: [
        {
          header: "WINTER/SUMMER",
          headerDescription: "from October 1, 2022",
          weekdays: [
            {
              id: 1,
              time: "Morning",
              hours: "07:00-14:00",
              price: "100",
            },
            {
              id: 2,
              time: "afternoon",
              hours: "14:00-22:00",
              price: "120",
            },
          ],
          weekend: [
            {
              id: 3,
              time: "whole-day",
              hours: "07:00-22:00",
              price: "110",
            },
          ],
        },
      ],
      contentData: [
        {
          id: 1,
          name: "Info",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingHour: 20,
        },
        {
          id: 2,
          name: "Gallery",
          photos: [],
        },
        {
          id: 3,
          name: "Booking",
          busyTerms: [],
        },
      ],
      courts: [
        {
          id: 1,
          type: "Clay",
          doubles: "yes",
        },
        {
          id: 2,
          type: "hard",
          doubles: "yes",
        },
      ],
      events: [
        {
          id: 1,
          startDate: "2022-12-03T12:30:00+01:00",
          endDate: "2022-12-03T13:30:00+01:00",
          court: 1,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
        {
          id: 2,
          startDate: "2022-12-03T15:30:00+01:00",
          endDate: "2022-12-03T16:00:00+01:00",
          court: 1,
          repeat: false,
          name: 'Adam Turek',
          phone: '654-456-654'
        },
        {
          id: 3,
          startDate: "2022-12-03T14:30:00+01:00",
          endDate: "2022-12-03T15:00:00+01:00",
          court: 2,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
      ],
      
    },
    {
      id: 4,
      propertyOfUser: 2,
      name: "SPORT CITY CENTER",
      city: "Gdansk",
      address: "Warszawska 322",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
      logo: 'sport-city-center-logo.png',
      priceListCourt: [
        {
          header: "WINTER/SUMMER",
          headerDescription: "from October 1, 2022",
          weekdays: [
            {
              id: 1,
              time: "Morning",
              hours: "07:00-14:00",
              price: "100",
            },
            {
              id: 2,
              time: "afternoon",
              hours: "14:00-22:00",
              price: "120",
            },
          ],
          weekend: [
            {
              id: 3,
              time: "whole-day",
              hours: "07:00-22:00",
              price: "110",
            },
          ],
        },
      ],
      contentData: [
        {
          id: 1,
          name: "Info",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingHour: 20,
        },
        {
          id: 2,
          name: "Gallery",
          photos: [],
        },
        {
          id: 3,
          name: "Booking",
          busyTerms: [],
        },
      ],
      courts: [
        {
          id: 1,
          type: "Clay",
          doubles: "yes",
        },
        {
          id: 2,
          type: "Clay",
          doubles: "yes",
        },
      ],
      events: [
        {
          id: 1,
          startDate: "2022-12-03T12:30:00+01:00",
          endDate: "2022-12-03T13:30:00+01:00",
          court: 1,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
        {
          id: 2,
          startDate: "2022-12-03T15:30:00+01:00",
          endDate: "2022-12-03T16:00:00+01:00",
          court: 1,
          repeat: false,
          name: 'Adam Turek',
          phone: '654-456-654'
        },
        {
          id: 3,
          startDate: "2022-12-03T14:30:00+01:00",
          endDate: "2022-12-03T15:00:00+01:00",
          court: 2,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
      ],
    },
    {
      id: 5,
      name: "TENNIS COURTS",
      city: "Cracow",
      address: "Szpitalna 92",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
      logo: 'tennis-courts-logo.png',
      priceListCourt: [
        {
          header: "WINTER/SUMMER",
          headerDescription: "from October 1, 2022",
          weekdays: [
            {
              id: 1,
              time: "Morning",
              hours: "07:00-14:00",
              price: "100",
            },
            {
              id: 2,
              time: "afternoon",
              hours: "14:00-22:00",
              price: "120",
            },
          ],
          weekend: [
            {
              id: 3,
              time: "whole-day",
              hours: "07:00-22:00",
              price: "110",
            },
          ],
        },
      ],
      contentData: [
        {
          id: 1,
          name: "Info",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingHour: 20,
        },
        {
          id: 2,
          name: "Gallery",
          photos: [],
        },
        {
          id: 3,
          name: "Booking",
          busyTerms: [],
        },
      ],
      courts: [
        {
          id: 1,
          type: "Clay",
          doubles: "yes",
        },
        {
          id: 2,
          type: "Clay",
          doubles: "yes",
        },
      ],
      events: [
        {
          id: 1,
          startDate: "2022-12-03T12:30:00+01:00",
          endDate: "2022-12-03T13:30:00+01:00",
          court: 1,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
        {
          id: 2,
          startDate: "2022-12-03T15:30:00+01:00",
          endDate: "2022-12-03T16:00:00+01:00",
          court: 1,
          repeat: false,
          name: 'Adam Turek',
          phone: '654-456-654'
        },
        {
          id: 3,
          startDate: "2022-12-03T14:30:00+01:00",
          endDate: "2022-12-03T15:00:00+01:00",
          court: 2,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
      ],
    },
    {
      id: 6,
      name: "CLAY ACADEMY",
      city: "Warsaw",
      address: "Centralna 50",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
      logo: 'clay-academy-logo.png',
      priceListCourt: [
        {
          header: "WINTER/SUMMER",
          headerDescription: "from October 1, 2022",
          weekdays: [
            {
              id: 1,
              time: "Morning",
              hours: "07:00-14:00",
              price: "100",
            },
            {
              id: 2,
              time: "afternoon",
              hours: "14:00-22:00",
              price: "120",
            },
          ],
          weekend: [
            {
              id: 3,
              time: "whole-day",
              hours: "07:00-22:00",
              price: "110",
            },
          ],
        },
      ],
      contentData: [
        {
          id: 1,
          name: "Info",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingHour: 20,
        },
        {
          id: 2,
          name: "Gallery",
          photos: [],
        },
        {
          id: 3,
          name: "Booking",
          busyTerms: [],
        },
      ],
      courts: [
        {
          id: 1,
          type: "Clay",
          doubles: "yes",
        },
        {
          id: 2,
          type: "Clay",
          doubles: "yes",
        },
      ],
      events: [
        {
          id: 1,
          startDate: "2022-12-03T12:30:00+01:00",
          endDate: "2022-12-03T13:30:00+01:00",
          court: 1,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
        {
          id: 2,
          startDate: "2022-12-03T15:30:00+01:00",
          endDate: "2022-12-03T16:00:00+01:00",
          court: 1,
          repeat: false,
          name: 'Adam Turek',
          phone: '654-456-654'
        },
        {
          id: 3,
          startDate: "2022-12-03T14:30:00+01:00",
          endDate: "2022-12-03T15:00:00+01:00",
          court: 2,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
      ],
    },
    {
      id: 7,
      city: "Katowice",
      name: "HARD COURTS",
      address: "Mariacka 122",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
      logo: 'hard-courts-logo.png',
      priceListCourt: [
        {
          header: "WINTER/SUMMER",
          headerDescription: "from October 1, 2022",
          weekdays: [
            {
              id: 1,
              time: "Morning",
              hours: "07:00-14:00",
              price: "100",
            },
            {
              id: 2,
              time: "afternoon",
              hours: "14:00-22:00",
              price: "120",
            },
          ],
          weekend: [
            {
              id: 3,
              time: "whole-day",
              hours: "07:00-22:00",
              price: "110",
            },
          ],
        },
      ],
      contentData: [
        {
          id: 1,
          name: "Info",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingHour: 20,
        },
        {
          id: 2,
          name: "Gallery",
          photos: [],
        },
        {
          id: 3,
          name: "Booking",
          busyTerms: [],
        },
      ],
      courts: [
        {
          id: 1,
          type: "Clay",
          doubles: "yes",
        },
        {
          id: 2,
          type: "Clay",
          doubles: "yes",
        },
      ],
      events: [
        {
          id: 1,
          startDate: "2022-12-03T12:30:00+01:00",
          endDate: "2022-12-03T13:30:00+01:00",
          court: 1,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
        {
          id: 2,
          startDate: "2022-12-03T15:30:00+01:00",
          endDate: "2022-12-03T16:00:00+01:00",
          court: 1,
          repeat: false,
          name: 'Adam Turek',
          phone: '654-456-654'
        },
        {
          id: 3,
          startDate: "2022-12-03T14:30:00+01:00",
          endDate: "2022-12-03T15:00:00+01:00",
          court: 2,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
      ],
    },
    {
      id: 8,
      name: "GRASS COURTS",
      city: "Gdansk",
      address: "Plażowa 36",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
      logo: 'grass-courts-logo.png',
      priceListCourt: [
        {
          header: "WINTER/SUMMER",
          headerDescription: "from October 1, 2022",
          weekdays: [
            {
              id: 1,
              time: "Morning",
              hours: "07:00-14:00",
              price: "100",
            },
            {
              id: 2,
              time: "afternoon",
              hours: "14:00-22:00",
              price: "120",
            },
          ],
          weekend: [
            {
              id: 3,
              time: "whole-day",
              hours: "07:00-22:00",
              price: "110",
            },
          ],
        },
      ],
      contentData: [
        {
          id: 1,
          name: "Info",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingHour: 20,
        },
        {
          id: 2,
          name: "Gallery",
          photos: [],
        },
        {
          id: 3,
          name: "Booking",
          busyTerms: [],
        },
      ],
      courts: [
        {
          id: 1,
          type: "Clay",
          doubles: "yes",
        },
        {
          id: 2,
          type: "Clay",
          doubles: "yes",
        },
      ],
      events: [
        {
          id: 1,
          startDate: "2022-12-03T15:30:00+01:00",
          endDate: "2022-12-03T17:30:00+01:00",
          court: 1,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
        {
          id: 2,
          startDate: "2022-12-03T15:30:00+01:00",
          endDate: "2022-12-03T16:00:00+01:00",
          court: 1,
          repeat: false,
          name: 'Adam Turek',
          phone: '654-456-654'
        },
        {
          id: 3,
          startDate: "2022-12-03T10:30:00+01:00",
          endDate: "2022-12-03T15:00:00+01:00",
          court: 2,
          repeat: true,
          name: 'rezerwacja wewnętrzna'
        },
      ],
    },
  ],
};

export default initialState;
