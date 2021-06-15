import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import { Helmet } from "react-helmet"
const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
             <Helmet title="About the Author | Dr. Ronald P. Rozzi Ms. D., RHy."/>
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`}
                 contextHeading={`Author`}/>


		 		<div className="container">
				    <section className="body-author-contents">

                        <div className="heading-quote">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div> 

                            <div className="heading-quote">
                                <h4>
                                “Sounds a lot like God to me”. 
                                </h4>
                                
                                <span className="ata-span-fx">
                                The God Particle, Chapter 11, Going Within.
                                </span>
                            </div>
                        </div>

                        <article 
                            className="article-section" id="author">

                            <p>
                            Dr. Ronald Rozzi, Ms.D., RHy., holds a doctorate in metaphysics, awarded in 1995. He began private practice in complimentary healthcare in 1994, as a certified hypnotherapist. He is also certified in regression therapy and is a practitioner of Emotional Freedom Therapy (EFT). He specialized in past-life regression and anxiety disorder, as well as behavioral modification. Spiritual counseling along with bereavement counseling were offered.
                            </p>

                            <p>
                            Dr. Ron “semi-retired” from this private practice but created a home office for an occasional client as needed. He is currently a transformational life coach and spiritual counselor. He occasionally facilitates workshops on the topics of co-creation, self-realization and self-empowerment. Dr. Ron also enjoys speaking to groups and organizations to promote self-awareness and personal power.
                            </p>

                            <p>
                            Writing has become a big part of where Dr. Ron’s passions lie. He has published 2 books, with a 3rd to be released between spring & summer of 2021. His first book,” Genesis 101, The Metaphysical Cosmology in the Process of Creation,” got him started the end of 2016. The second book, “The God Particle, My Personal Journey to Know God,” in the summer of 2020. The third title coming out is, “Down the Rabbit Hole, Inspirational Blog Post Bits.” He continually publishes a monthly blog post for his website below.
                            </p>

                            <p>
                                Dr. Ron and his wife reside in Scottsville, NY, and he can be contacted by email anytime: 
                                &nbsp;<a href="mailto:drronsgodparticle@gmail.com">drronsgodparticle@gmail.com</a> 
                                &nbsp;or via the contact at 
                                &nbsp;<a href="https://www.awarenessempowerment.com" target="_blank" rel="noreferrer">www.awarenessempowerment.com</a>
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    Dr. Ronald Rozzi, Ms.D., RHy.
                                </span>
                            </p>
                            
                        </article>
              

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;