const moodQuotes = {
    "Happy": "Happiness is not something ready-made. It comes from your own actions.",
    "Relaxed": "Almost everything will work again if you unplug it for a few minutes-including you.",
    "Energetic": "Energy and persistence conquer all things.",
    "Nostalgic": "Sometimes you will never know the value of a moment until it becomes a memory.",
    "Sad": "Tears come from the heart, not from the brain.",
    "Medival": "Fortune favors the bold-take up arms and carve your fate.",
    "Angry": "Holding onto anger is like drinking poison and expecting the other person to die.",
    "Heartbroken": "The hottest love has the coldest end.",
    "Confident": "Confidence is silent. Insecurities are loud.",
    "Chill": "There is not need to rush. What is meant for you will always arrive on time.",
    "Inspired": "The best way to predict the future is to create it.",
    "Romantic": "Love is composed of a single soul inhabiting two bodies.",
    "Blue": "The sky grew darker, painted blue on blue, one stroke at a time.",
    "Adventurous": "Life is either a daring adventure or nothing at all.",
    "Studious": "Knowledge is power, but wisdom is everything.",
    "Wild": "Run free, live wild, and make your own rules.",
    "Like a Fairy": "All magic come with a price, dearie."
};

//Function to generate playlist based on user mood
function generatePlaylist() {
    const mood = document.getElementById("moodSelect").ariaValueMax;
    const googleSheetsAPI = "https://script.google.com/macros/s/AKfycbz-rQPloWufa7wAGp6NyM0NCj_l34OUwwXXjwZABjcH9aAEvfVOLKdsOks3maBKzVHg/exec";

    fetch(googleSheetsAPI, {
        method: "POST",
        body: JSON.stringify({ mood: mood }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = `
            <p><strong>Mood:</strong> ${mood}</p>
            <p><strong>Playlist:</strong> <a href="${data.playlist}" target="_blank">${data.playlist}</a></p>
            <p><strong>Quote:</strong> "${moodQuotes[mood]}"</p>`;

        document.body.className = mood.toLowerCase();
    })
    .catch(error => console.error("Error:", error));
}