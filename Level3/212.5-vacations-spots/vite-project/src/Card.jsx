import data from "./data"

export default function Card(){
    return data.map((item, index) => (
        <div key={index} className="card">
            <h1>{item.place}</h1>
            <h2>{item.price}</h2>
            <h3>Place to go: {item.timeToGo}</h3>
        </div>
    )
    )
}


// return data.map((item, index) => (
//     <div key={index} className="post-preview">
//       <h2 className="post-title">{item.title}</h2>
//       <h3 className="post-subtitle">{item.subtitle}</h3>
//       <p className="post-meta">
//         Posted by {item.author} on {item.date}
//       </p>
//     </div>
//   ));