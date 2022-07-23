
import "./index.css"
function App() {

  return (
    <div className="App">
      <div class="topnav">
        <a class="active" href="index.html">Home</a>
        <a href="music.html">Music Inventory</a>
        <a href="sports.html">Sports Inventory</a>
        <a href="tech.html">Tech Inventory</a>
        <a href="contactus.html">Contact Us</a>
      </div>
      <div className="some"> 
        Welcome to PG Inventory 
      </div>
      <div className="review">
        TOP REVIEWS
      </div>
      <div className="review_content">
          
          &#9733; &#9733; &#9733; &#9733; &#9734;
          <br/>
          "The Sports inventory is my dream come true. It contains equipment required for any sport you can think of" 
          <br/>
          - <u>Anish Kulkarni</u> 
      </div>
      <div className="review_content">
          &#9733; &#9733; &#9733; &#9734; &#9734;
          <br/>
          "The Music inventory is amazing. Everything is maintained properly" 
          <br/>
          - <u>Peter Griffin</u> 
      </div>
      <div className="review_content">
          &#9733; &#9733; &#9733; &#9733; &#9733;
          <br/>
          "Absolutely Amazing"
          <br/>
          - <u>James Bond</u> 
      </div>
      <br/>
      <br/>
      <div className="formdiv">
        !! <u>Sign up to the newsletter</u> !!
        <form>
          Name&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: <input type='text'></input><br/>
          Room Number : <input type='text'></input> <br/>
          Email Address&nbsp; : <input type='text'></input> <br/>
          Phone Number : <input type='text'></input> <br/>
          <br/>
          <input type="submit" value="Submit" className="submitbut"></input>
        </form>
      </div>
      
    </div>
  )
}

export default App
