 


 function loadcategories(){
    
 fetch("https://openapi.programming-hero.com/api/levels/ALL")
 .then((res)=> res.json())
 .then((data) => displaycategories(data.data) )


 };

 function loadWord(){
   fetch("https://openapi.programming-hero.com/api/level/5")
   .then((res)=> res.json())
   .then((data)=> displayLoadWord(data.data));

 };

 

 function loadBtnWord (id){
  
  
  const url = ` https://openapi.programming-hero.com/api/level/${id} `;
  console.log(url);
  fetch(url)
  .then((res)=>res.json())
  .then((data)=> console.log(data));

 };

 function displaycategories(data){
    
   const allbtn = document.getElementById('all-btns');

   for(let da of data ){

    // console.log(da);

     const allbtndiv = document.createElement("div");
     allbtndiv.innerHTML=`
     <button onclick="loadBtnWord(${da.id})" class=" rounded-xl border-black text-md border-2 w-[125px] h-[40px] flex justify-center items-center  hover:bg-[#422AD5] hover:text-white">
    <img class="w-4 h-4 mt-1 mr-1" src="assets/fa-book-open.png" alt="">Lesson-${da.level_no}</button>

     `;
     allbtn.append(allbtndiv);


    
   }

 };

 function displayLoadWord(data){
  
 const allword= document.getElementById('all-word');
  allword.innerHTML = " ";

   data.forEach(data=>{
    console.log(data);     
    const wordcard= document.createElement('div');
    wordcard.innerHTML=`
     
       <div class="card justify-center items-center border-2 gap-y-4">
          <h1 class="text-4xl font-bold">${data.word}</h1>
           <h2 class="font-bold text-lg">Meaning / Pronounciation</h2>
          <h1 class="font-bold text-3xl">${data.meaning} / <span>${data.pronunciation}</span></h1>
          <div class="flex gap-x-50 ">
            <button class="word-btn "><img class="ml-1.5" src="https://img.icons8.com/?size=30&id=59730&format=png" alt=""></button>
            <button class="word-btn"><img class="ml-1.5" src="https://img.icons8.com/?size=32&id=6J5jYA5q5lui&format=png" alt=""></button>
          </div>
        </div>

    `;

  allword.append(wordcard);
   })


 }
 






 loadcategories();
 loadWord()