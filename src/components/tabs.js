// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//

const Tabs = (topics) => {
  let div1 = document.createElement("div");
  div1.classList.add("topics");
  topics.forEach(function(item){
    let div2 = document.createElement("div");
    div2.classList.add("tab");
    div2.textContent = item;
    div1.appendChild(div2);
  })
return (div1)
}

// I used this code below to test the function above.

// let testA = ["JS", "CSS", "HTML", "Python", "React"]
// console.log(Tabs(testA))



// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
// Find the array of topics inside the response, and create the tabs using the Tabs component.
// Append the tabs to the element in the DOM that matches the selector passed to the function.
//

// Imported axios to use below
import axios from 'axios';

const tabsAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then( response => {
        return (response.data.topics)
    })
    .catch( err => {
        console.log(`Error: ${err}`)
    })
    .then(response => {
      let var3 = Tabs(response);
      return var3
    })
    .then(response => {
      let var4 = document.querySelector(selector);
      var4.appendChild(response)
    })
}

// The code below was just used to test that the code above.

// console.log(tabsAppender(".tabs-container"));
// console.log(document)

export { Tabs, tabsAppender }
