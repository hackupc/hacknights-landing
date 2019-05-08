// This file declares a variable with all HackNights info
var hackNights = {
  season: "Spring 2019 Season", 
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
      date: "2019-02-15 20:00",
      name: "Episode I",
      theme: { emoji: "💻", name: "Intro" },
      schedule: [
        { hour: "19:45", name: "Doors opening" },
        { hour: "20:30", name: "Opening speach" },
        { hour: "23:00", name: "Midnight Snack" },
        { hour: "04:00", name: "Project Demos (Free)" },
        { hour: "06:00", name: "Closing" },
      ],
      summary: "",
    },
    {
      date: "2019-03-01 20:00",
      name: "Episode II",
      theme: { emoji: "🎉", name: "Carnaval" },
      schedule: [
        { hour: "19:45", name: "Doors opening" },
        { hour: "20:30", name: "Opening speach" },
        { hour: "23:00", name: "Midnight Snack" },
        { hour: "00:00", name: "Bottle Flip Challenge" },
        { hour: "06:00", name: "Closing" },
      ],
      summary: "",
    },
    {
      date: "2019-03-29 20:00",
      name: "Episode III",
      theme: { emoji: "🎶", name: "Music" },
      schedule: [
        { hour: "19:45", name: "Doors opening" },
        { hour: "00:00", name: "Workshop: Intro Node" },
        { hour: "06:00", name: "Closing" },
      ],
      summary: "This time we won't be able to provide dinner, but you will be allowed to eat in the room. However, we will provide snacks and beverage to hack all night long! If possible, we ask you to bring your own plastic cup in order to refill your drink (long live to recycling ♻😊). If you came to any previous edition, remember to wear your HackNights t-shirt!"
    },
    {
      date: "2019-04-12 20:00",
      name: "Episode IV",
      theme: { emoji: "😁", name: "Free" },
      schedule: [
        { hour: "19:45", name: "Doors opening" },
        { hour: "22:00", name: "Workshop: Intro to APIs" },
        { hour: "06:00", name: "Closing" },
      ],
      summary: "This time we won't be able to provide dinner, but you will be allowed to eat in the room. However, we will provide snacks and beverage to hack all night long! If possible, we ask you to bring your own plastic cup in order to refill your drink (long live to recycling ♻😊). If you came to any previous edition, remember to wear your HackNights t-shirt!"
    },
    {
      date: "2019-05-24 20:00",
      name: "Episode V",
      applyUrl: "https://hackersatupc.typeform.com/to/s4H6OD",
      theme: { emoji: "💗", name: "Sextech" },
      schedule: [
        { hour: "19:45", name: "Doors opening" },
        { hour: "22:00", name: "Workshop: To be confirmed" },
        { hour: "06:00", name: "Closing" },
      ],
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
