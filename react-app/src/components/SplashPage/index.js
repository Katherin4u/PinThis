import './splashPage.css'
import { useState, useEffect } from "react";

const SpashPage = () => {
    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);

    const handleClick1 = () => {
        setIsClicked2(false)
        setIsClicked1(!isClicked1);
      };
    
      const handleClick2 = () => {
        setIsClicked1(false);
        setIsClicked2(!isClicked2);
      };
    // useEffect(() => {
    //     if (isClicked1) {
    //         const timeoutId = setTimeout(() => {
    //             setIsClicked1(false);
    //         }, 5000); // Change this to the desired time in milliseconds
    //         return () => clearTimeout(timeoutId);
    //     } else if (isClicked2) {
    //         const timeoutId = setTimeout(() => {
    //             setIsClicked2(false);
    //         }, 5000); // Change this to the desired time in milliseconds
    //         return () => clearTimeout(timeoutId);
    //     }
    // }, [isClicked1, isClicked2]);

    return (
        <div className='main-spalshpage-container'>
            <div className='second-main-spashpage-container'>
                <div className='title-contaienr'>
                    <div className='centering-it'>
                        <h1>Get Your Next</h1>
                    </div>
                </div>
                <div className='buttons-and-text-container'>
                    <ul className='main-botton-container'>
                        <div>
                        {isClicked1 && <div className="slide-in-text">Anime Art</div>}
                        {isClicked2 && <div className="slide-in-text">One Piece</div>}
                        </div>
                        <button className='dot' onClick={handleClick1}></button>
                        <button className='dot' onClick={handleClick2}></button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SpashPage