import React, { Component } from "react";

class NoRecordsInfo extends Component {
    render() {
        if (!this.props.areRecords) {
            return (
                <div className="noRecordsInfo row h-90">
                    <span className="col text-center my-auto">
                        There are no records to show.
                    </span>
                </div>
            );
        }

        return null;
    }
}

export default NoRecordsInfo;
