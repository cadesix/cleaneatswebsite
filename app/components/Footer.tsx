'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <Link href="/privacypolicy" className={styles.footerLink}>Privacy Policy</Link>
        <Link href="/support" className={styles.footerLink}>Support</Link>
      </nav>
    </footer>
  );
} 