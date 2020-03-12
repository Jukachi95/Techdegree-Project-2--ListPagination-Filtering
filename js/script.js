/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing




// Global variables that store DOM Elements to reference

// Create variable which will store all of the list items
let listItems = document.querySelectorAll('.student-item');

// Create a variable which will store the amount of students that will be displayed
let itemsPerPage = 10;




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

// showPage function to show ten students

function showPage(list, page){
let startIndex = (page * itemsPerPage) - itemsPerPage ;
let lastIndex = (page * itemsPerPage) - 1;

         // Loop through list parameter
            for(i = 0; i < list.length; i++){

               // If the index is greater than zero and less than the last item...
                  if(i >= startIndex && i <= lastIndex){

                     // If the index is greater than zero and less than the last item,loop through index and display
                     list[i].style.display = ''


                  } else{

                     // Else, do not show by giving it a display of none
                     list[i].style.display = 'none'

                  }
            }
}




// appendPageLinks to generate, append and add functionaility to pagination links

// List parameter which the variable listItems will be passed as a parameter
function appendPageLinks(list){

            // Determine how many pages are needed by dividing the total number of items by the max number of items per page
            // Initial value is 5.4, so used Math.ceil to change it to 6
            const neededPages = Math.ceil(list.length / itemsPerPage);



            // Create div element to store pagination links
            const div = document.createElement("div");


            //  Give the div element a className of pagination in order for it to be given css style
            div.className = 'pagination';


            // Create ul elements that links will be appended to
            const ul = document.createElement("ul");


            // Append the newly created ul to the div with class of pagination
            div.appendChild(ul);


            // Get hold of the parent div that the newly created div will be appended to
            let parentDiv = document.querySelector(".page");
            parentDiv.appendChild(div);

         
            // Declare variable for <a></a> tags
            let links;

   
                  for(i = 1; i <= neededPages; i++){
                     
                          // Create <a></a> elements
                           links = document.createElement("a");

                          // Create li element
                           let li = document.createElement('li');

                           // Give <a></a> elements href value of '#'
                           links.href = '#';

                           // Give the <a></a> elements the textContent of the current iteration of the loop
                           links.textContent = i;

                           // Append the <a></a> elements variable (links) to the li
                           li.appendChild(links)

                           // The li will then be appened to the ul tht was created outside of the current for-loop
                           ul.appendChild(li)
                           

                                    // Add event listener to <a></a> tags
                                       links.addEventListener('click', (e)=>{

                                          const pageLinks = document.querySelectorAll('.pagination a')
                                          console.log(pageLinks)
                                          for(let i =0; i < pageLinks.length; i++){
                                          pageLinks[i].className = ''
                                          }
                                          let activeClass = e.target;     
                                          activeClass.className = 'active';  
                                                showPage(list,e.target.textContent)
                                          
                                       })

                  }

}

// Call the functions with appropriate values

// showPage(listItems, 1) will display page 1 on render, showPage(listItems, 2) will display page 2 on render 
showPage(listItems, 1)
appendPageLinks(listItems)











