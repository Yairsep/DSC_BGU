import React , {useState} from "react";
import GoogleIntegration from "../components/GoogleIntegration";
import Application from "../components/Application";

function Apply() {

    const [isSigned , setIsSigned] = useState(false);

    const googleIntegrationHandler = () => {
        setIsSigned(true);
    }

    return (
        <div>
            <h1>Apply</h1>

            <br/><br/>
            {/*{!isSigned ? <GoogleIntegration/> : <Application/>}*/}
            <Application/>
        </div>
    );
}

export default Apply;
