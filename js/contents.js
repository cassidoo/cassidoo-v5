// get all the contents jazz
(function() {
  window.addEventListener('load', function() {
    highlights();
    pressVars();
  }, false);
})();

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

// pull highlights content
function pullHighlights() {
  return fetch('contents/highlights.json', buildHeader()).then(function(response) {
    return response.json();
  });
}

// pull press links
function pullPress() {
  return fetch('contents/press.json', buildHeader()).then(function(response) {
    return response.json();
  });
}

function highlights() {
  var h = document.getElementById('highlights');
  pullHighlights().then(function(r) {
    r.data.forEach(function(x) {
      h.innerHTML += '<li class="' + x.type +
        '"><div class="left">' + x.date +
        '</div><div>' + x.description.what + ' ' +
        '<em>' + x.description.emphasis + '</em></div></li>';
    });
  });
}

// <li class="job"><div class="left">Summer 2011</div><div>Interned at <em>General Mills</em></div></li>

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
  console.log(p);
  document.getElementsByClassName('loading')[0].classList.add('hide');
  articles.forEach(function(x) {
    p.innerHTML += '<li><a href="' + x.url + '">' + x.title + '</a></li>';
  });
}
