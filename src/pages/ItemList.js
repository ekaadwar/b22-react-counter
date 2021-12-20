import React, { Component } from "react";
import qs from "querystring";

class ItemList extends Component {
  state = {
    data: [
      { name: "Kopi Teguh", price: 18000 },
      { name: "Kopi Joni", price: 20000 },
      { name: "Kopi Jontor", price: 12000 },
      { name: "Teh Talua Simpang Bakti Ibu", price: 18000 },
      { name: "Teh Talua Kubang Putiah", price: 20000 },
      { name: "Kopi Susu Bu Susi", price: 22000 },
    ],
    searchInput: "",
    searchEnd: "",
  };

  onSearch = (event) => {
    if (event.keyCode === 13) {
      this.props.history.push(`/item-list?search=${this.state.searchInput}`);
    }
  };

  parseQuery = (str) => {
    return qs.parse(str.slice("1"));
  };

  componentDidMount() {
    const { search } = this.parseQuery(this.props.location.search);
    this.setState({ searchInput: search });
  }

  doSearch = () => {
    const { search } = this.parseQuery(this.props.location.search);
    if (this.state.searchEnd !== search) {
      this.setState({ searchEnd: search }, () => {
        console.log(this.state.searchEnd);
      });
    }
  };

  componentDidUpdate() {
    this.doSearch();
  }

  render() {
    return (
      <div className="mx-36 my-11">
        <input
          value={this.state.searchInput}
          className="border border-gray-500 rounded w-full h-8 mb-5 px-2"
          type="text"
          onChange={(event) =>
            this.setState({ searchInput: event.target.value })
          }
          onKeyDown={this.onSearch}
        />

        <div className="grid grid-cols-3 gap-5">
          {this.state.data
            .filter((item) =>
              item.name.toLowerCase().includes(this.state.searchEnd)
            )
            .map((item, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="bg-gray-500 h-36 rounded-xl"></div>
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ItemList;
