import banner from "../../assets/hwealthbanner.png";
import "./Home.css";
import Quotes from "../Quotes";



export default function Home() {
    return (
       <>
       <div>
              <Quotes />
       </div>
        <section className='banner' style={{backgroundImage: `url(${banner})`}}>
            <h2 className="pb-5">
                Health Is Wealth!
            </h2>
            
            
        </section>
       </>
    );
};

