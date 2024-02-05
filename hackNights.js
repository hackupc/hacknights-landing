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
      date: "2024-02-23 21:00",
      name: "Episodi I (2024)",
      theme: { emoji: "🌐", name: "Web Development 101" },
      applyUrl: "https://hackersatupc.typeform.com/ht-2024-ep-1",
      schedule: [
        { hour: "21:00", name: "Registre" },
        { hour: "21:15", name: "Cerimònia d'obertura" },
        { hour: "21:30", name: "Workshop: Crea la teva primera pàgina web." },
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
