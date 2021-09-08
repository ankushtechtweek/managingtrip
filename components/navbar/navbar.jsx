import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import styled from "@emotion/styled";

const Badge = styled.span`
background-color:#003cb3;
color:#fff;
padding:10px;
border-radius:3px;
`;
const Homer = styled.span`
background-color:#ff6600;
color:#fff;
padding:10px;
border-radius:3px;
`;
const View = styled.span`
background-color:#ff9999;
color:#fff;
padding:10px;
border-radius:3px;
`;
const Strip = styled.span`
background-color:#4dff4d;
color:#fff;
padding:10px;
border-radius:3px;
`;


export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-xl">
    <Link href="/">
      <a className="navbar-brand"><Badge>Managing Work Trips</Badge></a>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link"><Homer>Home</Homer></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/articles">
            <a className="nav-link"><View>New Trip</View></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/write">
            <a className="nav-link"><Strip>Create New Trip</Strip></a>
          </Link>
        </li>
      </ul>
      
    </div>
  </div>
</Nav>
  )
}
