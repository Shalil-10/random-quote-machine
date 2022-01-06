function App() {

    const [quotes, setQuotes] = React.useState([])
    const [randomQuote, setRandomQuote] = React.useState("")
    const [color, setColor] = React.useState("#000000")

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json()

            setQuotes(data)
            let randIndex = Math.floor(Math.random() * data.length)
            setRandomQuote(data[randIndex])

        }
        fetchData()
    }, [])

    const getNewQuote = () => {

        const colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
        ]
        let randColorIndex = Math.floor(Math.random() * colors.length)
        setColor(colors[randColorIndex])

        let randIndex = Math.floor(Math.random() * quotes.length)
        setRandomQuote(quotes[randIndex])
    }

    return (
        <div style={{ backgroundColor: color, height: "100vh" }}>
            <div class="cont">

                <div className="card w-50">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body">
                        {randomQuote ? (
                            <>
                                {/* <p className="card-text text-center">&quot;{randomQuote.text}&quot;</p>
                                <p className="card-title text-end">- {randomQuote.author || "No Author"}</p> */}
                                <blockquote className="blockquote mb-0">
                                    <p className="text-center">&quot;{randomQuote.text}&quot;</p>
                                    <footer className="blockquote-footer text-end pt-4"> <cite title="Source Title">{randomQuote.author || "No Author"}</cite></footer>
                                </blockquote>

                            </>
                        ) : (
                            <h2>
                                Loading...
                            </h2>
                        )}

                        <div className="row pt-5">
                            <div className="col-xs-4">
                                <div>
                                    <button style={{ backgroundColor: color }} className="btn btn-warning m-1">
                                        <a href={
                                            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                                            encodeURIComponent(
                                                '"' + randomQuote.text + '" ' + randomQuote.author
                                            )
                                        } target="_blank" >
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </button>
                                    <button style={{ backgroundColor: color }} className="btn btn-danger ">
                                        <a href={
                                            'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
                                            encodeURIComponent(randomQuote.author) +
                                            '&content=' +
                                            encodeURIComponent(randomQuote.text) +
                                            '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
                                        } >
                                            <i className="fab fa-tumblr"></i>
                                        </a>
                                    </button>
                                </div>

                                <div>
                                    <button style={{ backgroundColor: color }} onClick={getNewQuote} className="btn btn-primary">
                                        New Quote
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

ReactDOM.render(<App />, document.getElementById('app'))