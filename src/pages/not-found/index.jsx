import React from 'react'
import PublicFooter from '../../components/public-footer'
import PublicHeader from '../../components/public-header'

const NotFound = () => {
  return (
    <div className="min-h-[100vh] w-full font-sans text-xs md:text-sm bg-creme text-burnt-sienna-darker">
      <PublicHeader />
      <main id="not-found" className="max-w-screen-lg mx-auto px-2 text-base">
        <div className="px-4 pt-8 w-full max-w-980px mx-auto flex flex-col items-center">
          <div className="text-5xl text-center font-bold">404 Page Not Found</div>
          <div className="text-xl px-4 py-6 text-center">This is not the page you are looking for.</div>
        </div>
      </main>
      <div className="absolute bottom-0 right-0 left-0">
        <PublicFooter />
      </div>
    </div>
  )
}

export default NotFound