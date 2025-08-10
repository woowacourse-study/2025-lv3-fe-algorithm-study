function solution(nodeinfo) {
  let array = nodeinfo
    .map((a, index) => [...a, index + 1])
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return b[1] - a[1];
    });

  let tree = {};

  const head = array[0];
  tree[head[2]] = new Node(head[0], head[1], head[2]);

  for (let i = 1; i < array.length; i++) {
    const node = array[i];
    tree[node[2]] = new Node(node[0], node[1], node[2]);
    let parents = tree[head[2]];
    let current = tree[node[2]];
    while (true) {
      if (parents.x < current.x) {
        if (parents.right) {
          parents = parents.right;
        } else {
          parents.right = current;
          break;
        }
      }
      if (parents.x > current.x) {
        if (parents.left) {
          parents = parents.left;
        } else {
          parents.left = current;
          break;
        }
      }
    }
  }
  let preArray = [];
  let postArray = [];

  preOrder(tree[head[2]], preArray);
  postOrder(tree[head[2]], postArray);

  return [preArray, postArray];
}

function preOrder(node, array) {
  if (!node) return;
  array.push(node.index);
  preOrder(node.left, array);
  preOrder(node.right, array);
}

function postOrder(node, array) {
  if (!node) return;
  postOrder(node.left, array);
  postOrder(node.right, array);
  array.push(node.index);
}

class Node {
  constructor(x, y, index) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.left = null;
    this.right = null;
  }
}
