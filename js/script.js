/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

// Create variable which will store all of the list items
let listItems = document.querySelectorAll('.student-item');

// Create a variable which will store the amount of students that will be displayed
let itemsPerPage = 10;

// Testing 
// console.log(listItems)
// console.log(itemsPerPage)



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

function showPage(list, page){
let startIndex = (page * itemsPerPage) - itemsPerPage ;
let lastIndex = (page * itemsPerPage) - 1;

      for(i = 0; i < list.length; i++){

            if(i >= startIndex && i <= lastIndex){
                list[i].style.display = ''
            } else{
               list[i].style.display = 'none'
            }
            
         
      }
}






/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks(list){

        // Determine how many pages are needed by dividing the total number of items by the max number of items per page
      const neededPages = list.length / itemsPerPage;

    // Create Div to store pagination links
    const div = document.createElement("div");
    div.className = 'pagination';

   // Create ul elements to append <a> links to
   const ul = document.createElement("ul");

   // Append ul to the div
   div.appendChild(ul);

   // Get hold of parent div that newly created div will be appended to
   let parentDiv = document.querySelector(".page");
   parentDiv.appendChild(div);
  
   // Set variable for <a></a> links
   let links;
   // Make first element child of ul active
   // Make ul children loopable
   
         for(i = 1; i < neededPages; i++){
            
                  links = document.createElement("a");
                  let li = document.createElement('li');
                  links.href = '#';
                  links.textContent = i;
                  li.appendChild(links)
                  ul.appendChild(li)
                   let listChildren = li.children[0]
                  console.log(listChildren)


                              li.addEventListener('click', (e)=>{

                                 let activeClass = e.target;     
                                 activeClass.className = 'active';  
                                       showPage(list,e.target.textContent)
                                 
                              })



         }

  
   
}


showPage(listItems, 1)
appendPageLinks(listItems)




// Remember to delete the comments that came with this file, and replace them with your own code comments.








