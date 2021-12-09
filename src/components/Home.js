function Home() {
    //Since the inline CSS is written in a JavaScript object, 
    //properties with two names, like background-color, and text-align must be written with camel case
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h1 style={{textAlign: "center", 
                        marginTop: "20px", fontSize: '100px'}}>PracticeReact</h1>

                    <div class="alert alert-primary" role="alert" style={{padding: '30px', fontSize: '30px'}}>
                        Learning, practicing, and keeping up to date with React.
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}

export default Home;