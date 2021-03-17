import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/book/book-min.png'
import { Helmet } from "react-helmet"

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'frank-gilbertson',
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
                                        barnes: 'https://www.barnesandnoble.com/w/wasted-youth-frank-gilbertson/1008619329?ean=9781643458861',
                                        amazon :'https://www.amazon.com/Wasted-Youth-Frank-Gilbertson-ebook/dp/B08FPCD5YM/ref=sr_1_1?dchild=1&keywords=9781643458861&qid=1597777519&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Wasted-Youth-Frank-Gilbertson/dp/1643458841/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1597777519&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/wasted-youth-frank-gilbertson/1008619329?ean=9781643458847',
                                        booksamillion:'https://www.booksamillion.com/p/Wasted-Youth/Frank-Gilbertson/9781643458847?id=8079271834425',
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