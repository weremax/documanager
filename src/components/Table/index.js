import React, { Component } from 'react';
import Status from '../Status';
import './styles.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.clicked = this.clicked.bind(this);
    }

    clicked(e) {
        console.log(e);
    }

    renderRow() {
        console.log(this.props.data);
        return this.props.data.map((data, index) => {
            return(
                <div className="TableRow" key={data.id} onClick={this.clicked}>
                    <div className="TableCell">{data.id}</div>
                    <div className="TableCell"><Status status={data.status} /></div>
                    <div className="TableCell">{data.name}</div>
                    <div className="TableCell">{data.author}</div>
                    <div className="TableCell">{data.created}</div>
                    <div className="TableCell">{data.last_modified}</div>
                    <div className="TableCell">{data.modified_by}</div>
                    <div className="TableCell">{data.tags}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="Table">
                <div className="TableRow">
                    <div className="TableHead">Id</div>
                    <div className="TableHead">Staus</div>
                    <div className="TableHead">Name</div>
                    <div className="TableHead">Author</div>
                    <div className="TableHead">Created</div>
                    <div className="TableHead">Last Modified</div>
                    <div className="TableHead">Modified By</div>
                    <div className="TableHead">Tags</div>
                </div>
                {this.renderRow()}
            </div>
        );
    }
}

export default Table;