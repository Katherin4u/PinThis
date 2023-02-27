import './splashPage.css'
import { useState, useEffect, useRef } from "react";

const SplashPage = () => {
    const [showText1, setShowText1] = useState(true);
    const [showText2, setShowText2] = useState(false);
    const [direction1, setDirection1] = useState(1);
    const [direction2, setDirection2] = useState(1);

    const [currentPage, setCurrentPage] = useState(0)
    const [updateInterval, setUpdateInterval] = useState(0)
    
    
    const arrowRef = useRef(null)
    const pageButtons = ["0", "1", "2", "3"]

    
    const handleArrow = () => {
        arrowRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    const handlePageNav = (page) => {
        setCurrentPage(parseInt(page));
        setUpdateInterval((prev) => (prev % 3)+1);
    }

    let interval;
    useEffect( () => {
        interval = setInterval(() => {
            setCurrentPage( (prevPage) => prevPage+1 )
        }, 6000);
    }, []);
    
    useEffect( () => {
        if (updateInterval > 0) {
            interval = setInterval(() => {
                setCurrentPage( (prevPage) => prevPage+1 )
            }, 6000);
        }
        
        return () => {
            clearInterval(interval)
        }
    }, [updateInterval])

    const images1 = [
        "https://i.pinimg.com/236x/bf/34/10/bf3410cb7a5c7af07ed6e83ba9bf3dc5.jpg",
        "https://i.pinimg.com/236x/9b/49/98/9b499864f29e443aca43c89509e9cde5.jpg",
        "https://i.pinimg.com/236x/9a/fd/37/9afd37371d59311f9b8bb243219e4ef5.jpg",
        "https://i.pinimg.com/236x/20/ec/ba/20ecbaf03057bc7edb2b2623f76fbe87.jpg",
        "https://i.pinimg.com/236x/bc/0e/d7/bc0ed7daca3f258335c8ed727716b8ed.jpg",
        "https://i.pinimg.com/236x/13/32/5b/13325b139e6895631c35c2c25d069f3c.jpg",
        "https://i.pinimg.com/236x/bc/6b/b9/bc6bb9d714ed6f2d1d4a3f1b8a7d2ce4.jpg",
        "https://i.pinimg.com/236x/37/ff/f6/37fff6210e4f360778131f6cab61d007.jpg",
        "https://i.pinimg.com/236x/44/b9/e1/44b9e136feea52facfbe7b198660ac0c.jpg",
        "https://i.pinimg.com/236x/92/7a/ca/927aca932e66f7c1de404bc3500bc880.jpg",
        "https://i.pinimg.com/236x/ff/fa/9f/fffa9f9c1e428024384f0cb6478fa213.jpg",
        "https://i.pinimg.com/236x/ba/db/35/badb35dea7c5cb2522b36b7d50348c5e.jpg",
        "https://i.pinimg.com/236x/8e/91/a9/8e91a9a35524c358adae9a1daa765622.jpg",
        "https://i.pinimg.com/236x/d0/8c/aa/d08caabd2a6cc0c6074b4872a3265f91.jpg",
        "https://i.pinimg.com/236x/2d/96/79/2d9679f5d96a413c41f8a81151cb5b4c.jpg",
        "https://i.pinimg.com/236x/85/42/8d/85428d6d5737580b85717ba71993d332.jpg",
    ];

    const images2 = [
        "https://i.pinimg.com/236x/eb/91/55/eb9155f2ab7c91cc94ffcdc964a53946.jpg",
        "https://i.pinimg.com/236x/e3/71/d3/e371d3c564d5ce0c73bba66f662cc803.jpg",
        "https://i.pinimg.com/236x/a0/4a/1f/a04a1f80ebaf6a442ff2ce244fec7068.jpg",
        "https://i.pinimg.com/236x/7b/f8/75/7bf8756a42ede61162ace4d3c48ce114.jpg",
        "https://i.pinimg.com/236x/e4/78/48/e47848c7180615194ed80c161d14a1ce.jpg",
        "https://i.pinimg.com/236x/f6/14/c6/f614c607130b4e15511af03be43e5aec.jpg",
        "https://i.pinimg.com/236x/8b/2c/7b/8b2c7b49e8ac4c86cb02282c64d3e558.jpg",
        "https://i.pinimg.com/236x/41/20/2c/41202c1e9adec3c56ba2ea1f41f80772.jpg",
        "https://i.pinimg.com/236x/4b/76/01/4b76013e8e22f7b8a860dccf9a9f01a1.jpg",
        "https://i.pinimg.com/236x/44/5b/90/445b909f62a20428ea79a90366174df9.jpg",
        "https://i.pinimg.com/236x/d6/04/0e/d6040e8c54fbd80cf41534bb07f0e9ed.jpg",
        "https://i.pinimg.com/236x/a5/dc/a2/a5dca26c877dca333cfdc22ed6dc86fb.jpg",
        "https://i.pinimg.com/236x/43/48/48/4348487723e9c57d5c15266b9ffd7727.jpg",
        "https://i.pinimg.com/236x/e6/3c/03/e63c039e32d22654b05a81e3e927334f.jpg",
    ];

    useEffect(() => {
        let intervalId = setInterval(() => {
            setShowText1(!showText1);
            setShowText2(!showText2);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [showText1, showText2]);

    return (
        <div className="main-spalshpage-container">
            <section>

            <div className="buttons-and-text-container">
                {showText1 && (
                    <div>
                        
                        <div className='image-main-container-11'>
                            <div class="gradient-overlay1">

                                <div className={`slide-in-text ${direction1 === 1 ? 'bottom-to-top' : 'top-to-bottom'}`}>
                                    <div className='anime-art'>
                                        <div className='title-spalsh'>Anime Art</div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide-in-images">
                                <div className='all-posts2'>
                                    {images1.map((image) => (
                                        <div className='all-post-images1'>
                                            <div className='image-post-container'>
                                                <img className='grid-item' key={image} src={image} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div class="gradient-overlay"></div>
                        </div>
                    </div>
                )}
                {showText2 && (
                    <di>
                        <div className="main-ul-container">

                        </div>
                        <div className='image-main-container-11'>
                            <div class="gradient-overlay1">

                                <div className={`slide-in-text ${direction2 === 1 ? 'bottom-to-top' : 'top-to-bottom'}`}>
                                    <div className='title-spalsh'>One Piece</div>

                                </div>
                            </div>
                            <div className="slide-in-images">
                                <div className='all-posts2'>
                                    {images2.map((image) => (
                                        <div className='all-post-images1'>
                                            <div className='image-post-container'>
                                                <img className='grid-item' key={image} src={image} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div class="gradient-overlay"></div>
                        </div>
                    </di>
                )}
                <div className='backgroundColor'>HELLO HOW IS EVERYONE</div>
            </div>
            </section>
        </div>
        // </div>
    );
}

export default SplashPage