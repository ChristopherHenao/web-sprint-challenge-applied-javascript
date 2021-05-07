// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//

let parentDiv = document.querySelector(".header-container");

const Header = (title, date, temp) => {
  let div = document.createElement("div");
  let span1 = document.createElement("span");
  let h1 = document.createElement("h1");
  let span2 = document.createElement("span");

  div.classList.add("header");
  span1.classList.add("date");
  span2.classList.add("temp");

  parentDiv.appendChild(div);
  div.appendChild(span1);
  div.appendChild(h1);
  div.appendChild(span2);

  span1.textContent = date;
  h1.textContent = title;
  span2.textContent = temp;
}



// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
// It should create a header using the Header component above, passing arguments of your choosing.
// It should append the header to the element in the DOM that matches the given selector.
//
const headerAppender = (selector) => {
  let var1 = Header("This is a test title", "May 7, 2021", "57F");
  let var2 = document.querySelector(`${selector}`);
  console.log(var1);
  console.log(var2);
  var2.appendChild(var1);
  // console.log(var1);
  // console.log(var2);
  // return var1;
}
// document.querySelector(`${selector}`).appendChild(Header("This is a test title", "May 7, 2021", "57F"));

export { Header, headerAppender }
