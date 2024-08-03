import Hero from "./Hero";
import { Link } from "react-router-dom";


const Home = ({movie}) =>{


    return(
        <>
            <Hero text="Search Everything you want"/>
            <div className="container" style={{ display:'flex', justifyContent:'space-between' }}>

                <div className="col-lg-2 col-md-4 col-4 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg" className="card-img-top" alt='Star Wars: The Rise of Skywalker' />
                        <div className="card-body">
                            <h5 className="card-title">Star Wars: The Rise of Skywalker</h5>
                            <Link to="/movies/181812" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-4 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/6DTcWoo8wWl2f2YPp21hfGAAD7O.jpg" className="card-img-top" alt='DeadTectives' />
                        <div className="card-body">
                            <h5 className="card-title">DeadTectives</h5>
                            <Link to="/movies/541099" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-4 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/btV7OWc6IbjrwZiB75klmgi3CsY.jpg" className="card-img-top" alt='To Your Last Death' />
                        <div className="card-body">
                            <h5 className="card-title">To Your Last Death</h5>
                            <Link to="/movies/366171" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-4 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/2bhI7Ivk7VmvUaJaDTxJUgOXp1E.jpg" className="card-img-top" alt='The Death & Life of John F. Donovan' />
                        <div className="card-body">
                            <h5 className="card-title">The Death & Life of John F. Donovan</h5>
                            <Link to="/movies/291984" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container" style={{ display:'flex', justifyContent:'space-between' }}>

                <div className="col-lg-2 col-md-3 col-2 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/qtutY89ku1m6i7tchJ3sUOQQBWd.jpg" className="card-img-top" alt='The Death of Antonio Sànchez Lomas' />
                        <div className="card-body">
                            <h5 className="card-title">The Death of Antonio Sànchez Lomas</h5>
                            <Link to="/movies/649819" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 col-2 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/r5O84lMJRMQStl8GGJzAgkkdqP0.jpg" className="card-img-top" alt='Le Daim' />
                        <div className="card-body">
                            <h5 className="card-title">Le Daim</h5>
                            <Link to="/movies/582883" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 col-2 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/loIRe96n7jq9cvjxBOFahDghuG.jpg" className="card-img-top" alt='Matar al dragón' />
                        <div className="card-body">
                            <h5 className="card-title">Matar al dragón</h5>
                            <Link to="/movies/649099" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 col-2 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/ev8PDIuKm2j3m3jWxw497zCLjzu.jpg" className="card-img-top" alt='少年的你' />
                        <div className="card-body">
                            <h5 className="card-title">少年的你</h5>
                            <Link to="/movies/575813" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container" style={{ display:'flex', justifyContent:'space-between' }}>

                <div className="col-lg-2 col-md-3 col-2 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/htVovYJE966Rk2TGiBrbG9g20Ne.jpg" className="card-img-top" alt='La Dernière Folie de Claire Darling' />
                        <div className="card-body">
                            <h5 className="card-title">La Dernière Folie de Claire Darling</h5>
                            <Link to="/movies/482710" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 col-2 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/8cKs4cPTAhAjjRAOjjXFbVnYc1l.jpg" className="card-img-top" alt='返校' />
                        <div className="card-body">
                            <h5 className="card-title">返校</h5>
                            <Link to="/movies/614017" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 col-2 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/nRmPaVH1wuKWk2A66xYORVr3Y7.jpg" className="card-img-top" alt='Il signor Diavolo' />
                        <div className="card-body">
                            <h5 className="card-title">Il signor Diavolo</h5>
                            <Link to="/movies/602518" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 col-2 my-4 mx-4">
                    <div className="card">
                        <img src="https://image.tmdb.org/t/p/w500/jeclnbGov6lbHu8o1ugcOBCUBlU.jpg" className="card-img-top" alt='A pesar de todo' />
                        <div className="card-body">
                            <h5 className="card-title">A pesar de todo</h5>
                            <Link to="/movies/588001" className="btn btn-primary">Show details</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
    
export default Home;