import React from "react";

class Counter extends React.Component {
  subData = () => {
    let { num: result } = this.props;

    this.alertMessage(result, false, () => {
      const data = {
        result: result - 1,
        limit: "",
      };

      this.props.change(data);
    });
  };

  sumData = () => {
    let { num: result } = this.props;

    this.alertMessage(result, true, () => {
      this.props.change({ result: result + 1, limit: "" });
    });
  };

  alertMessage = (result, isSum, cb) => {
    if (isSum) {
      result++;
    } else {
      result--;
    }

    if (result > 10) {
      this.props.change({
        result: this.props.num,
        limit: "This is maximum Number",
      });
    } else if (result < 0) {
      this.props.change({
        result: this.props.num,
        limit: "This is minimum Number",
      });
    } else {
      cb();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="parent">
          <div className="container">
            <h1>{this.props.counterTittle}</h1>

            <div className="counterBody">
              <div className="btn" onClick={this.subData}>
                -
              </div>
              <span>{this.props.num}</span>
              <div className="btn" onClick={this.sumData}>
                +
              </div>
            </div>
            {this.props.messageLimit}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
