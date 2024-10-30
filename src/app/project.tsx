import React from 'react'
import Image from 'next/image'

const Project = () => {
    return (
        <div id='project'>
            <div className='project-text'>
                <h1>Projects <span>.</span></h1>
            </div>


            <div className='project-container'>
                <div className='cards'>
                    <Image
                        src='/news.jpeg'
                        alt=''
                        width={300}
                        height={200} />
                    <p>This is my Website which is based <br /> on a News Channel</p>
                    <p><a href="https://tanzeel-news-69.vercel.app/" target='_blank'><button>Click Here</button></a></p>

                </div>
                <div className='cards'>
                    <Image
                        src='/figma.jpeg'
                        alt=''
                        width={300}
                        height={200} />
                    <p>This is my Website which is based <br />on a Figma Template</p>
                    <p><a href="https://figma-assignment-fawn.vercel.app/" target='_blank'><button>Click Here</button></a></p>

                </div>
                <div className='cards'>
                    <Image
                        src='/tailwind.jpeg'
                        alt=''
                        width={300}
                        height={200} />
                    <p>This is my Website which I made <br /> on Tailwind CSS</p>
                    <p id='about'><a href="https://portfolio-tailwind-tanzeel.vercel.app/" target='_blank'><button>Click Here</button></a></p>

                </div>

            </div>
            <div ></div>
        </div>
    )
}

export default Project