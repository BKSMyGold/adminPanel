import React, {Component} from 'react'
const $ = require("jquery");
$.DataTable = require("datatables.net");

const columns = [
  {
    title: "Customer Name",
    width: 120,
    data: "Customer Name",
  },
  {
    title: "Cycle Name",
    width: 180,
    data: "Cycle Name",
  },
];

class Table extends Component {
  componentDidMount() {
    $(this.main).DataTable({
      dom: '<"data-table-wrapper"t>',
      data: this.props.names,
      columns,
      ordering: false,
    });
  }
  componentWillUnmount() {
    $(".data-table-wrapper").find("table").DataTable().destroy(true);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        <table ref="main" />
      </div>
    );
  }
}
export default Table;
