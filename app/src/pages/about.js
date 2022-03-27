import React from 'react'
import profile from './../assets/about/profile.jpg';
import {Section} from 'react-bulma-components'
const About = () => {
    return (
        <div>
             <br></br>
            <img src={profile} alt="profile picture" style={{maxHeight: '800px'}}/>
            <Section>
                <p class="is-size-4 has-text-weight-semibold">
                   Hi, Im Simran Bhojwani.
                </p>
            </Section> 
            <div class="container is-fluid">
                <div class="container">
                    <p class="is-size-5 ">
                        I have done my graduation in Information Technology. I'm currently working as Sr. SDET. My interest lies in less is more. I apply this idea in almost everything that I do. And my inclination towards analyzing the design of everyday things feeds my curiosity of why things are how they are. I spend my time balancing logic and creativity, health and work, todo and tomorrow.Blessed with loving parents and friends I like to spend my time with them too. My God, writing you're about yourself is like finding words in an empty dictionary.
                    </p>
                    <br></br>
                    <p class="is-size-5">
                        ｡^‿^｡
                    </p>
                </div>
            </div> 
            <br></br>
        </div>
        
    )
}

export default About
