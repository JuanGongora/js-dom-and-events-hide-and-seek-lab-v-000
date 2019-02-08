function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function deepestChild() {
  let full = document.getElementById('grand-node').querySelectorAll('*');
  return full[3];
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < ranks.length; i++)for (let r = 0; r < ranks[i].children.length; r++) {
    ranks[i].children[r].innerHTML = parseInt(ranks[i].children[r].innerHTML) + n;
  }
  return ranks;
}
