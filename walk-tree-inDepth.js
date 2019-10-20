function walkTreeInDepth(node, viewedNodesVals=[]) {
  viewedNodesVals.push(node.val);
  
  for (let i = 0; i < node.children.length; i++) {
    walkTreeInDepth(node.children[i], viewedNodesVals);
  }

  return viewedNodesVals;
}

const viewed = walkTreeInDepth({
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