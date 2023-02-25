// let intro = document.getElementById('intro');
// // check if the page has been loaded before
// if (sessionStorage.getItem('pageLoaded') !== 'true') {
//     // show loading screen
//     document.getElementById('.splash-container').style.display = 'block';

//     // set page loaded to true
//     sessionStorage.setItem('pageLoaded', 'true');
// } else {
//     // hide loading screen
//     document.getElementById('.splash-container').style.display = 'none';
// }

// document.getElementById('.splash-container').classList.remove('splash-container');
// document.getElementById('.page-content').style.visibility = 'visible';

// function to add comment to the page and to the json file

function submitComment() {
    // Get the user's comment from the text area
    var comment = document.getElementById("comment-text").value;

    // Create a new div element to hold the comment
    var commentDiv = document.createElement("div");
    commentDiv.innerHTML = comment;

    // Add the comment to the page
    document.getElementById("comments").appendChild(commentDiv);

    // Save the comments to json file
    const fs = require(['fs']);
    var data = JSON.parse(fs.readFileSync('data.json'))
    data.comments.push(comment)
    fs.writeFileSync("data.json", JSON.stringify(data))

    // Clear the text area
    document.getElementById("comment-text").value = "";
}

// function to load comments from json file and display them on the page
function loadComments() {
    var fs = require('fs');
    var data = JSON.parse(fs.readFileSync('data.json'))
    var comments = data.comments;
    for (var i = 0; i < comments.length; i++) {
        var commentDiv = document.createElement("div");
        commentDiv.innerHTML = comments[i];
        document.getElementById("comments").appendChild(commentDiv);
    }
}

// call the load comments function on page load
loadComments();
