import data from "./Blogpost"

        export default function BlogList() {
            // function mapBlogs() {
              return data.map((item, index) => (
                <div key={index} className="post-preview">
                  <h2 className="post-title">{item.title}</h2>
                  <h3 className="post-subtitle">{item.subtitle}</h3>
                  <p className="post-meta">
                    Posted by {item.author} on {item.date}
                  </p>
                </div>
              ));
            }
          
            // return <div>{mapBlogs()}</div>;
        //   }


// for (let i = 0; i > data.length; i++){
//     return  (                  
//     <div className="post-preview">
//         <h2 className="post-title">{data[i].title}</h2>
//         <h3 className="post-subtitle">{data[i].subtitle}</h3>
//     <p className="post-meta">
//         Posted by {data[i].author}
//         on {data[i].date}
//     </p>
// </div>
// )
// }
// }
   
// return(

//     <div class="container px-4 px-lg-5">
//                 <div class="row gx-4 gx-lg-5 justify-content-center">
//                     <div class="col-md-10 col-lg-8 col-xl-7">
    
    
//                         <hr class="my-4" />
    
//                         <div class="post-preview">
//                             <a href="post.html"><h2 class="post-title">I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</h2></a>
//                             <p class="post-meta">
//                                 Posted by
//                                 <a href="#!">Start Bootstrap</a>
//                                 on September 18, 2023
//                             </p>
//                         </div>
    
//                         <hr class="my-4" />
    
//                         <div class="post-preview">
//                             <a href="post.html">
//                                 <h2 class="post-title">Science has not yet mastered prophecy</h2>
//                                 <h3 class="post-subtitle">We predict too much for the next year and yet far too little for the next ten.</h3>
//                             </a>
//                             <p class="post-meta">
//                                 Posted by
//                                 <a href="#!">Start Bootstrap</a>
//                                 on August 24, 2023
//                             </p>
//                         </div>
    
//                         <hr class="my-4" />
    
//                         <div class="post-preview">
//                             <a href="post.html">
//                                 <h2 class="post-title">Failure is not an option</h2>
//                                 <h3 class="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to future generations.</h3>
//                             </a>
//                             <p class="post-meta">
//                                 Posted by
//                                 <a href="#!">Start Bootstrap</a>
//                                 on July 8, 2023
//                             </p>
//                         </div>
    
//                         <hr class="my-4" />
    
//                         <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
//                     </div>
//                 </div>
//             </div>