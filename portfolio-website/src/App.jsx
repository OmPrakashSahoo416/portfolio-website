
import './App.css'
import HomePage from './components/HomePage'

function App() {

  // document.getElementById("moving").addEventListener("wheel", (e) => {
  //   e.preventDefault();  // Stop the default scrolling behavior
  // }, { passive: false });
  

  return (
    
        <div className="  w-full h-full">
          <img src=""></img>
          {/* <div id="moving" className="w-24 overflow-hidden h-24 rounded-full bg-yellow-50 absolute opacity-20 -z-1 shadow-2xl"></div> */}


          <HomePage></HomePage>
        </div>
      
  )
}

export default App
