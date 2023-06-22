import React from './header.css'

export default function Header({text}) {
  
  return (
    <div className="header">
       <div className="headerTitles">
        <span className="headerTitleSm">FASHION</span>
        <span className="headerTitleLg">TRENDS</span>

       </div>
       <img className="headerImg" src="//www.modemonline.com/img/_upload/diffusion_showrooms/showappshowroom/slideshow/showappshowroom_20180903103941.jpg" alt="" />

    </div>
  )
}
