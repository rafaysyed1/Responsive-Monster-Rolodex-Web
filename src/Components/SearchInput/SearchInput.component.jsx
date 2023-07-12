import { Component } from "react";
import './SearchInput.style.css'
class SearchInput extends Component {
    render() {
        return (
            <div>
                <input
                    className={`search-box ${this.props.className}`}
                    type="search"
                    placeholder={this.props.placeHolderText}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        )
    }
}
export default SearchInput