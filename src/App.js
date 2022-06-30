
import './App.css';
function App() {
  return (
    
    <>
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img  src="../anjali.png" alt="" width="40" height="40" className="d-inline-block align-text-top" style={{borderRadius:"30px"}}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form className="d-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" style={{ color: "blue", fontSize: "20px" ,fontWeight:"bolder"}} href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " style={{ color: "blue", fontSize: "20px",fontWeight:"bolder" }} href="/">About</a>
                </li>

                <button type="button" className="btn btn-primary" style={{fontSize:"20px"}}>Button</button>
              </ul>

            </form>
          </div>
        </div>
      </nav>
      <div className="info">
      <section id="home">
        <h1 class="primary"> This page is a test</h1>
        <p>show my design talent</p>
        <button type="button" className="btn btn-primary" style={{fontSize: "20px"}}>Subscribe</button>
      </section>
    </div>
    <div className="container my-3 mx-3">
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <img  src="../html.png" alt="" width="40" height="30" className="d-inline-block align-text-top"/>
        
       <h2>HTML</h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat accusamus consequuntur illo, harum, quaerat reiciendis tempore eligendi incidunt dolore dignissimos ipsam totam, eos libero?</p>
      </div>
    </div>
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <img  src="../css3.png" alt="" width="40" height="30" className="d-inline-block align-text-top"/>
        
       <h2>CSS</h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat accusamus consequuntur illo, harum, quaerat reiciendis tempore eligendi incidunt dolore dignissimos ipsam totam, eos libero?</p>
      </div>
    </div>
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <img  src="../javascript.png" alt="" width="40" height="30" className="d-inline-block align-text-top"/>
        
       <h2>JAVASCRIPT</h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat accusamus consequuntur illo, harum, quaerat reiciendis tempore eligendi incidunt dolore dignissimos ipsam totam, eos libero?</p>
      </div>
    </div>
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <img  src="../react.png" alt="" width="40" height="30" className="d-inline-block align-text-top"/>
        
       <h2>REACT</h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat accusamus consequuntur illo, harum, quaerat reiciendis tempore eligendi incidunt dolore dignissimos ipsam totam, eos libero?</p>
      </div>
    </div>
   
    
   </div>


    </>
    
    
  );
}

export default App;
