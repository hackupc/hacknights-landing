// This file declares a variable with all HackNights info
var hackNights = {
  season: "primavera 2023",
  defaultEvent: {
    date: "undefined",
    name: "Episode Extra",
    summary: "",
    theme: { emoji: "🌙", name: "undefined" },
    applyUrl: "#",
    schedule: undefined,
    done: false,
    next: false,
  }, 
  events: [
    {
      date: "2023-03-24 21:00",
      name: "Episodi I",
      theme: { emoji: "🎮", name: "Videogames" },
      applyUrl: "https://hackersatupc.typeform.com/ht-2023-ep-1",
      schedule: [
        { hour: "21:00", name: "Registre" },
        { hour: "21:15", name: "Ceremònia d'opertura" },
        { hour: "21:30", name: "Workshop" },
        { hour: "00:00", name: "Midnight Snack" },
        { hour: "05:00", name: "Ceremònia de clausura" },
      ],
      summary: ""
    },
    {
      date: "2023-04-17 21:00",
      name: "Episodi II",
      theme: { emoji: "🚩", name: "CTFs" },
      schedule: [
        { hour: "21:00", name: "Registre" },
        { hour: "21:15", name: "Ceremònia d'opertura" },
        { hour: "21:30", name: "Workshop" },
        { hour: "00:00", name: "Midnight Snack" },
        { hour: "05:00", name: "Ceremònia de clausura" },
      ],
      summary: "",
    },
  ],
  nextEvent: undefined,
};

// sort events
function compare(a,b) {
  let aDate = new Date(a.date);
  let bDate = new Date(b.date);
  if (aDate < bDate) return -1;
  if (aDate > bDate) return 1;
  return 0;
}

hackNights.events.sort(compare);

let now = new Date();

// set the next event 
hackNights.nextEvent = hackNights.events.reduce((event, next) => {
  let date = new Date(event.date);
  let dateNext = new Date(next.date);

  if(date > now && date < dateNext) return event;
  else return next;
},  hackNights.events[0]);
hackNights.nextEvent.next = true; 

// set done and next attribute
for (const event of hackNights.events) {
  let date = new Date(event.date);
  event.done = date < now;

  event.next = event == hackNights.nextEvent;
}
