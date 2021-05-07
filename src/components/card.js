// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//

const Card = (article) => {
  let cardDiv = document.createElement("div");
  let headLineDiv = document.createElement("div");
  let authorDiv = document.createElement("div");
  let imgDiv = document.createElement("div");
  let img1 = document.createElement("img");
  let nameDiv = document.createElement("span");

  cardDiv.classList.add("card");
  headLineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgDiv.classList.add("img-container");

  headLineDiv.textContent = article.headline;
  img1.src = article.authorPhoto;
  nameDiv.textContent = article.authorName;

  document.querySelector(".cards-container").appendChild(cardDiv);
  cardDiv.appendChild(headLineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(nameDiv);
  imgDiv.appendChild(img1);

  cardDiv.addEventListener("click", (event) => {
    console.log(headLineDiv);
  })
}

            // Testing out my code above
// Card({
//   headline: "Test Headline",
//   authorPhoto: "url",
//   authorName: "Christopher Henao"
// })



// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//
import axios from 'axios';


const cardAppender = (selector) => {
  axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {
        return (response.data.articles)
    })
    .catch( err => {
        console.log(`Error: ${err}`)
    })
    .then(response => {
      rA(response.bootstrap);
      rA(response.javascript);
      rA(response.jquery);
      rA(response.node);
      rA(response.technology)
    })
}   


// I made both of the functions below to make the promise above be simpler
function rA (array){
  array.forEach(item => {
    return Card(cb(item))
  })}

function cb(item){
  const example = {
    headline: "Test Headline",
    authorPhoto: "url",
    authorName: "Christopher Henao"
    }
  
    let me = Object.create(example);
  
  me.headline = item.headline;
  me.authorPhoto = item.authorPhoto;
  me.authorName = item.authorName;
return me;  
};
  
  





export { Card, cardAppender }
