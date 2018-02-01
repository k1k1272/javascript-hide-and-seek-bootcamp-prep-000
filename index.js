function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested");
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list");
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = rankedLists[i] += 1;
  }
}

function deepestChild() {
  let parent = document.getElementById("grand-node");
  let child = parent.children[0];

  while (child) {
    parent = child;
    child = parent.children[0];
  }
  return parent;
}
