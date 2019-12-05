function getHashParams() {
  const hashParams = {};
  const r = /([^&;=]+)=?([^&;]*)/g
  const q = window.location.hash.substring(1);

  let e;
  while (e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }

  return hashParams;
}

const app = new Vue({
  el: '#app',
  data: {
    artists: {
      short_term: [],
      medium_term: [],
      long_term: [],
    },
    tracks: {
      short_term: [],
      medium_term: [],
      long_term: [],
    },
  },
});

const spotify = new SpotifyWebApi();

const token = getHashParams().access_token;

if (!token) {
  throw new Error('No token provided.');
}

spotify.setAccessToken(token);

function getArtists(term) {
  spotify.getMyTopArtists({
    limit: 50,
    time_range: term
  }).then((data) => {
    console.log('artists, ' + term);
    console.log(data);

    Vue.set(
      app.artists, 
      term, 
      app.artists[term].concat(data.items),
    )
  }).catch(console.error)
}

function getTracks(term) {
  spotify.getMyTopTracks({
    limit: 50,
    time_range: term
  }).then((data) => {
    console.log('tracks, ' + term);
    console.log(data);

    Vue.set(
      app.tracks, 
      term, 
      app.tracks[term].concat(data.items),
    )
  }).catch(console.error)
}

getArtists('short_term');
getArtists('medium_term');
getArtists('long_term');

getTracks('short_term');
getTracks('medium_term');
getTracks('long_term');