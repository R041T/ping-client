import './Home.css'
import {NavbarLanding} from '../../components/Navbar/Navbar'
import {LoginButton} from '../../components/LoginButton/LoginButton'
import {LandingHero} from '../../components/LandingHero/LandingHero'
import {auth} from '../../firebaseAuth'



export function Home(){

    auth.onAuthStateChanged(function(user) {
        if (user) {
            window.location.href = "http://localhost:3000/chat";
        }
      });
    return (
<div className='home'>
        <NavbarLanding/>
        <main className='main'>
            <div id="div-text">
                <p id="landing-text">The <em>Ultimate</em> Communication Platform</p>
                <p id='subheading-text'> Stay connected with your friends & family without interruption. 
                Send pictures, Images are more to people instantly accross the world.</p>
                <div id="buttons">

                    <div className='buttons' style={{"marginRight":"20px", "display":"inline"}}><LoginButton></LoginButton></div>

                </div>
                
            </div>
            <div id="landing-image"><LandingHero/></div>
        </main>
    </div>
    )
}

