import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, 
           aspernatur vel? Quo numquam fugiat tenetur veniam praesentium dolores, 
           mollitia at dolore perspiciatis nesciunt aperiam, error necessitatibus sed 
           cumque excepturi enim ratione vero illo accusantium assumenda asperiores,
           Ipsum, sit Quia quos expedita similique atque id adipisci perspiciatis qui
           cum fuga blanditiis?</p>

           <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}

export default NotFound