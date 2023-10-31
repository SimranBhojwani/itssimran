import {React} from 'react'
import {Columns, Section, Message} from 'react-bulma-components'
import profile from './../assets/about/profile.jpg';
import { useEffect, useState } from "react"
const Home = () => {
    return (
         <div>
             <div class="columns is-multiline is-vcentered is-centered">
                <div class="column is-5-desktop is-10-tablet ">
                    <div class="container is-fluid" >
                        <p class="mb-10 is-size-1 has-text-centered">Hey, Its Simran Here !</p>
                        <br></br>
                        <p class="is-size-4 has-text-centered is-italic">Nice to meet you :)</p>
                    </div>
                </div>
                <div class="column is-5-desktop is-12-tablet">
                    <img src={profile} alt="itssimran.com logo" style={{maxHeight: '400px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Home