const initialState = {
  cities: ['Cracow', 'Warsaw', 'Katowice', 'Gdansk'],
  objects: [
    {
      id: 1,
      name: 'SPORT Center',
      city: 'Cracow',
      address: 'Adama Mickiewicza 12',
      contentData: [
        {
          id: 1,
          name: 'Info',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingTime: 20,
        },
        {
          id: 2,
          name: 'Gallery',
          photos: [],
        },
        {
          id: 3,
          name: 'booking',
          busyTerms: [],
        },
      ],
      courts: [
        {
          id: 1,
          type: 'Clay',
          doubles: 'yes'
        },
        {
          id: 2,
          type: 'Clay',
          doubles: 'yes'
        },
      ],
    },
    {
      id: 2,
      name: 'TENNIS MAX',
      city: 'Warsaw',
      address: 'Adama Mickiewicza 12',
      contentData: [
        {
          id: 1,
          name: 'Info',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingTime: 20,
        },
        {
          id: 2,
          name: 'Gallery',
          photos: [],
        },
        {
          id: 3,
          name: 'booking',
          busyTerms: [],
        },
      ],
    },
    {
      id: 3,
      name: 'TENNIS ACADEMY',
      city: 'Katowice',
      address: 'Adama Mickiewicza 12',
      contentData: [
        {
          id: 1,
          name: 'Info',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingTime: 20,
        },
        {
          id: 2,
          name: 'Gallery',
          photos: [],
        },
        {
          id: 3,
          name: 'booking',
          busyTerms: [],
        },
      ],
    },
    {
      id: 4,
      name: 'SPORT CITY CENTER',
      city: 'Gdansk',
      address: 'Adama Mickiewicza 12',
      contentData: [
        {
          id: 1,
          name: 'Info',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingTime: 20,
        },
        {
          id: 2,
          name: 'Gallery',
          photos: [],
        },
        {
          id: 3,
          name: 'booking',
          busyTerms: [],
        },
      ],
    },
    {
      id: 5,
      name: 'TENNIS COURTS',
      city: 'Cracow',
      address: 'Adama Mickiewicza 12',
      contentData: [
        {
          id: 1,
          name: 'Info',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingTime: 20,
        },
        {
          id: 2,
          name: 'Gallery',
          photos: [],
        },
        {
          id: 3,
          name: 'booking',
          busyTerms: [],
        },
      ],
    },
    {
      id: 6,
      name: 'CLAY ACADEMY',
      city: 'Warsaw',
      address: 'Adama Mickiewicza 12',
      contentData: [
        {
          id: 1,
          name: 'Info',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingTime: 20,
        },
        {
          id: 2,
          name: 'Gallery',
          photos: [],
        },
        {
          id: 3,
          name: 'booking',
          busyTerms: [],
        },
      ],
    },
    {
      id: 7,
      name: 'HARD COURTS',
      city: 'Katowice',
      address: 'Adama Mickiewicza 12',
      contentData: [
        {
          id: 1,
          name: 'Info',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingTime: 20,
        },
        {
          id: 2,
          name: 'Gallery',
          photos: [],
        },
        {
          id: 3,
          name: 'booking',
          busyTerms: [],
        },
      ],
    },
    {
      id: 8,
      name: 'GRASS COURTS',
      city: 'Gdansk',
      address: 'Adama Mickiewicza 12',
      contentData: [
        {
          id: 1,
          name: 'Info',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          openingHour: 10,
          closingTime: 20,
        },
        {
          id: 2,
          name: 'Gallery',
          photos: [],
        },
        {
          id: 3,
          name: 'booking',
          busyTerms: [],
        },
      ],
    },
  ]
}

export default initialState;