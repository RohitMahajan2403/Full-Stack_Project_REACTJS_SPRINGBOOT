import React from 'react'
import '../Style/Team.css'

const teamMembers = [
    {
        // imgUrl: team01,
        name: 'Rohit Mahajan',
        
    },

    {
        // imgUrl: team02,
        name: 'Soham Galande',
        
    },

    {
        // imgUrl: team03,
        name: 'Rushikesh',
 
    },

    {
        // imgUrl: team04,
        name: 'Balaji',
      
    },
]

const OurTeam = () => {
    return (
        <div>
            <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>
                        Join With <span className='highlight'>FluentFusion Team</span>
                    </h2>
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        </div>
    )
}

export default OurTeam


