let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');

let jsonDatabase = [{
    "title": "The Lobster",
    "description": ["In a dystopian society, single people must find a mate within 45 days or be transformed into an animal of their choice."];
  },
  {
    "title": "Her",
    "description": ["Left heartbroken after his marriage ends, Theodore (Joaquin Phoenix) becomes fascinated with a new operating system which reportedly develops into an intuitive and unique entity in its own right."];
  },
  {
    "title": "Jenny Slate: Stage Fright",
    "description": ["Jenny Slate's debut stand up-comedy special blends with home videos from her childhood and interviews of her with her family."];
  },
  {
    "title": "Athlete A",
    "description": ["Reporters from The Indianapolis Star expose Dr. Larry Nassar's sexual abuse of young gymnasts."];
  },
  {
    "title": "Taxi Driver",
    "description": ["When NYC cabbie Travis meets pretty campaign worker Betsy, he becomes obsessed with the idea of saving the world, first plotting to assassinate a presidential candidate, then directing his attentions toward rescuing 12-year-old prostitute Iris."];
  },
  {
    "title": "Spotlight",
    "description": ["In 2001, editor Marty Baron of The Boston Globe assigns a team of journalists to investigate allegations against John Geoghan, an unfrocked priest accused of molesting more than 80 boys. The reporters make it their mission to provide proof of a cover-up of sexual abuse within the Roman Catholic Church."];
  },
  {
    "title": "I Lost My Body",
    "description": ["A cut-off hand escapes from a dissection lab with one crucial goal: to get back to its body. As it scrambles through the pitfalls of Paris, it remembers its life with the young man it was once attached to, until they met Gabrielle."];
  },
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON) {


  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentSubhead = document.createElement("H4");
  newContentElement.appendChild(newContentSubhead);

  let newContentDescription = document.createElement("UL");
  newContentElement.appendChild(newContentDescription);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);
  contentGridElement.appendChild(newContentElement);


}
