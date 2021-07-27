 function foo(event){
   event.preventDefault()
 
//  let sel = document.getElementById("form-select");
 let search = document.getElementById("ser")
console.log(search.value)

let news = document.getElementById("news");
fetch(

  `https://newsapi.org/v2/everything?q=${search.value}&from=2021-07-23&to=2021-07-23&sortBy=popularity&apiKey=16bce94d64464f04808b8eeb474d8e34`
)
  .then((data) => data.json())
  .then((json) => {
    console.log(json);
    
    let entData = json.articles;
        let card = "";
        for (let json of entData) {
       card += 
               `<div class="card" style="width: 50rem;">
  <img src="${json.urlToImage}"  class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">>${json.title}</h5>
    <p class="card-text">"${json.author}"</p>
    <p class="card-text">"${json.description}"</p>
    <p class="card-text">"${json.publishedAt}"</p>
    <a href="${json.url}"  class="btn btn-primary" target=_blank>See more!</a>
  </div>
</div>`
          
          
          
          ;
        }
        news.innerHTML = card;
  });
}



