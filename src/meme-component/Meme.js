import React, {useState, useEffect} from 'react';
// import memeData from './memeData'

const Meme =() =>{
    const [memeImage, setMemeImage] = useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1g8my4.jpg"
    })

    const [allMeme, setAllMeme] = useState([]);

    useEffect(()=>{
        async function getMeme() {
            const res =await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
        }
        getMeme()
    }, [])

    function getMemeImage(){
        // const memesArray = allMeme.data.memes
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMemeImage(prevName => ({
            ...prevName,
            randomImage: url
        }))
    }
     
    function handleChange(event) {
        const {name,value} = event.target
        setMemeImage(prevMeme =>{
            return{
                ...prevMeme,
                [name]: value
            }
        })
    }



    return(
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="top" 
                    className="form-input"
                    value={memeImage.topText}
                    onChange={handleChange}
                    name="topText"
                />
                <input 
                    type="text" 
                    placeholder="bottom" 
                    className="form-input"
                    value={memeImage.bottomText}
                    onChange={handleChange}
                    name="bottomText"  
                 /> <br />
                <button className="form-button" onClick={getMemeImage} >Get new image</button>
            </div>
            <div className="meme">
                <img 
                    src={memeImage.randomImage} 
                    alt="" className="meme-image tc"
                />
                <h2 
                    className="meme-top" 
                    name="topText" 
                    >{memeImage.topText}
                </h2>
                <h2 
                    className="meme-bottom" 
                    name="bottomText" 
                    >{memeImage.bottomText}
                </h2>
            </div>
        
        </main>

    );
}

export default Meme;