const cards = [
  {
    id: 1,
    idCategory: 1,
    category: "re-friending",
    text1: "What's exciting you about work lately?",
    text2: "What are you avoiding at work?",
    subtext:
      "Partner B: Ask at least one open-ended question about each response."
  },
  {
    id: 2,
    idCategory: 1,
    category: "re-friending",
    text1: "What did you do this month that you're most proud of? and why?",
    text2: "What did I do that you're most proud of? and why?",
    subtext: ""
  },
  {
    id: 3,
    idCategory: 1,
    category: "re-friending",
    text1: "Share 3 highlights of your week and how they made you feel.",
    text2: "Share 3 lowlights of your week and how they made you feel.",
    subtext:
      "Partner B: Repeat what you heard your partner say back to them in your own words. Do your best to express empathy and understanding."
  },
  {
    id: 4,
    idCategory: 1,
    category: "re-friending",
    text1:
      "What music, song, book, movie, show are you loving right now and what about it do you love?",
    text2: "",
    subtext: ""
  },
  {
    id: 5,
    idCategory: 1,
    category: "re-friending",
    text1: "Spend 3 minutes allowing your partner to share about their life.",
    text2: "Provide silence / space and actively listen",
    subtext:
      "Tips: They can start on whatever comes to mind, and will continue speaking for 3 minutes. After, spend 3 minutes asking open-ended questions about what they just shared."
  },
  {
    id: 6,
    idCategory: 1,
    category: "re-friending",
    text1: "What are the main stressors in your life currently?",
    text2:
      "Is there any way I can alleviate that stress for you; if only a small amount?",
    subtext: ""
  },
  {
    id: 7,
    idCategory: 1,
    category: "re-friending",
    text1: "How can you tell whem I am feeling stressed out?",
    text2: "",
    subtext: ""
  },
  {
    id: 8,
    idCategory: 1,
    category: "re-friending",
    text1:
      "If money was no object, what would your ideal day and week look like?",
    text2: "What would you do every day?",
    subtext: ""
  },
  {
    id: 9,
    idCategory: 1,
    category: "re-friending",
    text1: "Are you happy with your morning and evening routines?",
    text2: "",
    subtext: ""
  },
  {
    id: 10,
    idCategory: 1,
    category: "re-friending",
    text1: "As a kid, What did you dream of being when you grew up?",
    text2: "",
    subtext: ""
  },
  {
    id: 11,
    idCategory: 1,
    category: "re-friending",
    text1: "What goals do you have for yourself for the next 6 months?",
    text2: "Are there any goals you wish I would pursue?",
    subtext:
      "Pick a news headline from the week and share your thoughts / opinions, giving each other 2 - 3 minutes of uniterrupted space to share. Partner B: Ask at least one open-ended qeustion about each response."
  },
  {
    id: 12,
    idCategory: 1,
    category: "re-friending",
    text1: "What's something I do to cheer you up when you're upset?",
    text2: "",
    subtext: ""
  },
  {
    id: 13,
    idCategory: 1,
    category: "re-friending",
    text1:
      "What quirk that is unique to me do you find cute, endearing or charming?",
    text2: "",
    subtext: ""
  },
  {
    id: 14,
    idCategory: 1,
    category: "re-friending",
    text1: "Share something that you've been struggling with.",
    text2:
      "Give your partner 2 - 3 minutes to present ideas and possible solutions.",
    subtext: ""
  },
  {
    id: 15,
    idCategory: 1,
    category: "re-friending",
    text1: "How do you describe me and our relationship to people?",
    text2: "",
    subtext: ""
  },
  {
    id: 16,
    idCategory: 2,
    category: "gratitude",
    text1:
      "Share 3 (or more) non-physical qualities about your partner you admire.",
    text2: "",
    subtext: ""
  },
  {
    id: 17,
    idCategory: 2,
    category: "gratitude",
    text1:
      "Since we've been dating / together, I've noticed how much you've grown in _______.",
    text2:
      "Examples: managing your reactions, being more present, as a parent, your role as a manager at work, in opening up about your emotions, being more vocal during sex, etc.",
    subtext: ""
  },
  {
    id: 18,
    idCategory: 2,
    category: "gratitude",
    text1:
      "Share 3 (or more) physical qualities about your partner that turn you on.",
    text2: "",
    subtext: ""
  },
  {
    id: 19,
    idCategory: 2,
    category: "gratitude",
    text1: "Pick a recurring issue that you've been working on as partners.",
    text2: "Spend time acknowledging the shift and progress being made.",
    subtext: ""
  },
  {
    id: 20,
    idCategory: 2,
    category: "gratitude",
    text1:
      "Without your support on _______, I wouldn't have _______ been able to.",
    text2: "",
    subtext:
      "Repeat (or say in your own words): 'It really meant a lot to me that you did this. Thank you.'"
  },
  {
    id: 21,
    idCategory: 2,
    category: "gratitude",
    text1: "I admire that / how you _______.",
    text2: "",
    subtext: ""
  },
  {
    id: 22,
    idCategory: 2,
    category: "gratitude",
    text1:
      "Take 3 minutes to jot down 5 things your partner did this week that you appreciated or admired. Surprise them at some point this week by sending it as a text at random.",
    text2: "",
    subtext:
      "Coaching: Think both big and small! Positive reinforcement leads to more of what you like! For success, add a reminder to your calendar. Include the items from your list for ease!"
  },
  {
    id: 23,
    idCategory: 2,
    category: "gratitude",
    text1:
      "Set the timer for 90 seconds and rapid fire share all the things you love about me.",
    text2: "What would you do every day? (idk where this one goes)",
    subtext: ""
  },
  {
    id: 24,
    idCategory: 2,
    category: "gratitude",
    text1: "It meant / means so much to me when you _______.",
    text2: "",
    subtext: ""
  },
  {
    id: 25,
    idCategory: 2,
    category: "gratitude",
    text1:
      "Tell your partner at least one action they did that made you feel appreciated.",
    text2: "",
    subtext: ""
  },
  {
    id: 26,
    idCategory: 2,
    category: "gratitude",
    text1:
      "Tell your partner 3 things they did this week that made you feel loved.",
    text2: "",
    subtext: ""
  },
  {
    id: 27,
    idCategory: 2,
    category: "gratitude",
    text1: "I feel special when you _______.",
    text2: "",
    subtext: ""
  },
  {
    id: 28,
    idCategory: 2,
    category: "gratitude",
    text1: "Is there anything you want to be acknowledged for?",
    text2: "Counter-share your own.",
    subtext:
      "Example: Partner A: 'I'd like to be acknowledged for the ways I do x, y, z.' Partner B: I acknowledge you, Partner A, for (in your own words, acknowledge your partner.)"
  },
  {
    id: 29,
    idCategory: 2,
    category: "gratitude",
    text1: "Daily hunt for the good!",
    text2:
      "At the end of each day, before bed, share at least one thing you appreciated or admired from that day. Start now with your first share.",
    subtext:
      "Coaching: Think both big and small! Positive reinforcement leads to more of what you like! For success, add a reminder to your calendar. Include the items from your list for ease!"
  },
  {
    id: 30,
    idCategory: 2,
    category: "gratitude",
    text1: "Spend 3 minutes expressing gratitude for your partner.",
    text2: "",
    subtext:
      "To start: Close your eyes, place your mind on your heart. Open your eyes and, while facing your partner, speak from your heart all the things you love and appreciate about them."
  },
  {
    id: 31,
    idCategory: 2,
    category: "gratitude",
    text1:
      "Tell your partner at least one action they did that made you feel sexy or desired.",
    text2: "",
    subtext: ""
  },
  {
    id: 32,
    idCategory: 2,
    category: "gratitude",
    text1: "I have been so impressed by your _______ recently.",
    text2: "",
    subtext: ""
  },
  {
    id: 33,
    idCategory: 3,
    category: "connection",
    text1: "What qualities were you first attracted to about me?",
    text2:
      "Bonus: Partner B asks at least one open-ended question about Partner A's share.",
    subtext: ""
  },
  {
    id: 34,
    idCategory: 3,
    category: "connection",
    text1: "Take 3 minutes to explain what makes you feel sexy and turned on.",
    text2:
      "Also share what you find sexy in a partner and what your partner does to turn you on.",
    subtext:
      "Bonus: Partner B asks at leas one open-ended question about Partner A's share."
  },
  {
    id: 35,
    idCategory: 3,
    category: "connection",
    text1:
      "Using the emoji ranking system, how would you describe our sex life?",
    text2: "1 - emoji 2 - emoji 3 - emoji",
    subtext:
      "Close your eyes and use your fingers to show your answer. Open your eyes simultaneously."
  },
  {
    id: 36,
    idCategory: 3,
    category: "connection",
    text1:
      "Using the 1-10 scale. Rate how satisfied you are overall with your current sex life.",
    text2:
      "What actions would bring that number closer to 10 by next check-in?",
    subtext:
      "Discuss what the number actually 'means' to you. - Tip: Write this down."
  },
  {
    id: 37,
    idCategory: 3,
    category: "connection",
    text1: "During sex, I love when you _______.",
    text2: "",
    subtext: ""
  },
  {
    id: 38,
    idCategory: 3,
    category: "connection",
    text1: "Share at least one (new) sexual fantasy.",
    text2:
      "You can also share one favorite sexual memory from your relationship and why you loved it.",
    subtext:
      "Bonus: Partner B asks at least one open-ended question about Partner A's share."
  },
  {
    id: 39,
    idCategory: 3,
    category: "connection",
    text1:
      "With eyes closed, by show of fingers from 1 - 10. How likely are you to share your hopes, dreams, worries, successes and failures with your partner?",
    text2: "What actions would bring that number closer to 10?",
    subtext:
      "Discuss what the number actually 'means' to you. - Tip: Write this down."
  },
  {
    id: 40,
    idCategory: 3,
    category: "connection",
    text1: "What do you remember about the first time we met?",
    text2: "What struck you the most about that day?",
    subtext: ""
  },
  {
    id: 41,
    idCategory: 3,
    category: "connection",
    text1:
      "With eyes closed, by show of fingers from 1 - 10. What number would you give our relationship right now?",
    text2:
      "What actions would bring that number closer to 10 by next check-in?",
    subtext:
      "Discuss what the number actually 'means' to you. - Tip: Write this down."
  },
  {
    id: 42,
    idCategory: 3,
    category: "connection",
    text1: "What's your love language? + QR Code",
    text2:
      "- Acts of Service - Words of Affirmation - Physical Touch  - Quality Time - Receiving Gifts",
    subtext: ""
  },
  {
    id: 43,
    idCategory: 3,
    category: "connection",
    text1:
      "Using the 1 - 10 scale. How affectionate am I? How affectionate would you like me to be?",
    text2:
      "What actions would bring that number closer to 10 by next check-in?",
    subtext:
      "Discuss what the number actually 'means' to you. - Tip: Write this down."
  },
  {
    id: 44,
    idCategory: 3,
    category: "connection",
    text1:
      "Name 3 things you love about sex or physical stimulation (kissing included) with your partner?",
    text2: "",
    subtext: ""
  },
  {
    id: 45,
    idCategory: 3,
    category: "connection",
    text1: "What is your favorite sexual memory from our relationship?",
    text2: "",
    subtext:
      "Bonus: Partner B asks at least one open-ended question about Partner A's share."
  },
  {
    id: 46,
    idCategory: 3,
    category: "connection",
    text1:
      "What do you remember most about getting to know me when we were first dating?",
    text2:
      "Bonus: Partner B asks at least one open-ended question about Partner A's share.",
    subtext: ""
  },
  {
    id: 47,
    idCategory: 3,
    category: "connection",
    text1: "Are we spending enough quality time together?",
    text2:
      "If not, lets discuss what the ideal amount of quality time is and create a definition unique to us for 'quality time'.",
    subtext:
      "Coaching: Watch out for vague descriptions. It's important to be specific when defining quality time so that you goth can quantify and meet each other's needs here."
  },
  {
    id: 48,
    idCategory: 3,
    category: "connection",
    text1: "What does romance consist of for you, specifically?",
    text2:
      "What could I do with greater regularity that would make this a more romaintic relationship for you?",
    subtext: ""
  },
  {
    id: 49,
    idCategory: 3,
    category: "connection",
    text1:
      "With eyes closed, by show of fingers from 1 - 10. How deeply connected do you feel to me?",
    text2:
      "What actions would bring that number closer to 10 by next check-in?",
    subtext:
      "Discuss what the number actually 'means' to you. - Tip: Write this down."
  },
  {
    id: 50,
    idCategory: 3,
    category: "connection",
    text1: "Hug your partner for at least 1 minute.",
    text2:
      "Afterwards, share what you experienced during that time. Did you feel close/distant? Was it easy/difficult to get through the minute? Also share why you think you had that experience.",
    subtext: ""
  },
  {
    id: 51,
    idCategory: 4,
    category: "conflict",
    text1:
      "Have I said or done anything (consciously or unconsciously) that negatively affected you? Be specific but not accusational in your response.",
    text2: "",
    subtext:
      "Coaching: Remember to use Non-Violent Communication! 'I feel _______ when _______ happens...' and make a request."
  },
  {
    id: 52,
    idCategory: 4,
    category: "conflict",
    text1: "Take a moment to consider a triggering event for you.",
    text2:
      "I feel ______ when (name something that triggers you). Do you think ________ (propose a solution) would be possible?",
    subtext:
      "Coaching: Take a short break if needed between shares. Move slowly, if your partner isn't up for the first proposed solution, work together to find one that you can both commit."
  },
  {
    id: 53,
    idCategory: 4,
    category: "conflict",
    text1: "What is something that you would like me to do less?",
    text2: "What is something you would lime me to start doing more?",
    subtext: ""
  },
  {
    id: 54,
    idCategory: 4,
    category: "conflict",
    text1:
      "When you're frustrated / angry / upset / sad etc., what's one thing I do that helps you feel safe to talk about it?",
    text2: "",
    subtext: ""
  },
  {
    id: 55,
    idCategory: 4,
    category: "conflict",
    text1: "What's one need you have and how can I best meet that need?",
    text2: "Give me specific examples",
    subtext: "Coaching: Take a short break between shares. Move slowly."
  },
  {
    id: 56,
    idCategory: 4,
    category: "conflict",
    text1: "How can you tell when something's bothering me?",
    text2:
      "What would make you more receptive to hearing and discussing frustrations?",
    subtext:
      "Coaching: Remember to use Non-Violent Communication! 'I feel _______ when _______ happens...' and make a request."
  },
  {
    id: 57,
    idCategory: 4,
    category: "conflict",
    text1: "What issues in the house have been occupying your thoughts lately?",
    text2: "",
    subtext: "Examples: Problems with kids, repairs needed, messiness, etc."
  },
  {
    id: 58,
    idCategory: 4,
    category: "conflict",
    text1:
      "Partner A: Take 3 minutes to openly air grievances or frustrations, using 'I' statements or neutral 'When x happens, it make me feel _______.'",
    text2: "Partner B: Listen without interrupting or defending.",
    subtext:
      "Once 3 minutes has finished, acknowledge your partners frustrations. Ask clarifying questions untili you inderstand where your partner is coming from. Together, discuss possible solutions."
  },
  {
    id: 59,
    idCategory: 4,
    category: "conflict",
    text1:
      "With eyes closed, by show of fingers from 1 - 10. Rank how safe and secure you currently feel in your relationship.",
    text2:
      "What actions would bring that number closer to 10 by next check-in?",
    subtext:
      "Discuss what the number actually 'means' to you. - Tip: Write this down."
  },
  {
    id: 60,
    idCategory: 4,
    category: "conflict",
    text1:
      "With eyes closed, by show of fingers from 1 - 10. Rank how in alignment you feel about your financial habits with your partner.",
    text2:
      "What acitons would bring that number closer to 10 by next check-in?",
    subtext:
      "Discuss what the number actually 'means' to you. - Tip: Write this down."
  },
  {
    id: 61,
    idCategory: 4,
    category: "conflict",
    text1:
      "With eyes closed, by show of fingers from 1 - 10. Rank the following statement, 'I feel heard and understood by my partner.'",
    text2:
      "What acitons would bring that number closer to 10 by next check-in?",
    subtext:
      "Discuss what the number actually 'means' to you. - Tip: Write this down."
  },
  {
    id: 62,
    idCategory: 4,
    category: "conflict",
    text1: "Pick an issue you've been fighting about.",
    text2:
      "Create an outline of the issue. What is the root? What causes it to flare up? Think of it as separate from either of you.",
    subtext:
      "Then work together to present solutions. Decide on one solution to test this week and commit to it. Coaching: Take a short break between shares. Move slowly."
  },
  {
    id: 63,
    idCategory: 4,
    category: "conflict",
    text1:
      "What is something I am currently doing that you would like me to do more?",
    text2: "What is something new you would like me to start doing?",
    subtext: ""
  },
  {
    id: 64,
    idCategory: 4,
    category: "conflict",
    text1:
      "With eyes closed, by show of fingers from 1 - 10. Rank the following statement: 'Since our last check-in, I have revealed more than I have concealed.'",
    text2:
      "What actions would bring that number closer to 10? Share the things concealed and why.",
    subtext:
      "Discuss what the number actually 'means' to you. - Tip: Write this down."
  },
  {
    id: 65,
    idCategory: 5,
    category: "future",
    text1:
      "Each person write one goal for the month on a piece of paper. Hang the goal somewhere you both can see it, and set a calendar reminder for 30 days from now.",
    text2: "",
    subtext:
      "Give your partner a word of encouragement consistently over the next 30 days to achieve their goal. Start now."
  },
  {
    id: 66,
    idCategory: 5,
    category: "future",
    text1: "With my free time, I'd like to _______.",
    text2:
      "Briefly discuss what might prevent you from following through on this commitment and how your partner might support you.",
    subtext: ""
  },
  {
    id: 67,
    idCategory: 5,
    category: "future",
    text1: "Where will we have our next romantic getaway?! And when?",
    text2: "",
    subtext: ""
  },
  {
    id: 68,
    idCategory: 5,
    category: "future",
    text1: "What is coming up that you each need to be prepared for?",
    text2: "And how can your partner support you between now and then?",
    subtext: ""
  },
  {
    id: 69,
    idCategory: 5,
    category: "future",
    text1: "What goals do you have to create as a couple this next year?",
    text2:
      "What might stop us from achieveing that? And how can we work together to activate those goals?",
    subtext:
      "Coaching: Watch out for vague descriptions. It's important to be specific when defining quality time so that you goth can quantify and meet each other's needs here."
  },
  {
    id: 70,
    idCategory: 5,
    category: "future",
    text1: " What's your vision for life when you retire?",
    text2: "",
    subtext: ""
  },
  {
    id: 71,
    idCategory: 5,
    category: "future",
    text1:
      "Set a time to plan your next romantic getaway. Make a miniplan and budget, then divvy up the roles and pick a date or deadline. Together, brainsorm a few location ideas!",
    text2: "",
    subtext: ""
  },
  {
    id: 72,
    idCategory: 5,
    category: "future",
    text1:
      "With eyes closed, by show of fingers from 1 - 10. How satisified are we with our social circle / social lives, 'together'?",
    text2:
      "What actions would bring that number closer to 10 by next check-in?",
    subtext:
      "Discuss what the number actually 'means' to you. - Bonus: Do a second round, answering 'as individuals.'"
  },
  {
    id: 73,
    idCategory: 5,
    category: "future",
    text1: "What kind of culture do we want to create in our relationship?",
    text2:
      "List 3 power words or phrases that sum up how you'd want your relationshop to be.",
    subtext:
      "Examples: connected, empathy, rooted in unconditional honesty, powered by mutual movement, etc."
  },
  {
    id: 74,
    idCategory: 5,
    category: "future",
    text1:
      "Separately, make a list of activities you'd like to do as a couple. Compare your lists and pick one from each list to do this week, and then the next week.",
    text2: "",
    subtext:
      "Briefly discuss what might prevent that from happening and how, together, you can make it happen. Even better, calendar it now!"
  },
  {
    id: 75,
    idCategory: 5,
    category: "future",
    text1: "By _______ (time), I'd love for us to have done together _______.",
    text2:
      "Briefly discuss what might prevent that from happening and how, together, you can make it happen.",
    subtext: ""
  }
];

const card = document.querySelector(".card-ctr");
const id = document.querySelector(".card-id");
const text1 = document.querySelector(".card-text-1");
const text2 = document.querySelector(".card-text-2");
const subtext = document.querySelector(".card-subtext");
const category = document.querySelector(".card-category");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// const prevDeckBtn = document.querySelector(".prev-deck-btn");
// const nextDeckBtn = document.querySelector(".next-deck-btn");

// const qrCode = url("qr-code.svg");

let currentItem = 0;
// let currentDeck = 0;

window.addEventListener("DOMContentLoaded", function () {
  showCard();
});

function showCard() {
  const item = cards[currentItem];
  category.textContent = item.category;
  text1.textContent = item.text1;
  text2.textContent = item.text2;
  subtext.textContent = item.subtext;

  if (item.category === "re-friending") {
    card.style.backgroundColor = "#94bdff";
  } else if (item.category === "gratitude") {
    card.style.backgroundColor = "#ffeb94";
  } else if (item.category === "connection") {
    card.style.backgroundColor = "#945cbf";
  } else if (item.category === "conflict") {
    card.style.backgroundColor = "#8a2b33";
  } else if (item.category === "future") {
    card.style.backgroundColor = "#83cf72";
  }
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > cards.length - 1) {
    currentItem = 0;
  }
  showCard();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = cards.length - 1;
  }
  showCard();
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * cards.length);
  console.log(currentItem);
  showCard();
});

// function switchDeck() {
//   const deck = cards[currentDeck];
//   // text1.textContent = deck.text1;
//   // text2.textContent = deck.text2;
//   // subtext.textContent = deck.subtext;

//   if (deck.idCategory === 1) {
//     card.style.display = "block";
//     // card.style.backgroundColor = "#94bdff";
//   } else if (deck.idCategory === 2) {
//     card.style.display = "block";
//   } else if (deck.idCategory === 3) {
//     card.style.display = "block";
//   } else if (deck.idCategory === 4) {
//     card.style.display = "block";
//   } else if (deck.idCategory === 5) {
//     card.style.display = "block";
//   }
// }

// nextDeckBtn.addEventListener("click", function () {
//   currentDeck++;
//   if (currentDeck.idCategory > 5) {
//     currentDeck = 0;
//   }
//   switchDeck();
// });

// prevDeckBtn.addEventListener("click", function () {
//   if (currentDeck.idCategory < 0) {
//     currentDeck = currentDeck[currentItem].idCategory - 1;
//   }
//   switchDeck();
// });

// prevBtn.addEventListener("click", function () {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = allCards.length - 1;
//   }
//   showCard();
// });

// randomBtn.addEventListener("click", function () {
//   currentItem = Math.floor(Math.random() * allCards.length);
//   console.log(currentItem);
//   showCard();
// });

// function switchDeck() {
//   const deck = allCards[currentDeck];
//   category.textContent = deck.category;
//   text1.textContent = deck.text1;
//   text2.textContent = deck.text2;
//   subtext.textContent = deck.subtext;
// }

// nextDeckBtn.addEventListener("click", function () {
//   currentDeck++;
//   if (deck.idCategory > [currentDeck] - 1) {
//     currentDeck = 0;
//   }
//   switchDeck();
//   console.log("next button");
// });

// prevDeckBtn.addEventListener("click", function () {
//   currentDeck--;
//   if (deck.idCategory < 0) {
//     currentDeck = deck.idCategory - 1;
//   }
//   switchDeck();
//   console.log("previous button");
// });
