import Graph from "./Graph";


const Stats=(
   { wpm,
    accuracy,
    correctChars,
    inCorrectChars,
    missedChars,
    extraChars,
    graphData }
)=>{
    let timeSet=new Set();
    const newGraphData = graphData.filter((data) => {
        if (!timeSet.has(data[0])) {
             timeSet.add(data[0]);
             return data;
        } 
    });
    return (
        <div className="stats-box">
            <div className="left-stats">
                <div className="title">WPM</div>
                <div className="subtitle">{wpm}</div>
                <div className="title">Accuracy</div>
                <div className="subtitle">{accuracy}</div>
                <div className="title">Characters</div>
                <div className="subtitle">{correctChars}/{inCorrectChars}/{missedChars}/{missedChars}/{extraChars}</div>
            </div>
            <div className="right-stats">
                <Graph graphData={newGraphData}/>
            </div>
        </div>
    )
}
export default Stats;