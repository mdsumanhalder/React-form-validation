import React from 'react'

export const ContactDetails = () => {

    
    return (
          <div className='Contact-des'>
            <div className='media-email'>
                <h1>Media enquiries:</h1>
            <a href='#'>press@modularbank.co</a>
            </div>
            <div  className='career-email'>
                <h1>Career questions:</h1>
            <a href='#'>careers@modularbank.co</a>
            </div>

              <div  className='office-addresses'>
                <h1>Our offices:</h1>
                <div className='first-office'><p>Tallinn, Estonia</p>
              <p>Vabaduse Workland</p>
               <p>Pärnu mnt 12, 10146</p>
               </div>
             <div className='second-office'>
                 <p>Berlin, Germany</p>
              <p>Bikini Berlin, Scaling Spaces, 2.OG</p>
               <p>Budapester Str. 46</p>
               <p>10787 Berlin</p>
               </div>

            </div>
           
        </div>
    )
}
