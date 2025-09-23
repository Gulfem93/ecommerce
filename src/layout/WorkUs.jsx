import "../css/workUs.css"
import workUs_image from "../image/workout_image.jpg";
function WorkUs() {

    return (
        <>
            <div className="workUs">
                <div className="workUs-container">
                    <div className="workUs-row">
                        <div className="workUs-col-md-5">
                            <h5>WORK WITH US</h5>
                            <h2>Now Let’s grow Yours</h2>
                            <span className="paragraph">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </span>
                            
                            <button className="workUs-button-md">
                                <div className="filter"></div>
                                <span className="workUs-btn-text">Button</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="workUs-background">
                    <img src={workUs_image} alt="image1" className="class_workUs_image" />

                </div>
            </div>


        </>
    )
}

export default WorkUs
