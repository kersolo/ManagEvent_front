import {
  EventDataFaker,
  EventForCalendarInterface,
} from "../interfaces/EventInterface";

export const eventDataFaker: EventDataFaker[] = [
  {
    title: "Match",
    startDate: new Date(),
    endDate: new Date(),
    adress: "Stade de foot",
    description: "Une confrontation au sommet",
    tasks: [
      {
        taskName: "Gestion des maillots",
        volunteerNumber: 1,
      },
      {
        taskName: "Billeterie",
        volunteerNumber: 2,
      },
    ],
  },
  {
    title: "Journée portes ouvertes",
    startDate: new Date(),
    endDate: new Date(),
    adress: "Stade",
    description: "Venez découvrir le rugby !",
    tasks: [
      {
        taskName: "Buvette",
        volunteerNumber: 1,
      },
      {
        taskName: "Stand de crêpes",
        volunteerNumber: 2,
      },
    ],
  },
];

export const eventsForCalendarFaker: EventForCalendarInterface[] = [
  {
    id: "1",
    title: "Apéro",
    start: "2024-04-27",
    end: "2024-04-29",
    status: "close",
  },
  {
    id: "2",
    title: "Scéance film",
    start: "2024-04-25",
    end: "2024-04-25",
    status: "open",
  },
  {
    id: "3",
    title: "Feu d'artifice",
    start: "2024-04-25",
    end: "2024-04-25",
    status: "close",
  },
];
