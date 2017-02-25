import React, {Component} from "react";

class SearchBar extends Component {
    // Set up the class state
    constructor(props){
        super(props);
        this.state = {search_text: ""};
    }

    render(){
        return (
            <div>
                 <input 
                    value = {this.state.search_text}
                    onChange = {(event)=>{this.setState({search_text: event.target.value})}} />
                    
                    <button onClick={event => this.onSearch(this.state.search_text)} className="btn btn-success">Search</button>
            </div>
        );
    }

    // handles the event that a user clicks on the search button
    onSearch(search_text){
        this.props.onSearchSubmit(search_text);
    }
}

export default SearchBar;