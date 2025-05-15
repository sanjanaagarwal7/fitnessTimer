import { forwardRef } from "react";
import "./Result.css";


const Result = forwardRef(function Result({reset,result,win},ref){
    const ans=((result/60)/1000).toFixed(2);
    return(
        <dialog ref={ref}>
            {ans>0 && <h1>Well done!</h1>}
            {ans<=0 && <h1>You failed</h1>}
            {ans>0 && <p> You did it {ans} mins before . You can proceed to the next exercise</p>}
            {ans<=0 && <p>You can always try again</p>}
            <form method="dialog" onSubmit={ans>0 ? win : reset}>
                <button>close</button>
            </form>
        </dialog>
    )
}
)
export default Result;