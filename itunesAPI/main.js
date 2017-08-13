/*
Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play


let searchForm = document.querySelector('#search-form');
let results= document.getElementById('results');
let audioTag= document.getElementsByTagName('audio');
let thePlayer= document.querySelector('.player');


console.log(results);

searchForm.addEventListener('submit', function(event){

    event.preventDefault();
    let query = document.getElementsByTagName('input');

    results.innerHTML = '';
    fetch("https://itunes.apple.com/search?term="+ query[0].value + "&limit=20")
    // Data is fetched and we get a promise.
    .then(
        // The promise returns a response from the server.
        function(response) {
            query[0].value = '';
          // We process the response accordingly.
          if (response.status !== 200) {
            console.log(response.status);
            return;
          }
          response.json().then(function(data) {
            console.log("Here is the data:", data);

            for (var i = 0; i < data.results.length; i++) {
                let box = document.createElement('div')
                let boxButton= document.createElement('button')
                //add a let variable here (maybe empty) for what ever (maybe not empty) the result is that is clicked

                // let songOfChoice =

                box.classList.add('box');
                boxButton.classList.add('boxButton');

                boxButton.innerHTML+=`<div class="title">  ${data.results[i].trackName}</div>`;
                boxButton.innerHTML+=`<div class='artistName'>${data.results[i].artistName}</div>`
                boxButton.innerHTML+=`<a><img class='albumImage' src='${data.results[i].artworkUrl100}'></a>`

                results.appendChild(box);
                box.appendChild(boxButton);

                //add the event listener in this for loop so that you can reference the data being pulled in by the artist.

                // console.log(data.results[i].previewUrl);
                function noiseMaker () {

                };
                boxButton.addEventListener ('click', function(event){
                    for (var j = 0; j < data.results[j].length; j++) {
                        event.preventDefault();
                        console.log(audioTag);
                        console.log(thePlayer);
                        console.log(data.results[i].previewUrl, "this should show the played songs url ");
                        console.log(audioTag.src);

                    }
                    // thePlayer.innerHTML=`<audio class="music-player" controls="controls" src="${data.results[i].previewUrl"></audio>`
                })
            }

            //if statement showing: "if there are no results, it will return that there are no results matching your search
            if (data.results.length === 0){
                    results.innerHTML += `<h6>Oops! We couldn't find any results that matched your search! Please try searching for another artist!</h6>`;
                }

          });
        }
      )
    .catch(function(err) {
        console.log("Fetch Error :-S", err);
    });

});
