// This file declares a variable with all HackNights info
var hackNights = {
  season: "2024",
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
      date: "2025-10-03 21:00",
      name: "Episodi II (2025)",
      theme: { emoji: "💻", name: "Back to school AI tools" },
      applyUrl: "https://hackersatupc.typeform.com/ht-2025-ep-1",
      schedule: [
        { hour: "21:00", name: "Registre" },
        { hour: "21:15", name: "Cerimònia d'obertura" },
        { hour: "21:30", name: "Workshop: AI tools for university and school." },
        { hour: "00:00", name: "Midnight Snack" },
        { hour: "05:00", name: "Cerimònia de clausura" },
      ],
      summary: ""
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

  // if the event is in the future and the next event is in the future
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
