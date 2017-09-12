function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested")
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i=0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  var answer
  var children = {}
  var counter = 0
  var list = document.querySelectorAll('#grand-node > div')
    for (var i = 0; i < list.length; i++) {
      var current_child = list[i]
    while (current_child.querySelector(':first-child') != null) {
      counter += 1
      current_child = current_child.querySelector(':first-child')
      deepestChild = current_child

    }
    if (children[i] === undefined || children[i] < counter) {
      children[i] = counter
      answer = deepestChild
    }
  counter = 0
  }
  return answer
}
