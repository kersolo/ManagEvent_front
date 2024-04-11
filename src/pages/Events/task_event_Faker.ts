const task_event_Faker = [
  {
    volunteers_number: 4,

    event: {
      title: 'Apéro',
      date_start: 'Samedi 27 Février 08:00',
      date_end: 'Samedi 27 Février 17:00',
      location: 'Stade Roudourou',
      description:
        "L'apéro se déroulera dans le stade du roudourou à l'adresse de micheline les bains, nous pourrons y découvrir pleins de bonnes choses à manger et à boire, KENAVO !!",
      status: 'open'
    },
    tasks: [
      {
        id: 1,
        name: 'Buvette',
        description: 'Tenir la buvette',
        skill_name: "Serveur de l'extrème"
      },
      {
        id: 2,
        name: 'Stand crèpes',
        description: 'Tenir le stand de crèpes',
        skill_name: 'Crépier Breton'
      },
      {
        id: 3,
        name: 'Tickets',
        description: 'Vendre les tickets',
        skill_name: 'the commercial'
      }
    ]
  }
];

export { task_event_Faker };
