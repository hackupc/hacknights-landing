// This file declares a variable with all HackNights info
var hackNights = {
  season: "Spring 2023 Season",
  defaultEvent: {
    date: "2023-03-24 21:00",
    name: "Episode I",
    summary: "",
    theme: { emoji: "🌙", name: "undefined" },
    applyUrl: "#",
    schedule: undefined,
    done: false,
    next: false,
  }, 
  events: [
    {
      date: "2020-04-17 21:00",
      name: "Episode I",
      theme: { emoji: "🎮", name: "Videogames" },
      schedule: [
        { hour: "21:00", name: "Registre" },
        { hour: "21:15", name: "Ceremonia d'opertura" },
        { hour: "21:30", name: "Workshop" },
        { hour: "00:00", name: "Midnight Snack" },
        { hour: "05:00", name: "Ceremonia de clausura" },
      ],
      summary: "",
    },
    {
      date: "2020-04-21 21:00",
      name: "Episode II",
      theme: { emoji: "🚩", name: "CRFs" },
      schedule: [
        { hour: "21:00", name: "Registre" },
        { hour: "21:15", name: "Ceremonia d'opertura" },
        { hour: "21:30", name: "Workshop" },
        { hour: "00:00", name: "Midnight Snack" },
        { hour: "05:00", name: "Ceremonia de clausura" },
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
