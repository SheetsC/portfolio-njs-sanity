import { getServices } from "../sanity/sanity-utils";
import Image from 'next/image'



export default async function About(){
    const services = await getServices();

     
    return  <div>{services.map((service) => (
        <div key = {service._id}> 
            {service.image && (
                <Image
                    src={service.image}
                    alt={service.alt}
                    width={250}
                    height={100}
                ></Image>
            )}
            {service.name}
           
       </div>
       
   ))}</div>;
}