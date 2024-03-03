// cards container div 
const cardsContainer = document.getElementById('cards-container')

// get mark read 
let mark = 0

// view print div 
const viewPrintDiv = document.getElementById('view')

const comedy = 'Comedy'
const coding = 'coding'
const music = 'music'

const searchBtn = document.getElementById('search-btn')


// main function
const mainPosts = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${id}`)
  const data = await res.json()
  const posts = data.posts
  //  console.log(posts)
  showCards(posts)

}
// show cards function
const showCards = (getPosts) => {
  // console.log(getPosts)
  getPosts.forEach(post => {
    console.log(post)
    const div = document.createElement('div')
    let green = ' '
    let red = ' '


    console.log(getPosts[0])
    if (post.isActive) {
      green = '<img src="Status (1).svg" alt="" srcset="">'

    } else {
      red = '<img src="Status.svg" alt="" srcset="">'
    }

    div.className = ('p-5 card card-side bg-base-300 shadow-xl my-5')
    div.innerHTML = `
    
            <figure class="h-32 ">
              <div id="green" class=" w-4 h-4 rounded-full absolute top-10 left-[80px] z-50">
              ${green}
              </div>
              <div id="red" class="w-4 h-4 rounded-full absolute top-10 left-[80px] z-50">
               ${red}

              </div>
              <img class="w-[76px] h-[76px]" src='${post.image}'
                alt="Movie" width="50px" height="50px" />
            </figure>

            <div class="card-body text-xl mt-0">
              <div class="border-b-2 border-dashed  pb-4">
                <div class="flex w-full lg:w-[70%] mb-4 justify-evenly">
                  <p># <span>${post.category}</span></p>
                  <h3>Author : ${post.author.name ? post.author.name : 'No data Available'}</h3>
                </div>
                <h2 id="" class="card-title font-black text-xl my-3">${post.title ? post.title : 'No data Available'}</h2>
                <p>${post.description ? post.description : 'No data Available'}</p>

              </div>
              <!-- icons div  -->
              <div class="flex gap-3 lg:gap-9">
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



  });

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
mainPosts(comedy)
mainPosts(music)
mainPosts(coding)

// search feild function 
searchBtn.addEventListener('click', ()=>{

})
