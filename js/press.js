// get all the press stuff

// build headers for requests
function buildHeader() {
  var head = new Headers();
  head.append('pragma', 'no-cache');
  head.append('cache-control', 'no-cache');

  var init = {
    method: 'GET',
    headers: head,
  };
  return init;
}


// pull press links
function pullPress() {
  return fetch('contents/press.json', buildHeader()).then(function(response) {
    return response.json();
  });
}

// first 5 press articles
function pressVars() {
  var recent = [];

  pullPress().then(function(r) {
    for (var i = 0; i < 5; i++) {
      recent[i] = r.data[i];
    }
  })
  .then(function() {
    press(recent);
  });
}

// generate press section
function press(articles) {
  var p = document.getElementById('press');
  articles.forEach(function(x) {
    p.innerHTML += '<li><a href="' + x.url + '">' + x.title + '</a></li>';
  });
}

function generateContent() {
  pressVars();
}
