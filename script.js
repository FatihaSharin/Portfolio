document.getElementById('liveToastBtn').addEventListener('click', function () {
    let toast = new bootstrap.Toast(document.querySelector('.toast'));
    toast.show();
});

// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')

// if (toastTrigger) {
//   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//   toastTrigger.addEventListener('click', () => {
//     toastBootstrap.show()
//   })
// }

const facts = [
    "Switzerland prohibits the ownership of just one guinea pig.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    "Honey never spoils; archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "Australia is wider than the moon.",
    "Venus is the only planet that spins clockwise.",
    "People used to say “prunes” when taking pictures.",
    "The Spanish national anthem has no words.",
    "The Statue of Liberty was once a lighthouse.",
    "British military tanks are equipped to make tea.",
    "Big Ben’s clock stopped at 10:07 p.m. on May 27, 2005.",
    "A blue whale’s heartbeat can be heard over 2 miles away.",
    "The real name for a hashtag is an octothorpe.",
    "The letter “J” was the last added to the English alphabet.",
    "You can’t hum while you’re pinching your nose.",
    "You could walk from Magadan in Russia to Cape Town in South Africa without needing a vehicle.",
    "The blob of toothpaste on your toothbrush has a name. It’s called a nurdle.",
    "You could fall to the center of the Earth in 19 minutes.",
    "Dead skin cells are a main ingredient in household dust.",
    "The circulatory system is more than 60,000 miles long.",
    "There are parts of Africa in all four hemispheres.",
    "German chocolate cake was invented in Texas.",
    "There’s enough gold inside Earth to coat the planet.",
    "Lemons float, but limes sink.",
];

const toastButton = document.getElementById('liveToastBtn');
const factText = document.getElementById('factText');
const factTimestamp = document.getElementById('factTimestamp');

toastButton.addEventListener('click', () => {
    // Generate a random index to pick a random fact
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];

    // Update the toast content with the random fact
    factText.textContent = randomFact;

    // Update the timestamp (you can customize this part as needed)
    const currentTime = new Date();
    factTimestamp.textContent = `Just Now`;
});