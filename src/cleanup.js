import { useState, useEffect} from "react";

function Hello() {
    useEffect(() => {
        console.log("dont bully me");
        return () => console.log("bullyig you");  // function 기능으로 hi(){ console.log("dont bully me"); return 새로운 function 정의 해준것과 같음;}
    }, []);
    return <h1>Hello Peter </h1>;
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);

    return <div>
        {showing ? <Hello/> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button> 
    </div>
}

export default App;