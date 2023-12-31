const users = [
  { name: "John", age: 34, hobbies: ["Reading", "Cooking"] },
  { name: "Mary", age: 31, hobbies: ["Skating"] },
  { name: "Alex", age: 32, hobbies: ["Reading", "Running"] },
];

const rta = users.map((user) => user.hobbies).flat();
console.log(rta);

const rta2 = users.flatMap((user) => user.hobbies);
console.log(rta2);
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const rta3 = Object.values(calendars).flatMap((item) =>
  item.map((item) => item.startDate)
);
