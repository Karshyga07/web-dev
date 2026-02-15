let user = {
  name: "John",
  age: 30
};

let clone = {};

while(i < 10){ 

  let text =+ "apple" + i;
  alert(text);
}

for (let key in user) {
  clone[key] = user[key];
}

clone.name = "Pete"; 

alert( user.name );

let use = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age);