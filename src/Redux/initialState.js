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
  players: [
    {
      id: 1,
      name: 'Barbara',
      userId: '',
      city: 'Kraków',
      preferedCourt: '',
      ntrp: '4.5',
      age: 28,
      height: '1.72m',
      email: 'barbara@example.com',
      shortDescription: 'I work in corpo on a daily basis, I am looking for a training partner',
      photo: "https://images.pexels.com/photos/1772724/pexels-photo-1772724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: 'Mark',
      userId: '',
      city: 'Władysławowo',
      preferedCourt: '',
      ntrp: '4.0',
      age: 26,
      height: '1.79m',
      email: 'mark@example.com',
      shortDescription: 'I study physical education, I love effort and I am looking for challenges',
      photo: "https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: 'Michonne',
      userId: '',
      city: 'Bielsko-Biała',
      preferedCourt: '',
      ntrp: '5.0',
      age: 20,
      height: '1.79m',
      email: 'michonne@example.com',
      shortDescription: 'I am looking for someone to train with a similar level of NTRP',
      photo: "https://images.pexels.com/photos/12189140/pexels-photo-12189140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: 'Alexa',
      userId: '',
      city: 'Poznań',
      preferedCourt: '',
      ntrp: '3.5',
      age: 17,
      height: '1.70m',
      email: 'alexa@example.com',
      shortDescription: "I'm a tennis freak, I'm looking for people who don't like rest too much. Evening hours only",
      photo: "https://images.pexels.com/photos/5409085/pexels-photo-5409085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      name: 'Stan',
      userId: '',
      city: 'Katowice',
      preferedCourt: '',
      ntrp: '2.0',
      age: 33,
      height: '1.81m',
      email: 'stan@example.com',
      shortDescription: "I am a lover of the 70s. I am looking for someone to go to tennis classes with",
      photo: "https://images.pexels.com/photos/5739221/pexels-photo-5739221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 6,
      name: 'Jeremiah',
      userId: '',
      city: 'Gdynia',
      preferedCourt: '',
      ntrp: '3.0',
      age: 72,
      height: '1.76m',
      email: 'jeremy@example.com',
      shortDescription: "I am an experienced tennis amateur, looking for people of similar age to play",
      photo: "https://images.pexels.com/photos/6292760/pexels-photo-6292760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 7,
      name: 'Jacob',
      userId: '',
      city: 'Los Angeles',
      preferedCourt: '',
      ntrp: '4.0',
      age: 28,
      height: '1.82m',
      email: 'jacob28@example.com',
      shortDescription: "I especially like to play on clay courts. If you are too - call me! I am available all week ;)",
      photo: "https://images.pexels.com/photos/5837026/pexels-photo-5837026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 8,
      name: 'Barbara',
      userId: '',
      city: 'Miami',
      preferedCourt: '',
      ntrp: '3.5',
      age: 36,
      height: '1.75m',
      email: 'barbara@example.com',
      shortDescription: "I'm left-handed and like a one-handed backhand. I want to prepare for amateur competitions",
      photo: "https://images.pexels.com/photos/10145713/pexels-photo-10145713.jpeg?auto=compress&cs=tinysrgb&w=600"
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
          closingHour: 23.5,
        },
        {
          id: 2,
          name: "Gallery",
          photos: [
            {
              "text": "Description of image is here image1",
              "link": "https://images.pexels.com/photos/1025346/pexels-photo-1025346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              "text": "Description of image is here image2",
              "link": "https://images.pexels.com/photos/8224676/pexels-photo-8224676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              "text": "Description of image is here image3",
              "link": "https://images.pexels.com/photos/8224727/pexels-photo-8224727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              "text": "Description of image is here image4",
              "link": "https://images.pexels.com/photos/6292463/pexels-photo-6292463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
             {
              "text": "Description of image is here image1",
              "link": "https://images.pexels.com/photos/8224683/pexels-photo-8224683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              "text": "Description of image is here image2",
              "link": "https://images.pexels.com/photos/8224434/pexels-photo-8224434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              "text": "Description of image is here image3",
              "link": "https://images.pexels.com/photos/1407818/pexels-photo-1407818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            },
            {
              "text": "Description of image is here image4",
              "link": "https://images.pexels.com/photos/2568551/pexels-photo-2568551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          ],
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
