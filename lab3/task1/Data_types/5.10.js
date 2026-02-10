let options = {
  title: "Menu",
  width: 100,
  height: 200
};


let {width: w, height: h, title} = options;


alert(title);  
alert(w);     
alert(h);   
let optionsы = {
  title: "Menu",
  height: 200,
  width: 100
};

let {titleу, ...rest} = options;


alert(rest.height);  
alert(rest.width);