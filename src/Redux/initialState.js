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
      address: "Adama Mickiewicza 12",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
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
          date: "2022/11/22",
          fromHour: "12:30",
          toHour: "13:30",
          court: 1,
          daily: true,
          duration: 2,
          alt: 'internal booking'
        },
        {
          id: 2,
          date: "2022/11/22",
          fromHour: "14:30",
          toHour: "15:00",
          court: 2,
          daily: false,
          duration: 2,
        },
        {
          id: 3,
          date: "2022/11/22",
          fromHour: "15:30",
          toHour: "16:00",
          court: 1,
          daily: true,
          duration: 2,
        },
      ],
    },
    {
      id: 2,
      propertyOfUser: 1,
      name: "TENNIS MAX",
      city: "Warsaw",
      address: "Adama Mickiewicza 12",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
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
          name: "booking",
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
    },
    {
      id: 3,
      propertyOfUser: 1,
      name: "TENNIS ACADEMY",
      city: "Katowice",
      address: "Adama Mickiewicza 12",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
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
          name: "booking",
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
    },
    {
      id: 4,
      propertyOfUser: 2,
      name: "SPORT CITY CENTER",
      city: "Gdansk",
      address: "Adama Mickiewicza 12",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
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
          name: "booking",
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
    },
    {
      id: 5,
      name: "TENNIS COURTS",
      city: "Cracow",
      address: "Adama Mickiewicza 12",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
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
          name: "booking",
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
    },
    {
      id: 6,
      name: "CLAY ACADEMY",
      city: "Warsaw",
      address: "Adama Mickiewicza 12",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
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
          name: "booking",
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
    },
    {
      id: 7,
      city: "Katowice",
      name: "HARD COURTS",
      address: "Adama Mickiewicza 12",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
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
          name: "booking",
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
    },
    {
      id: 8,
      name: "GRASS COURTS",
      city: "Gdansk",
      address: "Adama Mickiewicza 12",
      phoneNumber: "456-354-065",
      email: "court.example@example.com",
      website: "sportcentercracow.com",
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
          name: "booking",
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
    },
  ],
};

export default initialState;
