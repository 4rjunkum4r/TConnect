import React from 'react';
function Navbar() {
    return (
        <nav class="container">
             <i class="fa-solid fa-chalkboard-user"></i>
                <div class="logo"><i class="fas fa-car"></i> T-Connect</div>
                <ul>
                    <li><a href="http://localhost:3002/" class="selected">Home</a></li>
                    <li><a href="http://localhost:3002/">Features</a></li>
                    <li><a href="http://localhost:3002/">Teachers</a></li>
                    <li><a href="http://localhost:3002/">Contact</a></li>
                    <li><a href="http://localhost:3002/" class="highlight">Book Appointment</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;