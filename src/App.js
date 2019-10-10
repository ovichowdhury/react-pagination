import React from 'react';
import './App.css';
import Pagination from "./components/presentation/Pagination";
import PaginationSerial from "./components/presentation/PaginationSerial";

class App extends React.Component {

    state = {
        page: 1,
        disableIncrement: false,
        disableDecrement: true,
        maxPage: 10
    }

    handlePageIncrement = () => {
        if(this.state.page < this.state.maxPage)
            this.setState({ page: this.state.page + 1, disableDecrement: false})
        else
            this.setState({disableIncrement: true});
    }

    handlePageDecrement = () => {
        if(this.state.page <= 1)
            this.setState({disableDecrement: true});
        else
            this.setState({ page: this.state.page - 1, disableIncrement: false });
    }

    onPageChange = (pageNum) => {
        console.log(pageNum);
    }

    render() {
        return (
            <div className="App">
                <br />
                <h1>{this.state.page}</h1>
                <Pagination 
                    increment={this.handlePageIncrement} 
                    decrement={this.handlePageDecrement}
                    disableIncrement={this.state.disableIncrement}
                    disableDecrement={this.state.disableDecrement}
                />

                <br />

                <PaginationSerial 
                    increment={this.handlePageIncrement} 
                    decrement={this.handlePageDecrement}
                    disableIncrement={this.state.disableIncrement}
                    disableDecrement={this.state.disableDecrement}
                    min={1}
                    max={10}
                    onPageChange={this.onPageChange}
                />

            </div>
        );
    }
}

export default App;
