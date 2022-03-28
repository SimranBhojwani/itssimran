import {React} from 'react'
import {Columns, Section, Message} from 'react-bulma-components'
import homeBg from '../assets/home/home_bg.jpg';
import { useEffect, useState } from "react"
const Home = () => {
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        function handleScroll() {
        //   console.log(window.innerWidth, window.outerWidth)
        if (window.innerWidth > 1000){
            console.log(window.innerWidth)
            setOffset(window.pageYOffset)
        }
        }
        window.addEventListener("scroll", handleScroll)
        window.removeEventListener("resize", handleScroll)
        window.removeEventListener("load", handleScroll)
        // window.removeEventListener("hashchange", handleScroll)
    
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
      }, [])
    return (
         <div>
             <div class="columns is-multiline is-vcentered is-centered">
                <div class="column is-5-desktop is-12-tablet">
                    <img src={homeBg} alt="itssimran.com logo" style={{maxHeight: '800px',transform: `translateY(${offset * 0.1}px)`}}/>
                </div>
                <div class="column is-5-desktop is-10-tablet ">
                    <div class="container is-fluid" style={{transform: `translateY(${offset * 0.3}px)`}} >
                        <p class="mb-10 is-size-1 has-text-centered">Hey, Its Simran Here !</p>
                        <br></br>
                        <p class="is-size-4 has-text-justified is-italic">"Welcome to my home<span class="has-text-grey-light">page</span>. You can probably find me doing either of these activities mentioned in the iconic frame. Apart from that, I find joy in the little things of life and believes in simplicity."</p>
                        <br></br>
                        <p class="is-size-5 has-text-centered has-text-weight-light is-family-monospace"><a  href="#/about">MoreAboutMe :)</a></p>
                    </div>
                </div>
            </div>
            <Section></Section>
            <Section></Section>
            <Section></Section>
            <Section class="subtitle">[[Yet To Be Added]]</Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
            <Section></Section>
            
        </div>
    )
}

export default Home
