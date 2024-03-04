// cards container div 
const cardsContainer = document.getElementById('cards-container')

// get mark read 
let mark = 0

// view print div 
const viewPrintDiv = document.getElementById('view')
// searchBtn
const searchBtn = document.getElementById('search-btn')
// error 
const erro = document.getElementById('error')
// title 
const title = document.getElementById('value-print')

// loding
const loding = document.getElementById('loading')



// main function
const mainPosts = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${id}`)
  const data = await res.json()
  const posts = data.posts
  //  console.log(posts)
  showCards(posts)

}
// all post function
const allPost = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
  const data = await res.json()
  const posts = data.posts
  //  console.log(posts)
  showCards(posts)

}
// show cards function
const showCards = async(getPosts) => {
  // console.log(getPosts)
  
 loading(true)
  cardsContainer.innerHTML=''
   if(getPosts.length===0){
     setInterval(function(){loading(false)},2000)
      erro.classList.remove('hidden') 
      title.classList.add('hidden')
      // loding.classList.add('hidden')
    }
    else{
      title.classList.remove('hidden') 
      erro.classList.add('hidden') 
      // loding.classList.remove('hidden')

    }
  
    
 getPosts.forEach(post => {
      console.log(post)
      const div = document.createElement('div')
      let green = ' '
      let red = ' '
          // console.log(getPosts[0])
      if (post.isActive) {
        green = '<img src="Status (1).svg" alt="" srcset="">'
  
      } else {
        red = '<img src="Status.svg" alt="" srcset="">'
      }
      div.className = ('p-5  card card-side bg-base-300 shadow-xl my-5')
      div.innerHTML = `
      
              <figure class="h-32 ">
              <div id="green" class=" w-4 h-4 rounded-full absolute top-10  left-[11%]  ">
                ${green}
                </div>
                <div id="red" class="w-4 h-4 rounded-full absolute top-10 left-[11%] ">
                 ${red}
  
                </div>
                <img class="w-[76px] h-[76px]" src='${post.image}'
                  alt="Movie" width="50px" height="50px" />
                  </figure>
  
              <div class="card-body text-xl mt-0">
                <div class="border-b-2 border-dashed  pb-4">
                  <div class="flex flex-col lg:flex-row w-full lg:w-[70%] mb-4 justify-evenly">
                    <p># <span>${post.category}</span></p>
                    <h3>Author : ${post.author.name ? post.author.name : 'No data Available'}</h3>
                  </div>
                  <h2 id="" class="card-title font-black text-xl my-3">${post.title ? post.title : 'No data Available'}</h2>
                  <p>${post.description ? post.description : 'No data Available'}</p>
  
                </div>
                <!-- icons div  -->
                <div class="flex flex-col lg:flex-row gap-3 lg:gap-9">
                  
                  <div>
                    <h4 class="flex gap-3"><span><img src="/Group 13.svg" alt=""></span> ${post.comment_count ? post.comment_count : 'No data Available'}</h4>
                  </div>
                  <div>
                  <h4 class="flex gap-3"><span><img src="/tabler-icon-eye.svg" alt=""></span>${post.view_count ? post.view_count : 'No data Available'}</h4>
                  </div>
                  
                  <div>
                  <h4 class="flex gap-3"><span><img src="/tabler-icon-clock-hour-9.svg" alt=""></span>${post.posted_time ? post.posted_time : 'No data Available'}  min</h4>
                  </div>
                  </div>
                    <div class="card-actions justify-end">
                    <button id="click-btn" onclick="clickToPrint('${post.title}', '${post.view_count}')" class="btn bg-[#10B981] text-xl rounded-full"><i
                      class="fa-regular fa-envelope-open"></i></button>
                </div>
              </div>
              
              `
              cardsContainer.appendChild(div)
              // loding.classList.add('hidden')
            })
            setInterval(function(){loading(false)},2000)
     
  

}
function clickToPrint(title, view) {
  //  h3.innerText=title
  //  viewPrintDiv.appendChild(h3)

  //  const p = document.createElement('p')
  //  p.className='text-lg font-semibold'
  //  p.innerText=view

  const div = document.createElement('div')
  div.className = 'flex bg-white p-3 justify-between rounded-lg my-3'
  div.innerHTML = `
    <h3 class="text-xl font-black text-wrap">
    ${title}
  </h3>
  <p class="text-lg font-medium flex ">
  <span ><img class="w-[40px] h-[40px] " src="/tabler-icon-eye.svg" alt=""></span>
    <span class="mt-2"> ${view}</span>
  </p>
    `
  viewPrintDiv.appendChild(div)
  mark++
  document.getElementById('count-of-mark').innerText = mark
}


// search feild function 
searchBtn.addEventListener('click', ()=>{
 const input = document.getElementById('input')
 const inpValue = input.value
 const  low = inpValue.toLowerCase()
 setInterval(() => {
  mainPosts(low)
 }, 2000);
 loading(true)
})

allPost()


// loding function

const loading = (isLoading)=>{
  if(isLoading){
    loding.classList.remove('hidden')
  }else{
    loding.classList.add('hidden')
  }
}

// latest post function 
const latestPosts = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
  const data = await res.json()
 
  cardFunctionality(data)
  
}


let latestPostsCard = document.getElementById('latest-card')
const cardFunctionality =(posts)=>{
  
  //  console.log(posts)
   posts.forEach(element => {
       console.log(element)

       const cardDiv = document.createElement('nav')
       cardDiv.className = ('p-5 card w-[90%] lg:w-96 mx-auto bg-base-300 shadow-xl my-5')
       cardDiv.innerHTML=`
       
       <figure class="px-10 pt-10">
        
         <img src="${element.cover_image}" 
         class="rounded-xl" />
         </figure>
       <div class="card-body  ">
         <p class="flex "><img src="date.svg" alt=""><span class="ml-2">${element.author.posted_date ? element.author.posted_date : 'No Publish Date'} </span></p>
         <h2 class="card-title font-black ">${element.title ? element.title : 'No Date available'} </h2>
         <p>${element.description ? element.description : 'No Date available'} </p>
         <div class="flex justify-start gap-4">
           <img class="w-12 h-12 rounded-full" src="${element.profile_image}" alt="">
           <div>
             <h3 class="text-xl font-bold">${element.author.name ? element.author.name : 'No Publish Date'} </h3>
             <p class="text-start">${element.author.designation ? element.author.designation : 'Unknown'} </p>
           </div>
         </div>

       </div>
     
       `
    latestPostsCard.appendChild(cardDiv);
   });
}
latestPosts()