import { useState } from "react"

function Alltask(){

const [editopen, seteditopen]= useState(null)

const btnEdit = <button className="btn-edit" onClick={() => seteditopen(true)}>Edit</button>
const btnCancelfirst = (<button className="btn-cancel" onClick={()=>{seteditopen(false)}}>Cancel</button>)
const btnCancelsecond = (<button className="btn-cancel" onClick={()=>{seteditopen(false)}}>Cancel</button>)
const btnCancelthird = (<button className="btn-cancel" onClick={()=>{seteditopen(false)}}>Cancel</button>)
const btnCancelfourth = (<button className="btn-cancel" onClick={()=>{seteditopen(false)}}>Cancel</button>)
const btnSave = (<button className="btn-save">Save</button>)
const Editform = (<form>
    <input className="input-tag" type="text" placeholder="change subject" />
</form> )

    return(
        <>
        <div className="All-task-container">
            <div className="task-1">
                <div className="progress-1">
                    <h4 className="progress-text">In progress</h4>
                </div>
                <h2 className="task-text">
                    Read poem & answer questions
                </h2>
                <h3 className="subject">
               English Literature
               <button className="btn-edit" onClick={() => seteditopen(1)}>Edit</button>
               {editopen === 1 && Editform}
                </h3>
                {/* {editopen && Editform} */}
                {editopen && btnCancelfirst}
                {editopen && btnSave}
                <div className="comments">
                    <h4>May 28, 2026</h4>
                    <h4>12 comments</h4>
                </div>
            </div>

            <div className="task-1">
                <div className="progress-2">
                    <h4 className="progress-text">TO DO</h4>
                </div>
                <h2 className="task-text">
                    Prepare for the math test
                    
                </h2>
                <h3 className="subject">English Literature
               <button className="btn-edit" onClick={() => seteditopen(2)}>Edit</button>
               {editopen === 2 && Editform}                    
                    {/* {btnEdit} */}
                </h3>
                {editopen && btnCancelsecond}
                {editopen && btnSave}
                <div className="comments">
                    <h4>May 30, 2026</h4>
                    <h4>4 comments</h4>
                </div>
            </div> 
            <div className="task-1">
                <div className="progress-3">
                    <h4 className="progress-text">TO DO</h4>
                </div>
                <h2 className="task-text">
                    Create a comic strip with a story
                </h2>
                <h3 className="subject">Social studies
               <button className="btn-edit" onClick={() => seteditopen(3)}>Edit</button>
               {editopen === 3 && Editform}
                </h3>
                {/* {editopen && btnCancel} */}
                {editopen && btnSave}
                <div className="comments">
                    <h4>June 13, 2026</h4>
                    <h4>9 comments</h4>
                </div>
            </div>  
            <div className="task-1">
                <div className="progress-4">
                    <h4 className="progress-text">DONE</h4>
                </div>
                <h2 className="task-text">
                    Prepare for English test  
                </h2>
                <h3 className="subject">English Literature
               <button className="btn-edit" onClick={() => seteditopen(4)}>Edit</button>
               {editopen === 4 && Editform}                    
                </h3>
                {/* {editopen && btnCancel} */}
                {editopen && btnSave}
                <div className="comments">
                    <h4>May 17, 2026</h4>
                    <h4>6 comments</h4>
                </div>
            </div>                       
        </div>
        </>
    )
}
export default Alltask