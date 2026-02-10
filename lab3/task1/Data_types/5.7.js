let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null;

let visitsCountMap = new Map(); 

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

