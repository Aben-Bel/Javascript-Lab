// UI Vars 
const postDiv3 = document.getElementById("thePosts");
const load = document.querySelector("#spinner");
const search = document.querySelector("#search");

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    // load_fromPlaceHolder();

    loadDataNew();
});


//load post from fake api function 
function load_fromPlaceHolder() {
//open the request
   fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(res) {  return res.json(); //return the JSON Promise
       })
       .then(function(posts) {
           //iterate over each post [100 posts]
           let output = '';
           posts.forEach(function(post) {
               output += `      
    <div class="item">
    <div class="image"> <img src=""https://via.placeholder.com/150","> </div>
        <div class="content">
                <a class="header" href="#" id="bTitle"> ${post.title} </a>
                <div class="description">  <p id="bDesc">  ${post.body} </p>  </div>
        </div>
    </div>    `;
           });
           postDiv3.innerHTML = output;
       })
       .catch(function(err) {     console.log(err);
       });

}
//async await
async function load_fromPlaceHolder_new() {

//open the request
   let response =     await fetch('https://jsonplaceholder.typicode.com/posts');
    
    let data = await response.json(); 
     
     return data;


}

function loadDataNew() {
    load.style.display = "block";
    load_fromPlaceHolder_new().then(function(posts)
    {
      load.style.display = "none";
      //iterate over each post [100 posts]
      let output = "";
      posts.forEach(function (post) {
               output += `      
    <div class="item">
    <div class="image"> <img src=""https://via.placeholder.com/150","> </div>
        <div class="content">
                <a class="header" href="#" id="bTitle"> ${post.title} </a>
                <div class="description">  <p id="bDesc">  ${post.body} </p>  </div>
        </div>
    </div>    `;
      });
      postDiv3.innerHTML = output;
    }).catch();
}


search.addEventListener('keyup', ()=>{
    console.log('here')
    document.querySelectorAll("content").forEach(function (e) {
        console.log('inside')
        if (e.childNodes[0].textContent.includes(filter.value)) {
        e.style.display = "block";
        } else {
        e.style.display = "none";
        }
    });
})