import { useState } from "react"

function Cardcompo() {
    const [cards, setCards] = useState([]);
    const [image , setImage] = useState('');
    const [heading , setHeading] = useState('');
    const [title, setTitle] = useState('');
    const [price , setPrice] = useState('');
    const [category ,setCategory] =useState("");
    
    const submitBtn = () =>{
        if(image && heading && title && price && category){
            const NewCard = {
                image ,
                heading ,
                title , 
                price, 
                category
            }
            setCards([NewCard, ...cards])
            setImage('')
            setHeading('')
            setTitle('')
            setPrice('')
            setCategory('')
        }
    }
    const cardGenarete = (categoryCard) =>{
        return cards.filter((value)=>value.category===categoryCard).map(({image,heading,title,price},index)=>(
            <div className="card_gen" key={index}>
                <img src={image} />
                <div className="card_deteals">
                    <h1>{heading}</h1>
                    <p>{title}</p>
                    <span>{price}</span>
                </div>
            </div>
        ))
    }

  return (
    <>
        <div className="card-content">
            <div className="container">
                <div className="form">
                    <input type="file" 
                        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                        accept="image/*"
                    />
                    <input type="text"
                        placeholder="Heading"
                        value={heading}
                        onChange={(e)=>setHeading(e.target.value)}
                    />
                    <input type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <input type="text"
                        placeholder="price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                    <div className="sec_category">
                        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="Men's T-shirt">Men's T-shirt</option>
                            <option value="Men's T-Pant">Men's Pant</option>
                            <option value="kids Dress">kids Dress</option>
                        </select>
                    </div>
                    <button onClick={submitBtn}>Submit</button>
                </div>
                <div className="product-content">
                    <div className="product-item">
                        <h2>Men's T-shirt</h2>
                        <div className="cards-container">
                                {cardGenarete ("Men's T-shirt")}
                        </div>
                    </div>
                    <div className="product-item">
                        <h2>Men's Pant</h2>
                        <div className="cards-container">
                            {cardGenarete ("Men's T-Pant")}
                        </div>
                    </div>
                    <div className="product-item">
                        <h2>Kid Dress</h2>
                        <div className="cards-container">
                            {cardGenarete ("kids Dress")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cardcompo