const selector = selector => document.querySelector(selector);
const selectorAll = selector => document.querySelectorAll(selector);
const newElement = tag => document.createElement(tag);

const localApiPort = 3333;

(async function main() {

  let podcasts = await fetchPodcasts('list');
  podcasts.forEach(podcast => {
    generateCard(podcast);
  });

  selector('form').addEventListener("submit", async (e) => {e.preventDefault(); await getPodcastsResult() });

})()

async function getPodcastsResult() {
  let queryString = selector('form').search.value.trim();

  if (queryString) {
    podcasts = await fetchPodcasts(`filter?p=${queryString}`);

    if (podcasts.length == 0) {
      selector('.noPodcasts').style.display = 'block';
      podcasts = await fetchPodcasts('list');
    }
    else
      selector('.noPodcasts').style.display = 'none';
  }

  selector('.podcasts').innerHTML = '';

  podcasts.forEach(podcast => {
    generateCard(podcast);
  });

}

async function fetchPodcasts(endpoint) {
  try {
    const response = await fetch(`http://localhost:${localApiPort}/api/${endpoint}`)
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

function generateCard(podcast) {

  let link = newElement('a');
  link.href = `https://www.youtube.com/watch?v=${podcast.videoId}`
  link.target = "_blank";

  let card = newElement('div');
  card.classList.add('podcast');

  card.style.backgroundImage = `linear-gradient(to top, #000, #ffffff00), url(https://i.ytimg.com/vi/${podcast.videoId}/hqdefault.jpg)`

  let podName = newElement('h3');
  podName.classList.add('podName');
  podName.innerText = podcast.podcastName;

  let podTitle = newElement('h2');
  podTitle.classList.add('podTitle');
  podTitle.innerText = podcast.episode;

  link.appendChild(card);
  card.appendChild(podName);
  card.appendChild(podTitle)

  selector('.podcasts').appendChild(link);
}