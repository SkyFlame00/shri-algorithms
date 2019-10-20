function walkTreeWide(root) {
  const queue = [root];
  const viewedNodesVals = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    viewedNodesVals.push(currentNode.val);
    queue.push(...currentNode.children);
  }

  return viewedNodesVals;
}

const viewed = walkTreeWide({
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 8,
          children: [
            {
              val: 9,
              children: []
            },
            {
              val: 10,
              children: [
                {
                  val: 11,
                  children: []
                }
              ]
            }
          ]
        },
        {
          val: 7,
          children: []
        },
        {
          val: 6,
          children: []
        }
      ]
    },
    {
      val: 3,
      children: [
        {
          val: 5,
          children: []
        },
        {
          val: 4,
          children: []
        }
      ]
    }
  ]
});

console.log(viewed)