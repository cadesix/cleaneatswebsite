'use client';
import React from 'react';
import { recklessNeue } from '../fonts/fonts'

export default function Join() {
  return (
    <div className="container">
      <div className="join-content">
        <h1 className={recklessNeue.className}>Join Our Team</h1>
        <div className="join-text">
          <p>We're looking for incredible full stack engineers to help us build the future of personalized nutrition. If you're interested, give us a shout at:</p>
          <p><a href="mailto:join@cleaneats.app">join@cleaneats.app</a></p>
        </div>
      </div>
    </div>
  );
} 