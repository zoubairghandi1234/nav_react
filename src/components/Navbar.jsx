
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <h2>WEBSITE</h2>
        <ul>
            <li><Link to="/about">About</Link></li>
        </ul>
        <ul>
            <li><Link to="/services">Services</Link></li>
        </ul>
        <ul>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}
