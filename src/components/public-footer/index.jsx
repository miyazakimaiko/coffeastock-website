import React from 'react';
import { Link } from 'react-router-dom';

const PublicFooter = () => {
  return (
    <div className="flex justify-between flex-wrap w-full max-w-screen-xl mx-auto p-10">
      <div>
        <Link 
          to="/terms"
          key="terms"
        >
          Terms of Service
        </Link>
        <span className="px-2">|</span>
        <Link 
          to="/privacy"
          key="privacy"
        >
          Privacy
        </Link>
      </div>
      <div>
        <Link to="/">© {new Date().getFullYear()} Maiko Miyazaki</Link>
      </div>
    </div>
  )
}

export default PublicFooter