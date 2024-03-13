const intpFacts = [
  "😂 Fun Fact: I once got so absorbed reading about theoretical physics that I forgot to eat for an entire day.",
  "😂 Fun Fact: My friends have to do a system reboot when I start rambling about my latest overthinking escapades.",  
  "☺️:One Truth: I love Anusha and I have been in love with her since B.Tech"
  "😂 Fun Fact: I'm the person who will take a simple question like \"What's your favorite color\?\" and give a 30-minute dissertation on the history and physics of color theory.",  
  "😂 Fun Fact: I have an entire notebook filled with ideas for perpetual motion machines, none of which would actually work in the real world.",  
  "😂 Fun Fact: I sometimes confuse my family by laughing out loud...at the weird theoretical puns happening inside my head.",  
  "😂 Fun Fact: I'm the master of finding intentionally dumb loopholes in rules and instructions just for the fun of it.",  
  "🥴 Fun Fact: I once missed my stop on the subway because I was deep in contemplation about the nature of public transportation.",  
  "🥸 Fun Fact: My friends have to physically shake me out of an intense staring contest with the wall whenever I lapse too far into my own thoughts.",  
  "🤪 Fun Fact: I've been known to introduce myself at parties as an \"amateur metaphysicist\" just to see how people react.",  
  "🙃 Fun Fact: Thanks to my analytical mind, I can easily spend an entire afternoon pondering why WordPress uses footers instead of bottomer.",  
  "🥴 Fun Fact: I own a prized collection of white boards and dry erase markers specifically for late-night theory drafting sessions.",  
  "🤨 Fun Fact: My mind is a battlefield between my inner philosopher and my inner smart-aleck, and there are no winners.",  
  "😅 Fun Fact: I'm the person asking the drive-thru worker to explain, in great detail, the meaning of life between orders.",  
  "😬 Fun Fact: My favorite pastime is taking something simple and overanalyzing it into a philosophical quandary.",  
  "🥲 Fun Fact: I've been known to get so engrossed in a subject that I forget basic human functions like blinking.",  
  "🤓 Fun Fact: My mind is a constant race between formulating brilliant theories and desperately trying to appear socially normal.",  
  "🫠 Fun Fact: I'm a master at unintentionally adopting a thousand-yard stare anytime I ponder life's great mysteries (which is often)."];

  // Function to get a random INTP fact
  function getRandomIntpFact() {
    const randomIndex = Math.floor(Math.random() * intpFacts.length);
    return intpFacts[randomIndex];
  }

  // Add the random INTP fact to the HTML element
  const learnMoreLink = document.getElementById("learnMoreLink");
  const intpFactParagraph = document.getElementById("intp-fact");

  // Add a click event listener to the "Learn More" link
  learnMoreLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    intpFactParagraph.textContent = getRandomIntpFact(); // Set the paragraph content to a random INTP fact
  });