<?php 

// if you want to change this from 100 to something else,
// just change it here, the rest of this code should still work
define("NUM_OUTCOMES_PER_ALTERNATIVE", 3);

//header('Content-Type: application/json');
// this is an array variable. it will hold arrays itself. this makes it a 2d array.
// except that those arrays will also hold arrays, so its a 3d array.
$bigArray = array();
// this will allow us to store the entire csv file in a nice format
// $bigArray[0] will refer to the 1st choice set in the csv file, ie the first row (ignoring the initial row of AlternativeA - OutcomeX stuff)
// $bigArray[0][0] will refer to the distribution of outcomes for AlternativeA for choice set 1
// $bigArray[0][1] will refer ...                                 AlternativeB for choice set 1
// $bigArray[0][2] will refer ...                                 AlternativeC for choice set 1
// and finally
// $bigArray[0][0][0] will refer to Outcome1 for AlternativeA for choice set 1.
// so really its $bigArray[choice set][alternative][outcome]
// its complicated, but by storing everything in this way, it will easily work if you add more choice sets, or a 4th alternative, or whatever.


$row = 1;
// open the file "outcomes.csv" for reading (the "r"), we will access the file using the $file variable
// if the file is not present, fopen will return FALSE, and so the loop will not execute
if (($file = fopen("outcomes.csv", "r")) !== FALSE) {
   // this reads in the first line of the file and discards it, because we dont need it.
   fgetcsv($file, 0, ",");
   // read the file in line by line using the fgetcsv function
   // this basically gets a line from the file and stores it in $data
   // $data is an array created by cutting up the values in the csv file. it looks something like this
   // ['choice set', '12', '12', '11', '12', ... ]
   while (($data = fgetcsv($file, 0, ",")) !== FALSE) {
      // the first element of each line is "choice set X", which we dont need, so lets get rid of it. 
      // deleting the first element is called "shifting" the array
      // adding an element to the front is call "unshifting"
      // deleting the element from the end, the last element, is called "popping"
      // and finally, adding on an element at the end is called "pushing"
      array_shift($data);
      // so now the array contains only numbers, just what we want.
      // so lets adds this to the end of our big array using push
      array_push($bigArray, array_chunk($data, NUM_OUTCOMES_PER_ALTERNATIVE));
   }
   // close the file
   fclose($file);
}

// if you want to see what the array looks like uncomment this line and run
// php getproblemdata.php 
// on your macair using the terminal application.
// ask me and ill set you up
//print_r($bigArray);

// so we are done, just need to send this array back to the webpage
echo json_encode($bigArray);
//print_r($bigArray);
?>
