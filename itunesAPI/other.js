


.then(
    // The promise returns a response from the server.
    function(response) {

        // We process the response accordingly.
        if (response.status !== 200) {
            console.log(response.status);
            return;
        }
        response.json().then(function(data) {
            console.log("Here is the data:", data);

            for (var i = 0; i < data.results.length; i++) {
                let box = document.createElement('div')
                box.classList.add('box');
                box.innerHTML+=`<div class="title">  ${data.results[i].trackName}</div>`;
            }
            });


        }

)
.catch(function(err) {
            console.log("Fetch Error :-S", err);
        });
