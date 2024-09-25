export default function Card({image, place, hotel, rating, price}) {
    return (
      <div className="card">
        <img src={image} alt="" width="200px" />
        <h3>{place}</h3>
        <p>{hotel}</p>
        {rating < 4 ? (<p style={{color: "red"}}>{rating} ★</p>) : (<p style={{color: "green"}}>{rating} ★</p>)}
        <p>{price}</p>
      </div>
    );
  }