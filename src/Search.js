import React from 'react' ;
import Rating from './Rating';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
        }

    }
    // changeSearch = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     },
    //         () => this.props.rummage(this.state.name)
    //     )
    // }

    render() {
        const {} = this.state;
        return (

            <div className="container">
                <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                    <div className="input-group">
                        <input onChange={e => this.props.rummage(e.target.value)} type="search" placeholder="Type movie name to search" aria-describedby="button-addon1" className="form-control border-0 bg-light width" />
                        <div className="input-group-append">
                            <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Search ;