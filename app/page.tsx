import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script';
import 'font-awesome/css/font-awesome.min.css';
import Head from 'next/head'



export default function Home() {
  const backgroundPoolStyle = {
    backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/11/02/18/32/water-1018808_1280.jpg")',
    backgroundSize: 'cover',  // or '600px 400px'
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
  };
  return (
    <div >
      <Head>
        <title>Hill Country Pool Management</title>
      </Head>
      <nav className="flex items-center">
        <div className="flex items-center justify-between w-full">
          <Image  
            alt='hill country pool management logo' 
            width='130'
            height='200'
            className='rounded-full'
          src ='data:image/jpeg;base64,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'>
          </Image>
          <div>
            <h1 className="ml-auto relative font-serif text-green-950 sm:text-lg md:text-2xl" >
            If You Have Pool Needs, We&apos;re in the Business
            </h1>
          </div>
          <div className='p-3'>
            <a href='#services'className="flex relative text-blue-500">About</a>
            <Link className='text-blue-500 flex relative' href='/services'>Services</Link>
            <a className="flex relative text-blue-500" href='#contacts'>Contact Us</a>
          </div>
          
        </div>
      </nav>
      <div style= {backgroundPoolStyle} className=' grid place-items-center px-6 py-4'>
        
          <h1 className='text-center text-4xl mr-5' >Servicing Northern San Antonio for over 15 years</h1>
          <br/>
          <br/>
          <Image
          alt='hillcountry map'
          width='300'
          height='250'
          className='rounded-lg'
          src='https://www.google.com/maps/d/thumbnail?mid=1dkwMM6kZ027l10g4OnU1oLuFh6E'>

          </Image>
      </div>
      <div id='services' className=' bg-gradient-to-b from-cyan-100 to-white pt-6 justify-between'>
        <div className = "max-w-2xl mx-auto">
          <h1 className = "text-3xl px-3 pb-2"> Why us?</h1>
          <p className='p-3'>Here at HCPM we pride ourselves on our customer care, your loyalty 
            means more than any 5 star review. *Though we really do appreciate the feedback*
            We do the best everytime so you can leave the worry of your pool to us. 
            If you&apos;d like to be more hands on with maitenance we can offer lessons on
            basic brushings, filter care, pump cycles and even easy to do chemical treatments.
            Offering the best and most trusted equipment, HCPM ensures quality and performance.
          </p>
        </div>
        <br/>
        <br/>
        <div className="flex justify-between max-w-2xl mx-auto">
          <div className='max-w-sm p-1'> {/* Limit the width */}
            <h1 className='text-3xl p-2'>Our Services Include</h1>
            <p>- Pool Management</p>
            <p>- Service Calls</p>
            <p>- Equipment</p>
            <p>- Renovation and Repair</p>
            <p>- Education</p>
          </div>
          
          <div id='updates' >
            <h1 className='p-1'>Immediate updates from technicians</h1>
            <Image
                alt='pool quality update image'
                width='300'
                height='400'
                src='https://poolofficemanager.com/wp-content/themes/pool-office-manager/img/phone-get-the-app2.png'> 
            </Image>
          </div> 
        </div>
      </div>
      <div style= {backgroundPoolStyle} className="flex sm:text-lg md:text-xl flex-col md:flex-row">
        <div className='max-w-sm mx-auto py-4 text-center' id='contacts'>

          <h1 className='text-center font-bold text-ellipsis '>Contact Us For All Your Pool Needs</h1>
          <br/>
          <div >
            <p>Our New Location:  
              <a className='text-blue-700' href="https://www.google.com/maps?q=6335+Camp+Bullis+Rd,+San+Antonio,+TX+78257" target="_blank" rel="noopener noreferrer"> 
                6335 Camp Bullis Rd, Suite#24 San Antonio, TX 78257 
                <br/>
              </a>
            </p>
            <h3 className='px-6'>*Access by turning on to Carrie Louise St*</h3>
          </div>
          <p>Office Phone Number: 
            <a className='text-blue-700'href="tel:+12108488516"> (210) 848-8516</a>
          </p>
          <p>Email Us At: 
            <a  className='text-blue-700' href="mailto:ph@hillcountrypoolmanagement.com"> ph@hillcountrypoolmanagement.com</a>
          </p>
          <p>Social Media: 
            <br/>
            <a href="https://www.facebook.com/hillcountrypoolmgmt/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook fa-2x p-2"></i>
                <i className="fa fa-twitter fa-2x "></i>
                
            </a>
            <a href= "https://www.instagram.com/hillcountrypoolmanagement/" target="_blank" rel='noopener'>
              <i className="fa fa-instagram fa-2x p-2"></i>
            </a>
          </p>
          <br/>

        </div>
        <div className='mx-auto text-center py-4 px-1'>
          <h1>Leave us a Review on HomeAdvisor</h1>
          <a className='max-w-xl mx-auto'href='https://www.homeadvisor.com/write-a-review/67709698/' target="_blank" rel="noopener noreferrer">
            <i className="fa fa-home fa-5x mx-auto " aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className='bg-blue-400'>
        <div className='sk-ww-homeadvisor-reviews' data-embed-id='192037'></div>
        <Script src='https://widgets.sociablekit.com/homeadvisor-reviews/widget.js' strategy="lazyOnload"/>
      </div>
      <div className =" flex-1 max-w-xl mx-auto text-xs text-center">
        <h1 className='py-3'>
          All rights Reserved
          <br/>
          Intellectual property rights belong to Connor Sheets
          <br/>
          Source code available on GitHub <br/>   
          <a 
            className='text-blue-700' 
            href="mailto:connorsheets32@gmail.com"> 
            connorsheets32@gmail.com
          </a>
        </h1>
      </div>
      
    </div>
  )
}
   