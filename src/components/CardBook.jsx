import {Link} from "react-router-dom";

function CardBook ({titol, autoria, year, isbn, genre, image, editorial}) {
    let imagen = "https://covers.openlibrary.org/b/isbn/"+isbn+"-M.jpg"
    return (

<div className='itemBooksContainer'>
      <div className='itemBookSquare'>
          <div className='marcoBookImg'>
              <img className='bookCover' src={imagen} alt ='imageBook'/>
          </div>
      <div className="containerInferior">
      <div className='iconContainer'>
            <div className='iconContainerLeft'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-heart"></i>
                <Link to= "/detailsbook"className="fa-solid fa-eye"></Link>
           </div>
            <div className='iconContainerRight'>
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash-can"></i>
            </div>
      </div>
      </div>
      <div className="titleBook">
          <p className="title">{titol}</p>
          <p className="author">{autoria}</p>
          <p className="">{isbn}</p>
          
      </div>
  </div>
 
</div>

    );
}

export default CardBook;