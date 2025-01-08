'use client';
import React from 'react';
import { recklessNeue } from '../fonts/fonts'


export default function Support() {
  return (
    <div className="container">
      <div className="support-content">
        <h1 className={`title ${recklessNeue.className}`}>Support</h1>
        <p>For any questions or concerns, please contact us at support@cleaneats.app</p>
      </div>
    </div>
  );
} 