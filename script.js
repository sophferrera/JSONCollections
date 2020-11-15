let forgettingGrid = document.getElementById('grid1');
let learningGrid = document.getElementById('grid2');
let sadGrid = document.getElementById('grid3');


let jsonDatabase = [{
    "genre": "forgetting",
    "title": "Easy A",
    "picture": "https://img.timeinc.net/time/daily/2010/1009/360_easy_a_0917.jpg",
    "description": "When a lie about Olive's reputation transforms her from anonymous to infamous at her high school, she decides to embrace a provocative new persona.",
    "link": "https://www.netflix.com/search?q=easy%20a&jbv=70123920"
  },

  {
    "genre": "learning",
    "title": "Chefs Table",
    "picture": "https://miro.medium.com/max/1194/1*pOA5jG_TttmwmGG5gZ9E2A.png",
    "description": "Some of the most renowned chefs in the world share their deeply personal stories, inspirations, and unique styles. Each chef's discipline and culinary talent is explored while he or she prepares an awe-inspiring creation.",
    "link": "https://www.netflix.com/search?q=chefs%20table&jbv=80007945"
  },

  {
    "genre": "sad",
    "title": "Eternal Sunshine of the Spotless Mind ",
    "picture": "https://blackgirlnerds.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-19-at-1.23.33-PM.png",
    "description": "What's messier than a break up? Erasing memories of your ex followed by the surreal discovery of what you've lost.",
    "link": "https://www.netflix.com/search?q=eternal%20sun&jbv=60034545"
  },

]

function createElement(incomingJSON) {
  for (let i = 0; i < incomingJSON.length; i++) {

    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundcolor = "#eee";
    newContentElement.classList.add('contentItem');
    newContentElement.classList.add('linkButton');
    newLink.addEventListener("click", function() {
      window.location = incomingJSON[i]['link'];
    });
    newContentElement.appendChild(newLink);

    let newContentImg = document.createElement("IMG");
    newContentImg.classList.add("image");
    newContentImg.src = incomingJSON[i]['picture'];
    newContentElement.appendChild(newContentImg);

    let newContentTitle = document.createElement("H4");
    newContentTitle.classList.add('contentTitle');
    newContentTitle.innerText = incomingJSON[i]['title'];
    newContentElement.appendChild(newContentTitle);

    let newContentDesc = document.createElement("P");
    newContentDesc.classList.add('contentDesc');
    newContentDesc.innerText = incomingJSON[i]['description'];
    newContentElement.appendChild(newContentDesc);

  }

  createElement(jsonDatabase);


}
