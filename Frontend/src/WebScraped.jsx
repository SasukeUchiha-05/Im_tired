import { Button } from "bootstrap";

function Webscraped(){
    const handleClick = async () => {
        fetch('https://im-tired-ten.vercel.app/webscraped')
        console.log('Button clicked.')

    }
    return(
        <>
        <div>
            Want to know all the information going on in the world about cognitive disorders? Click this button.
            <button onClick={handleClick}></button>
        </div>
        </>
    )
}
export default Webscraped;
