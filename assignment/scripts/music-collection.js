// console.log('***** Music Collection *****')Create a variable collection that starts as an empty array.

// Create a variable collection that starts as an empty array.

let collection = [];

// Add a function named addToCollection. This function should:
// Take in the album's title, artist, yearPublished as input parameters
// Create a new object having the above properties
// Add the new object to the end of the collection array
// Return the newly created object

function addToCollection (title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } // end album object
    collection.push(album);
} // end function addToCollection

// attempt1: function addToCollection (title, artist, yearPublished) {
//  let album = { title + artist = yearPublished } // object literal defined
//  collection.push(title, artist, yearPublished);
// } // end addToCollection function
//  return true;
// console.log(addToCollection[stand by me, Joe, 1999]);

// Test the addToCollection function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
// After all are added, console.log the collection array.

addToCollection('They say its easy', 'Joe', '1999');
addToCollection('Word undefined', 'Max', '1965');
addToCollection('The life of a coder', 'Higgs', '2021');
addToCollection('Be my function', 'Max', '1970');
addToCollection('Dont be so literal', 'Compute', '2010');
addToCollection('Query your mind', 'Barry', '2010');
console.log(collection);

// Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
// Test the showCollection function.

function showCollection (collection) {
  console.log(`There are ${collection.length} albums in this collections`);
  for (let i = 0; i < collection.length; i++) {
    console.log('Title:' , collection[i].title , 'By:' , collection[i].artist , 'Published:' , collection[i].yearPublished);
  } // end console.log
} // end showCollection function
showCollection(collection);

// Add a function named findByArtist. This function should:
// Take in artist (a string) parameter
// Create an array to hold any results, empty to start
// Loop through the collection and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

function findByArtist(artist) {
  let matchingArtist = [];
  console.log('in find by findByArtist');
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
    matchingArtist.push(collection[i]);
  } // end of if
  } // end of for loop
  return matchingArtist;
} // end of findByArtist
findByArtist('Max');
console.log(findByArtist('Max'));

showCollection(findByArtist('Max'));

// attempt1
// function findByArtist (artist) {
//   for (let album of collection) {
//     if ( findByArtist === artist) {
//     return artist
//     } // end if condition
//   } // end for of loop
// } // end function findByArtist
// findByArtist(album.joe);

// When testing your functions, write all tests in the JavaScript file!

// Stretch goals
// Create a function called search. This function should:
// Take an input parameter for a search criteria object. The search criteria might look sosomething like this:
// { artist: 'Ray Charles', year: 1957 }
// Return a new array of all items in the collection matching all of the search criteria.
// If no results are found, return an empty array.
// If there is no search object or an empty search object provided as input, then return all albums in the collection.


// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:



// Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// Update the showCollection function to display the list of tracks for each album with its name and duration.
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// Make sure to test all your code!
