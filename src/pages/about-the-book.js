import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'dr-ronald-p-rozzi-ms-d-rhy',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
             <Helmet title="About the Book | Dr. Ronald P. Rozzi, Ms. D., RHy."/>
		 		<Nav pathExt={props.path}/>
            
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The God Particle`,
                                    spanTitle: 'My Personal Journey to Know God',
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    This is my own personal story of my earliest memories growing up to the present and my relationship to and with God. It is the evolution of a belief system downloaded as a child, through various life challenges that projected me into seeking answers about myself, life, and God. That is what brought me to share, through divine inspiration, what I have come to embrace as my belief, understanding, and personal relationship with God, the Absolute.
                                    `,
                                    
                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/the-god-particle-rhy-dr-ronald-p-rozzi-msd/1137318337?ean=9781648951060',
                                        amazon :'https://www.amazon.com/Particle-RHy-Ronald-Rozzi-Ms-D-ebook/dp/B08CQM5HLW/ref=sr_1_1?dchild=1&keywords=9781648951060&qid=1594396171&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/God-Particle-Personal-Journey-Know/dp/1648951058/ref=sr_1_1?dchild=1&keywords=9781648951053&qid=1594756683&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-god-particle-dr-rhy-ronald-p-rozzi-ms-d/1137333891?ean=9781648951053',
                                        booksamillion:'https://www.booksamillion.com/p/God-Particle/Rhy-Ronald-P-Rozzi-MS/9781648951053?id=8158356429268',
                                    },
                                    hardcover:{
                                        amazon:'https://www.amazon.com/God-Particle-Personal-Journey-Know/dp/1648951074/ref=sr_1_1?dchild=1&keywords=9781648951077&qid=1594756701&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-god-particle-dr-rhy-ronald-p-rozzi-ms-d/1137333891?ean=9781648951077',
                                        booksamillion:'https://www.booksamillion.com/p/God-Particle/Rhy-Ronald-P-Rozzi-MS/9781648951077?id=8158356429268',
                                    }
                                }}
                            />
                            <div className="commentSection" >
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;