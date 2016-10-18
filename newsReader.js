// test
var animals = ["cat", "dog", "horse", "cow", "tiger", "moose", "deer", "owl", "duck", "lion", "bear"];
var pets = ["mouse", "hamster", "cat", "dog"];

document.getElementById('feedReader').addEventListener('click', getFeed);

var x = 0; // variable to choose a feed
var feedList = []; //array used to store selected sources
var newFeed = []; //global variable used to store feed items retrieved

function getFeed() {
  /*feedList = [];
  feedSources.feeds.forEach(function() {
    getSelected();
  }); */
  newFeed = [];
  if (feedList.length === 0) {
    console.log("No sources selected");
  } else {
  console.log(feedList);
  for (var i = 0; i < feedList.length; i++) {
    feednami.load(feedList[i].link,function(result){
    if(result.error){
      console.log(result.error)
    }
    else{
      var entries = "";
      entries = result.feed.entries;
      console.log(entries.length);
      console.log(entries);
      console.log(newFeed);
      for (i = 0; i < entries.length; i++) {
        if (newFeed.length === 0) {
          newFeed = newFeed.concat(entries);
          console.log(newFeed);
          break;
        } else {
          console.log("newFeed not empty");
          console.log(newFeed.length);
          console.log(newFeed);
          newFeed.push(entries[i]);
          //var entry = entries[i];
          //filterDuplicate(entries, newFeed);
          console.log(newFeed);
        }
      } //brace for 'for statement'
      console.log(newFeed.length);
      console.log(newFeed);
      displayFeed(newFeed);
      }
      console.log(newFeed.length);
      console.log(newFeed);
    });
  };
  //displayFeed(entries);
}  //closing brace for 'else'
  //displayFeed(newFeed);
}
  /*
  feednami.load(feedSources.feeds[0].link,function(result){
  if(result.error){
    console.log(result.error)
  }
  else{
    console.log(feedSources.feeds[0].link);
    var entries = result.feed.entries;
    newFeed = entries;
    console.log(entries);
    displayFeed(entries);
  }
}) */
/*
function filterDuplicate(entries, newFeed) {
  for (i = 0; i < entries.length; i++) {
    var entry = entries[i];
    var x = newFeedContains(entry, newFeed); // execute newFeedContains function to retrieve true/false value
    console.log(x);
    if (x === true) {
      console.log(x);
      break;
    } else {
      console.log(entry);
      newFeed.push(entry);
      i++;
      //newFeed.splice(i, 1, entries[i]);
    }
  }
}

//check to see if feed item has already been displayed
function newFeedContains(entry, newFeed) {
  console.log(entry);
  //var entryId = entry.guid;
  //console.log(entryId);
  var contains = false;
  for (i = 0; i < newFeed.length; i++ ) {
    if (entry === newFeed[i]) {
      console.log(newFeed[i]);
      contains = true;
      console.log(contains);  //for testing purposes
      return contains;
      break;
    } else {
      console.log(contains);
      contains = false;
      return contains;
    }
  }
  //console.log(contains);
  //return contains;
}  */

function displayFeed(newFeed) {
  console.log(newFeed);
  clearDisplay();
  for(var i = 0; i < newFeed.length; i++){
    var title = newFeed[i].title;
    var summary = newFeed[i].summary;
    var link = newFeed[i].link;
    var description = newFeed[i].description;
    var date = new Date(newFeed[i].date_ms);
    var guid = newFeed[i].guid;
    var feederBox = feeder.appendChild(document.createElement('div'));
    feederBox.setAttribute("class", "feed");
    feederLink = '<a href=link>';
    if (newFeed[i].image.url === undefined) {
      feederBox.innerHTML = "<a href=" + link + " target='_blank'>"  + "<h3>" + title + "</h3></a>" + date + description;
  } else {
      image = newFeed[i].image.url;
      feederBox.innerHTML = "<a href=" + link + " target='_blank'>" + "<h3>" + title + "</h3></a>" + date + "<img src=" +image + ">" + description;
    }
  }
}

//clear display area when retrieving feeds to remove duplicates
function clearDisplay() {
  var clearDisplay = document.getElementById('feeder');
  var clearDisplayValue = document.getElementById('feederBox');
  if (clearDisplayValue === 0) {
    console.log("ready to display feeds");
  } else {
  while (clearDisplay.firstChild) {
    console.log("clearing display");
    clearDisplay.removeChild(clearDisplay.firstChild);
  }
}
}

function getSelected(feeds) {
  if (feedSources.feeds.read === true) {
    console.log(feeds.link);
    feedList.push(feeds);
    console.log(feedList);
  }
}
// feedToggle is a function that mirrors the method toggleRead for feedSources
function feedToggle(feed) {
  if (feed.read === true) {
    feed.read = false;
    console.log(feed.name + " removed");
    for (i = 0; i < feedList.length; i++) {
      if (feed.name === feedList[i].name) {
        feedList.splice(i, 1);
        break;
      }
    }
  } else {
    if (feed.read === false) {
      feed.read = true;
      feedList.push(feed);
      console.log(feed.name + " selected");
    } else {
      if (feed.read === undefined) {
        console.log(feed.name + " read status is undefined!");
      }
      }
    }
}
// readStatus will display feed names with true/false value to determine if they are selected for reading
function readStatus() {
  for (i=0; i < feedSources.feeds.length; i++) {
	console.log(feedSources.feeds[i].name + " " + feedSources.feeds[i].read);
  }
}

var feedSources = {
    feeds: [
      {
        name: 'AndroidPit',
        link: 'https://www.androidpit.com/feed/main.xml',
        tag: 'tech',
        read: false
      }, {
        name: 'ArsTechnica',
        //link: 'http://feeds.feedburner.com/arstechnica/JTmz',
        //link: 'http://feed.feedcat.net/945450',
        link: 'http://feeds.arstechnica.com/arstechnica/index',
        //link: 'http://feeds.specificfeeds.com/ars-technica-d-ars-news',
        tag: 'tech',
        read: false
      }, {
        name: 'Engadget',
        //link: 'http://feeds.specificfeeds.com/engadg',
        //link: 'http://feeds.feedburner.com/engadget/gxzQ',
        link: 'https://www.engadget.com/rss.xml',
        tag: 'tech',
        read: false
      }, {
        name: 'The Verge',
        link: 'http://www.theverge.com/tech/rss/index.xml',
        tag: 'tech',
        read: false
      }, {
        name: 'Anandtech',
        link: 'http://feeds.feedburner.com/anandtech/jwwq',
        tag: 'tech',
        read: false
      }, {
        name: 'Android Central',
        link: 'http://feeds.feedburner.com/androidcentral/oEnI',
        tag: 'tech',
        read: false
      }, {
        name: 'Pocketnow',
        link: 'http://feeds.feedburner.com/pocketnow',
        tag: 'tech',
        read: false
      }, {
        name: 'CNET',
        link: 'http://www.cnet.com/rss/news/',
        tag: 'top',
        read: false
      }, {
        name: 'BBC News',
        link: 'http://feeds.bbci.co.uk/news/rss.xml?edition=us',
        tag: 'top',
        read: false
      },
      {
        name: 'US News',
        link: 'http://feeds.washingtonpost.com/rss/rss_post-nation',
        tag: 'top',
        read: false
          }
      ],

    toggleRead: function(position) {
      if (this.feeds[position].read === true) {
        this.feeds[position].read = false;
        console.log(this.feeds[position].name + " removed");
        for (i = 0; i < feedList.length; i++) {
          if (this.feeds[position].name === feedList[i].name) {
            feedList.splice(i, 1);
            break;
          }
        }
      } else {
        if (this.feeds[position].read === false) {
          this.feeds[position].read = true;
          feedList.push(this.feeds[position]);
          console.log(this.feeds[position].name + " selected");
        } else {
          if (this.feeds[position].read === undefined) {
            console.log(this.feeds[position].name + " read status is undefined!");
          }
        }
        }
    }
};
