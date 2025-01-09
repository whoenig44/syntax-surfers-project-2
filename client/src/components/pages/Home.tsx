import banner from "../../assets/hwealthbanner.png";
import "./Home.css";



export default function Home() {
    return (
        <section className='banner' style={{backgroundImage: `url(${banner})`}}>
            <h1 className="pb-5">
                Health Is Wealth!
            </h1>
            
            
        </section>
    );
};

