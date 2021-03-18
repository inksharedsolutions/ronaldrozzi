import React,{useEffect, useState} from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/author.jpg'

const UpperMain =()=>{

    const [stateUpper, statFunc] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollEffect);
    });

    const scrollEffect = (e)=>{
        let axisY =window.scrollY;

        if(axisY > 500 ){
            statFunc(true);
        }
    }   
    
    
    return  (
        <>
            <section className={`upper-main upper-style`}>
                <div className="container-gt">

                    <div className="grid-two-columns" >
                        <div className={`img-wrapper-form ${stateUpper && 'image-author'}`}>
                            <img src={AuthorImg} alt="author-profile"/>
                        </div>

                        <div classNames="content-img-wrapper">
                            <section className="content-wrapper-body">
                                <h1>Dr. Ronald P. Rozzi<br />Ms. D., RHy.</h1>
                                <span>Author & Writer</span>

                                <p>
                                Dr. Ronald Rozzi, Ms.D., RHy., holds a doctorate in metaphysics, awarded in 1995. He began private practice in complimentary healthcare in 1994, as a certified hypnotherapist. He is also certified in regression therapy and is a practitioner of Emotional Freedom Therapy (EFT). He specialized in past-life regression and anxiety disorder, as well as behavioral modification. Spiritual counseling along with bereavement counseling were offered.
                                </p>

                                <button>
                                    <Link to="/about-the-author">
                                        Read More
                                    </Link>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpperMain