function Nav() {
    //  function Navclicked(){
    //     document.querySelector('body').classList.toggle("open-1") 
    // }
    //  function SECNavclicked(){
    //     document.querySelector('body').classList.toggle("open-2") 
    // }
    //  function THNavclicked(){
    //     document.querySelector('body').classList.toggle("open-3") 
    // }
    //  function FOUNavclicked(){
    //     document.querySelector('body').classList.toggle("open-4") 
    // }        
return(<>
<div className="NAV-container">
    <div className="NAV-BG">
<div className="Nav">
    <h1>My tasks</h1>
    <div className="right-icon">
       <div className="right-icon-1" tabIndex={0}></div>
       <div className="right-icon-2" tabIndex={0}></div>
    </div>
</div>
<div className="Nav-2" >
    <a href="#">
        <div title="All task" className="heading-1">
        <h3 className="Nav-text-2" tabIndex={0}>All task</h3>
    </div>
    </a>

    <a href="#">
        <div title="To do" className="heading-2" onClick={()=>SECNavclicked()}>
        <h3 className="Nav-text-23" tabIndex={0}>To do</h3>
    </div>
    </a>


    <a href="#">
        <div title="In progress" className="heading-3" onClick={()=>THNavclicked()}>
        <h3 className="Nav-text-24" tabIndex={0}>In progress</h3>
    </div>
    </a>

    <a href="#">
        <div title="Done" className="heading-4" onClick={()=>FOUNavclicked()}>
        <h3 className="Nav-text-25" tabIndex={0}>Done</h3>
    </div>
    </a>

</div>
<div className="Nav-3">
    <h4 className="Nav-text-3">Filters</h4>
    <h4 className="Nav-text-3">Sort By</h4>
</div>
    </div>

</div>

</>)
}
export default Nav;