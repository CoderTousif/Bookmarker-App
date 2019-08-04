//Listen for event listener
document.querySelector('#myForm').addEventListener('submit',saveBookmark);

// Save Bookmark
function saveBookmark(e) {
  const siteName = document.querySelector('#siteName').value;
  const siteUrl = document.querySelector('#siteUrl').value;

  let bookmark = {
    name: siteName,
    url: siteUrl
  }

  // //Local storage
  // localStorage.setItem('test', 'Hello World');
  // localStorage.removeItem('test');
  // console.log(localStorage.getItem('test'));

  //check if bookmarks are already stored
  if (localStorage.getItem('bookmarks') == null) {
    //initialize array
    let bookmarks = [];
    //add to array
    bookmarks.push(bookmark);
    //set to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    //Get bookmarks from local storage
    let bookmarks = JSON.parse(localStorage.getItem('bookamrks'));
    //Add bookmarks to array
    bookmarks.push(bookmark);
    //re-set back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  // Clear form
  document.getElementById('myForm').reset();
  // Re-fetch bookmarks
  fetchBookmarks();
  //prevent form from submitting
  e.preventDefault();
}

//Delete bookmark
function deleteBookmark(url) {
  let bookmarks = JSON.parse(localStorage.getItem('bookamrks'));

  console.log(url);
}

//fetch bookmarks
function fetchBookmarks() {
  //Get bookmarks from local storage
  let bookmarks = JSON.parse(localStorage.getItem('bookamrks'));

  let bookmarksResults = document.querySelector('#bookmarksResults');
  //build output
  bookmarksResults.innerHTML = 'HELLO';
  for (let index = 0; index < bookmarks.length; index++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;
    bookmarksResults.innerHTML += `<div class='card'>
                                    <h3>$name
                                      <a class='btn btn-default' target='_blank' href="$url"> Visit </a>
                                      <a class='btn btn-danger' href="#" onClick= "deleteBookmark($url)"> Delete </a>
                                    </h3>
                                    </div>`;
  }
}
