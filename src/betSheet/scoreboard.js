function Scoreboard() {

    const bettors = ['mark', 'nick', 'mike', 'geo', 'david'];

    return (
        <>
            <h1>Scoreboard</h1>
            {bettors.map(bettor => {
                <div className="scoreboard-container">

                </div>
            })}


        </>

    )
}

export default Scoreboard;