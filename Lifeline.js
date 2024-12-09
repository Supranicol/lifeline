const lyrics = [
  { line: "I don't go into the waves", delay: 3000 },
  { line: "'Cause every time they crash, I don't feel safe", delay: 4000 },
  { line: "Yeah, I'm a little scared to put my life on the line", delay: 5500 },
  { line: "I was kind of hoping you're a....", delay: 3500 },
  { line: "🎶Lifeline....🎶", delay: 3500 },
  { line: "🎶....🎶", delay: 20000 },
];

function playLyricsWithTypingAnimation(lyrics) {
  let totalDelay = 0;

  function typeLine(line, delay, callback) {
    let index = 0;
    const interval = setInterval(() => {
      if (index < line.length) {
        process.stdout.write(line[index]);
        index++;
      } else {
        clearInterval(interval);
        process.stdout.write("\n");
        if (callback) callback();
      }
    }, 195);
  }

  lyrics.forEach(({ line, delay }) => {
    totalDelay += delay;
    setTimeout(() => typeLine(line), totalDelay);
  });
}

console.log("🎵 Lifeline...");
playLyricsWithTypingAnimation(lyrics);