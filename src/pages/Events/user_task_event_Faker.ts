const user_task_event_Faker = [
  {
    user: { email: 'bla@bla.bla', password: '123456789', role: 'admin' },
    task_event: {
      volunteers_number: 4,
      event: {
        title: 'Apéro',
        date_start: 'Samedi 27 Février 08:00',
        date_end: 'Samedi 27 Février 08:00',
        location: 'Stade Roudourou',
        description:
          'BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli BlablaBla Blivlivli ',
        status: 'open'
      },
      tasks: [
        {
          title: 'Buvette',
          description: 'Tenir la buvette',
          skill_name: "Serveur de l'extrème"
        },
        {
          title: 'Stand crèpes',
          description: 'Tenir le stand de crèpes',
          skill_name: 'Crépier Breton'
        },
        {
          title: 'Tickets',
          description: 'Vendre les tickets',
          skill_name: 'the commercial'
        }
      ]
    },
    statut: 'close'
  }
];

export { user_task_event_Faker };
