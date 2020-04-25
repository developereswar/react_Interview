import React from "react";
import Axios from "axios";
import DataTable from "react-data-table-component";
import Theme from "./Theme";
import FilterComponent from "./FIlterComponent";
const columns = [
  {
    name: "#ID",
    selector: "id",
    sortable: true,
  },
  {
    name: "Post Title",
    selector: "title",
    sortable: true,
  },
  {
    name: "Post Content",
    selector: "body",
    sortable: true,
    bold: true,
  },
];

const Url = "https://jsonplaceholder.typicode.com/posts";
class TablePage extends React.Component {
  constructor() {
    super();
    this.SearchRef = React.createRef();
    this.state = {
      data: null,
      filterText: null,
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.getTableData();
  }

  getTableData = () => {
    const { filterText } = this.state;
    Axios.get(Url).then((result) => {
      const data = result.data.map((item) => {
          return item;
      });
      this.setState({ data });
    });
  };

  handleClear = () => {
    const { filterText, resetPaginationToggle } = this.state;
    if (filterText) {
      let setResetPaginationToggle = !resetPaginationToggle;
      let filterText = "";
      this.setState({ setResetPaginationToggle, filterText });
    }
  };

  getFilterText = (e) => {
    const {data} = this.state;
    let filters =  data.filter(val =>{
        if(val.body.includes(e) || val.title.includes(e)) return val
       
     })

     this.setState({filterText:e})
    
     if(filters.length){this.setState({data: filters})}else{
       this.getTableData()
     }
  };

 

  render() {
    const { data, filterText } = this.state;
    return (
      <>
        <FilterComponent
          onFilter={(e) => {
            this.getFilterText(e.target.value);
          }}
          onClear={this.handleClear}
          filterText={filterText}
        />
        {data && (
          <DataTable
            title="Post Table"
            columns={columns}
            data={data}
            pagination
            theme="solarized"
            customStyles={Theme}
          />
        )}
      </>
    );
  }
}

export default TablePage;
