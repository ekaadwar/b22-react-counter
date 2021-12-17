import React, { Component } from "react";

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
  };

  render() {
    return (
      <div className="mx-36 my-11">
        <div className="grid grid-cols-3 gap-5">
          {this.state.data.map((item) => (
            <div className="text-center space-y-2">
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
