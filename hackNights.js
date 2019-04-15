// This file declares a variable with all HackNights info
var hackNights = {
  season: "Spring 2019 Season", 
  defaultEvent: {
    date: "undefined",
    name: "Episode Extra",
    summary: "",
    place: "Aula d'Estudis from A4",
    theme: { emoji: "🌙", name: "undefined" },
    applyUrl: "#",
    schedule: undefined,
  }, 
  events: [
    {
      date: "2019-02-15 20:00",
      name: "Episode I",
      theme: { emoji: "💻", name: "Intro" },
    },
    {
      date: "2019-03-01 20:00",
      name: "Episode II",
      theme: { emoji: "🎉", name: "Carnaval" },
    },
    {
      date: "2019-03-29 20:00",
      name: "Episode III",
      theme: { emoji: "🎶", name: "Music" },
      applyUrl: "https://hackersatupc.typeform.com/to/qpb6R2",
      schedule: [
        { hour: "19:45", name:"Doors opening" },
        { hour: "20:30", name:"Opening speach" },
        { hour: "22:00", name:"Workshop: Intro to practical React" },
        { hour: "23:00", name:"Midnight Snack" },
        { hour: "00:00", name:"Bottle Flip Challenge" },
        { hour: "04:00", name:"Project Demos (Free)" },
        { hour: "06:00", name:"Closing" },
      ],
      summary: "As we announced a few days ago, this time we won't be able to provide dinner, but you will be allowed to eat in the room. However, we will provide snacks and beverage to hack all night long! If possible, we ask you to bring your own plastic cup in order to refill your drink (long live to recycling ♻😊). If you came to any previous edition, remember to wear your HackNights t-shirt!"
    },
    {
      date: "2019-04-12 20:00",
      name: "Episode IV",
      theme: { emoji: "🌴", name: "???" },
    },
    {
      date: "2019-05-24 20:00",
      name: "Episode V",
      theme: { emoji: "💗", name: "Sex" },
    },
  ],
};

var nextEvent = hackNights.events.reduce((event, next) => {
  let date = new Date(event.date);
  let dateNext = new Date(next.date);
  let now = new Date();

  if(date > now && date < dateNext) return event;
  else return next;
},  hackNights.events[0]);