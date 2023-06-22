import './post.css'
import { useHistory } from 'react-router-dom'

export default function Post() {
  const history = useHistory();
  const SinglePostComponent = () => {
    history.push("/post/1")
  }

  return (
    <div className="post" onClick={SinglePostComponent}>
      <img className="postImg" src="https://fondationazzedinealaia.org/wp-content/uploads/2020/03/JSC_1.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Fashion</span>
                <span className="postCat">Trends</span>
            </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />  
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
         With growing concerns about the environment, sustainable 
         fashion has gained significant attention. This trend 
         focuses on ethical and eco-friendly clothing, including 
         recycled materials, organic fabrics, and fair trade 
         practices.
    </p>
   </div>
   
  );
}
