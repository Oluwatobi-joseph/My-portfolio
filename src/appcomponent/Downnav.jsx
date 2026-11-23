function Downnav(){
    function firstIcon(){
        document.querySelector('.down-nav').classList.toggle("nav-open-1")
    }
    function secondIcon(){
        document.querySelector('.down-nav').classList.toggle("nav-open-2")
    }
    function thirdIcon(){
        document.querySelector('.down-nav').classList.toggle("nav-open-3")
    }
    function fourthIcon(){
        document.querySelector('.down-nav').classList.toggle("nav-open-4")
    }            
    return (<>
      <div className="down-nav-container">
        <div className="down-nav">
            <div tabIndex={0} className="down-nav-1" onClick={()=>firstIcon()}><h5></h5></div>
            <div tabIndex={0} className="down-nav-2" onClick={()=>secondIcon()}><h5></h5></div>
            <div tabIndex={0} className="down-nav-3" onClick={()=>thirdIcon()}><h5></h5></div>
            <div tabIndex={0} className="down-nav-4" onClick={()=>fourthIcon()}><h5></h5></div>
        </div>
    </div>      
    </>)
}

export default Downnav;