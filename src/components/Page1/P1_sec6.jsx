import { Photos } from "../../Photos"
import "../Page1/P1_sec6.scss"
export default function P1_sec6(){
    return(
        <>
            <section className="P1_sec6">
                <div className="cus">
                    <h2>Our customers say</h2>
                </div>
                <div className="has">
                    <img src={Photos.W4} alt="" />
                    <h2>Starla Virgoun</h2>
                    <p className="fin">Financial advisor</p>
                    <div className="as">
                        <img className="cav" src={Photos.Kov} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                            elit. Facilisis ultricies at eleifend proin. Congue nibh<br/>
                            nulla malesuada ultricies nec quam 
                        </p>
                        <img className="cavt" src={Photos.Kovr} alt="" />
                    </div>
                </div>
                <div className="us">
                    <img src={Photos.Women} alt="" />
                </div>
            </section>
        </>
    )
}