function solution(tickets) {
  var answer = [];
  let sortTickets = {};

  for (const ticket of tickets) {
    if (ticket[0] in sortTickets) sortTickets[ticket[0]].push(ticket[1]);
    else sortTickets[ticket[0]] = [ticket[1]];
  }
  for (const ticket in sortTickets) sortTickets[ticket].sort();
  // 시간복잡도 : O(n log m)

  const route = [];

  function dfs(from) {
    const destList = sortTickets[from];

    while (destList && destList.length > 0) {
      const to = destList.shift();
      dfs(to);
    }
    route.push(from);
  }

  dfs("ICN");

  return route.reverse();
}
