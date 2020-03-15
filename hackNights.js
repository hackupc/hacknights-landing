// This file declares a variable with all HackNights info
var hackNights = {
  season: "Spring 2020 Season", 
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
/*    {
      date: "2020-03-27 20:00",
      name: "Episode I",
      theme: { emoji: "💻", name: "Intro" },
      schedule: [
        { hour: "20:00", name: "Check-in" },
        { hour: "20:30", name: "Opening speach" },
        { hour: "23:00", name: "Workshop" },
        { hour: "00:00", name: "Midnight Snack" },
//      { hour: "01:00", name: "Talk (per disreure)" },
        { hour: "04:00", name: "Closing" },
      ],
      summary: "",
    },*/
    {
      date: "2020-04-17 20:00",
      name: "Episode II",
      theme: { emoji: "🎨", name: "Creativity" },
      schedule: [
        { hour: "20:00", name: "Check-in" },
        { hour: "20:30", name: "Opening speach" },
        { hour: "23:00", name: "Workshop" },
        { hour: "00:00", name: "Midnight Snack" },
//      { hour: "01:00", name: "Talk (per disreure)" },
        { hour: "04:00", name: "Closing" },
      ],
      summary: "",
    },
    {
      date: "2020-05-22 20:00",
      name: "Episode III",
      theme: { emoji: "🎶", name: "Music" },
      schedule: [
        { hour: "20:00", name: "Check-in" },
        { hour: "20:30", name: "Opening speach" },
        { hour: "23:00", name: "Workshop" },
        { hour: "00:00", name: "Midnight Snack" },
//      { hour: "01:00", name: "Talk (per disreure)" },
        { hour: "04:00", name: "Closing" },
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
