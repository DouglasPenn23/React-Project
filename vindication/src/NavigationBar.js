import React from 'react';
import './NavigationBar.css';

class Navigation extends React.Component {
    render(){
        return  <nav class="nav-bar">
                    <ul class="nav-bar-list-items">
                        <li class="nav-list-item"><a class="nav-list-anchor" href="#"> Chicken </a> </li>
                        <li class="nav-list-item"><a class="nav-list-anchor" href="#"> Taters </a> </li>
                        <li class="nav-list-item"><a class="nav-list-anchor" href="#"> Greens </a> </li>
                    </ul>
                </nav>
       
    }
}

export default Navigation