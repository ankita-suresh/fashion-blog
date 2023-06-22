import './sidebar.css'

export default function Sidebar() {
  return (
   
     <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
        src="https://wwd.com/wp-content/uploads/2023/01/AlaiaNY_158.jpg?crop=0px%2C543px%2C5400px%2C3022px&resize=1000%2C563https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVwuRpp6s2eBQIAm7hyF7vYTC7CZycNa3gaaw6qBwf1ne9vi_d_I3La8sGMBnMKiED3XU&usqp=CAU" 
        alt="" 

        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quisquam, voluptatum. ipsum Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Quisquam, voluptatum.
        </p>
      </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>   
            <li className="sidebarListItem">Fashion</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Design</li>
            <li className="sidebarListItem">Trends</li>
            <li className="sidebarListItem">Vogue</li>
        </ul>

    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
        </div>
    </div>
   
  )
}
