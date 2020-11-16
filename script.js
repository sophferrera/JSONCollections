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
    "genre": "forgetting",
    "title": "I Think You Should Leave",
    "picture": "https://www.brightwalldarkroom.com/wp-content/uploads/2020/01/ITYSL2.jpg",
    "description": "Actor Tim Robinson stars in this sketch comedy series -- which he also co-created -- that sees him trying to get people to go away. In each segment, Robinson and his guests do whatever they can to try to drive someone to the point that they need -- or desperately want -- to leave.",
    "link": "https://www.netflix.com/search?q=i%20think%20you%20should%20leave&jbv=80986854"
  },

  {
    "genre": "forgetting",
    "title": "Derry Girls",
    "picture": "https://www.comedy.co.uk/images/library/comedies/900x450/d/derry_girls_series2_iconic.jpg",
    "description": "This candid, family-centered comedy and coming-of-age story follows 16-year-old Erin and her friends as they grow up in a world of armed police in armored Land Rovers and British Army check points in the 1990s of Northern Ireland. Written by `Being Human' screenwriter Lisa McGee, the story is set during the time of The Troubles.",
    "link": "https://www.netflix.com/search?q=derry&jbv=80238565"
  },

  {
    "genre": "forgetting",
    "title": "Jenny Slate: Stage Fright",
    "picture": "https://images.forwardcdn.com/image/720x/left/top/images/cropped/jenny-slate-stagefright-netflix-1572028697.jpg",
    "description": "Jenny Slates debut stand up-comedy special blends with home videos from her childhood and interviews of her with her family.",
    "link": "https://www.netflix.com/search?q=jenny%20&jbv=81027753"
  },

  {
    "genre": "forgetting",
    "title": "Scott Pilgrim vs. The World ",
    "picture": "https://i.ytimg.com/vi/7wd5KEaOtm4/maxresdefault.jpg",
    "description": "As bass guitarist for a garage-rock band, Scott Pilgrim has never had trouble getting a girlfriend; usually, the problem is getting rid of them. But when Ramona Flowers skates into his heart, he finds she has the most troublesome baggage of all: an army of ex-boyfriends who will stop at nothing to eliminate him from her list of suitors.",
    "link": "https://www.netflix.com/search?q=scott&jbv=70117312"
  },

  {
    "genre": "forgetting",
    "title": "Portlandia",
    "picture": "https://static.hollywoodreporter.com/sites/default/files/2016/09/portlandia_-_s06_e08_-_first_feminist_city_-_carrie_brownstein_fred_armisen_-_still_-_h_-_2016-928x523.jpg",
    "description": "This absurdist series set in Portland, Ore., gently pokes fun at the laid-back Pacific Northwest city and the many eccentric characters that call it home.",
    "link": "https://www.netflix.com/search?q=portlandia&jbv=70185015"
  },

  {
    "genre": "forgetting",
    "title": "Schitt’s Creek",
    "picture": "https://media3.s-nbcnews.com/i/newscms/2020_03/3185966/200114-moira-alexis-johnny-david-ew-444p_9610e314f170b2fa681be2b3a45d567d.jpg",
    "description": "In this sitcom, a wealthy couple -- video store magnate Johnny and his soap opera star wife Moira -- suddenly find themselves completely broke. With only one remaining asset, a small town called Schitt's Creek, which the Roses bought years earlier as a joke, this once-wealthy couple must give up life as they know it. With their two spoiled children in tow and their pampered lives behind them, the Rose family is forced to face their newfound poverty head-on and come together as a family to survive.",
    "link": "https://www.netflix.com/search?q=sch&jbv=80036165"
  },

  {
    "genre": "forgetting",
    "title": "The Great British Bake Off",
    "picture": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-07-27-at-12-40-30-pm-1595868040.png",
    "description": "Twelve amateur bakers compete against each other to win the title of Greatest British Baker in the successful series. Their skills on all the baking essentials like cakes, breads, pastries and desserts are tested in each round, and the difficulty increases as the competition unfolds. The judges are set to taste all the goods created carefully by the contestants, and the audience is able to follow all the trials and tribulations with a wholesome twist.",
    "link": "https://www.netflix.com/search?q=great&jbv=80063224"
  },

  {
    "genre": "forgetting",
    "title": "American Vandal",
    "picture": "https://occ-0-114-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRk-HtVf53E45AXcj1CBnUW3xbo1FiegPdQzX0ADhsFiLPCIuger00xXoP9iq5NJePBrWB9dsK8jnlnx5FB5Noayg0h0Ur3O2SSqG-YpezkvEWkC.jpg?r=7d3",
    "description": "American Vandal takes a look at the aftermath of various high school pranks. Aspiring student documentarian Peter Maldonado takes it upon himself, with help from friend Sam Ecklund, to investigate the cases and find out exactly who is responsible for the crimes.",
    "link": "https://www.netflix.com/search?q=american&jbv=80117545"
  },

  {
    "genre": "forgetting",
    "title": "Orange is the New Black",
    "picture": "https://images.popbuzz.com/images/64775?crop=16_9&width=660&relax=1&signature=XsD8QqNznPfbLK2vl7BNuaDAps8=",
    "description": "Piper Chapman is a public relations executive with a career and a fiancé when her past suddenly catches up to her. In her mid-30s she is sentenced to spend time in a minimum-security women's prison in Connecticut for her association with a drug runner 10 years earlier. This Netflix original series is based on the book of the same title. Forced to trade power suits for prison orange, Chapman makes her way through the corrections system and adjusts to life behind bars, making friends with the many eccentric, unusual and unexpected people she meets.",
    "link": "https://www.netflix.com/search?q=ornage&jbv=70242311"
  },

  {
    "genre": "learning",
    "title": "Chefs Table",
    "picture": "https://miro.medium.com/max/1194/1*pOA5jG_TttmwmGG5gZ9E2A.png",
    "description": "Some of the most renowned chefs in the world share their deeply personal stories, inspirations, and unique styles. Each chef's discipline and culinary talent is explored while he or she prepares an awe-inspiring creation.",
    "link": "https://www.netflix.com/search?q=chefs%20table&jbv=80007945"
  },

  {
    "genre": "learning",
    "title": "(Un)Well",
    "picture": "https://occ-0-395-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWbSsJopPt2fSG8NKPH9V_OYVqJinYPpUHjWk5w-6gKniiUmJYfdj5YM9kcjdxIavp1GsowWuJepj1SF_wsHw0WCIvSKaMG41AhjZA9jtqtk_ny8aJBoAIA9i7s-.jpg",
    "description": "Taking a deep dive into the lucrative wellness industry, which touts health and healing -- but the products may not live up to the promises.",
    "link": "https://www.netflix.com/search?q=unwell&jbv=81044208"
  },

  {
    "genre": "learning",
    "title": "The Ted Bundy Tapes",
    "picture": "https://sites.bu.edu/daniellerousseau/files/2019/12/ted-bundy-netflix-feature-900x450-636x318.jpg",
    "description": "Thirty years after Bundy's 1989 execution, this docuseries brings viewers into the mind of the criminal known as the Jack Ripper of the United States. Oscar-nominated director Joe Berlinger pieces together archival footage and audio recordings of Bundy that were made while he was on death row to provide the unique perspective of hearing the killer analyze his own life and motives.",
    "link": "https://www.netflix.com/search?q=ted%20bundy&jbv=80226612"
  },


  {
    "genre": "sad",
    "title": "Eternal Sunshine of the Spotless Mind",
    "picture": "https://blackgirlnerds.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-19-at-1.23.33-PM.png",
    "description": "What's messier than a break up? Erasing memories of your ex followed by the surreal discovery of what you've lost.",
    "link": "https://www.netflix.com/search?q=eternal%20sun&jbv=60034545"
  },

  {
    "genre": "sad",
    "title": "I Lost My Body ",
    "picture": "https://static.rogerebert.com/uploads/review/primary_image/reviews/i-lost-my-body-movie-review-2019/lost-my-body-movie-review-2019.jpg",
    "description": "A cut-off hand escapes from a dissection lab with one crucial goal: to get back to its body. As it scrambles through the pitfalls of Paris, it remembers its life with the young man it was once attached to, until they met Gabrielle.",
    "link": "https://www.netflix.com/search?q=i%20lost&jbv=81120982"
  },

  {
    "genre": "sad",
    "title": "I’m Thinking of Ending Things",
    "picture": "https://www.indiewire.com/wp-content/uploads/2020/08/im-thinking-of-ending-things-poster-jessie-buckley-social.jpeg",
    "description": "Full of misgivings, a young woman travels with her new boyfriend to his parents' secluded farm.",
    "link": "https://www.netflix.com/search?q=ending&jbv=80211559"
  },

  {
    "genre": "sad",
    "title": "A Secret Love",
    "picture": "https://www.pghequalitycenter.org/wp-content/uploads/2020/08/AAAABQJNuXyAPsetOxPKOMBlG4WrUTA9qwX4i_JOrAmxheDpWmzd3dAZvz919JnZb_m_cYAiuboPcRjJjN867p3nSBc-eKXngfjwiK939T7V9mIXDqV3h1N1umtunMU0.jpg",
    "description": "A former baseball player keeps her lesbian relationship a secret from her family for seven decades.",
    "link": "https://www.netflix.com/search?q=a%20sec&jbv=80209024"
  },

  {
    "genre": "sad",
    "title": "Dallas Buyers Club",
    "picture": "https://i.ytimg.com/vi/fvMPU0WaPcc/maxresdefault.jpg",
    "description": "In mid-1980s Texas, electrician Ron Woodroof is stunned to learn that he has AIDS. Though told that he has just 30 days left to live, Woodroof refuses to give in to despair. He seeks out alternative therapies and smuggles unapproved drugs into the U.S. from wherever he can find them. Woodroof joins forces with a fellow AIDS patient and begins selling the treatments to the growing number of people who can't wait for the medical establishment to save them.",
    "link": "https://www.netflix.com/search?q=dallas&jbv=70275751"
  },


  {
    "genre": "learning",
    "title": "The Business of Drugs",
    "picture": "https://occ-0-116-114.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTrgBcNoFcBVb7HF8s_zAhYMwR1oT1FtsxN23PScQh1aQou-4sFFLRrP1bQXTwn40r9VSKrfcJRcml-kM8ci6Mwy4G7DIet9QtL1GBn0S1UW4xnNUBSrm9FrmnoBwQ.jpg?r=656",
    "description": "Former CIA analyst Amaryllis Fox investigates the economics of six illegal substances, show how drugs push people into risky behaviors.",
    "link": "https://www.netflix.com/search?q=drugs&jbv=80199963"
  },

  {
    "genre": "learning",
    "title": "Amanda Knox",
    "picture": "https://assets.vogue.com/photos/5891a1b4e8e3104f57c74be9/master/pass/00-amanda-knox-documentary.jpg",
    "description": "The story of the trial, conviction and acquittal of Amanda Knox for the murder of an exchange student in Italy.",
    "link": "https://www.netflix.com/search?q=amanda&jbv=80081155"
  }, ,

  {
    "genre": "learning",
    "title": "Spotlight",
    "picture": "https://media.newyorker.com/photos/590972bbebe912338a37748a/master/pass/Larson-Spotlight.jpg",
    "description": "In 2001, editor Marty Baron of The Boston Globe assigns a team of journalists to investigate allegations against John Geoghan, an unfrocked priest accused of molesting more than 80 boys. Led by editor Walter Robinson, reporters Michael Rezendes, Matt Carroll and Sacha Pfeiffer interview victims and try to unseal sensitive documents. The reporters make it their mission to provide proof of a cover-up of sexual abuse within the Roman Catholic Church.",
    "link": "https://www.netflix.com/search?q=spot&jbv=80061341"
  },

  {
    "genre": "learning",
    "title": " Black Mirror",
    "picture": "https://miro.medium.com/max/2400/1*-h1F-dn6_B2yWKsT1vPsLg.jpeg",
    "description": "A series of stand-alone dramas -- sharp, suspenseful, satirical tales that explore techno-paranoia -- Black Mirror is a contemporary reworking of The Twilight Zone with stories that tap into the collective unease about the modern world, particularly regarding both intended and unintended consequences of new technologies and the effect they have on society and individuals.",
    "link": "https://www.netflix.com/search?q=black&jbv=70264888"
  }

]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundcolor = "#eee";
  newContentElement.classList.add('contentItem');

  let newContentLink = document.createElement("A");
  newContentLink.href = incomingJSON['link'];

  let newContentImg = document.createElement("IMG");
  newContentImg.classList.add("image");
  // newContentImg.src = incomingJSON[i]['picture'];
  newContentImg.src = incomingJSON['picture'];
  newContentLink.appendChild(newContentImg);
  newContentElement.appendChild(newContentLink);

  let newContentTitle = document.createElement("H4");
  newContentTitle.classList.add('contentTitle');
  // newContentTitle.innerText = incomingJSON[i]['title'];
  newContentTitle.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentTitle);

  let newContentDesc = document.createElement("P");
  newContentDesc.classList.add('contentDesc');
  // newContentDesc.innerText = incomingJSON[i]['description'];
  newContentDesc.innerText = incomingJSON['description'];
  newContentElement.appendChild(newContentDesc);

  if (incomingJSON['genre'] === "forgetting") {
    forgettingGrid.appendChild(newContentElement);
  } else if (incomingJSON['genre'] === "learning") {
    learningGrid.appendChild(newContentElement);
  } else if (incomingJSON['genre'] === "sad") {
    sadGrid.appendChild(newContentElement);
  }
}
