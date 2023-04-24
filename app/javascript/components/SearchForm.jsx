import React from "react"
// import ReactDOM from 'react-dom'

// import PropTypes from "prop-types"
class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      min_price: '',
      max_price: '',
      level: '',
      author_name: '',
      minError: 'none',
      maxError: 'none'

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = (event) => {
    event.preventDefault();

    const query = `min_price=${encodeURIComponent(this.state.min_price)}&max_price=${encodeURIComponent(this.state.max_price)}&level=${encodeURIComponent(this.state.level)}&author_name=${encodeURIComponent(this.state.author_name)}`
    const url = `/search?${query}`
   
    fetch(url, {
      methods: "GET", 
      headers: {
        'Accept': 'application/javascript',
        'Content-Type': 'application/javascript'
      },
    }).then(response => response.text())
    .then(response => {
      eval(response);
    })
    .catch(error => console.error(error));
  };

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState(prevState => ({
      [name]: value
    }));

    if(name == 'min_price'){
      let maxValue = document.getElementsByName('max_price')[0].value

      if(maxValue != ''){
        if(parseInt(value) <= parseInt(maxValue)) {
          this.setState({
            minError: 'none',
          });
        } else {
          this.setState({
            minError: 'block',
          });
  
        }
      }
      
    }

    if(name == 'max_price'){
      let minValue = document.getElementsByName('min_price')[0].value
      if(minValue != ''){
        if(parseInt(value) >= parseInt(minValue)) {
          this.setState({
            maxError: 'none',
          });
        } else {
          this.setState({
            maxError: 'block',
          });
       }
     }
    }
  }

  
  
  render () {
    const minStyle = {
     display: this.state.minError
    };

    const maxStyle = {
      display: this.state.maxError
    };
    return (
      <form className="d-flex" id="filter_form" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="min_price">Minimum price:</label>
            <input type="text" name="min_price" className="form-control" value={this.state.min_price} onChange={this.handleChange} />
            <label id="min_price-error" className="error" htmlFor="min_price" style={minStyle}>Minimum value cannot be greater than maximum value</label>
          </div>
      
          <div className="col-md-3">
            <label htmlFor="max_price">Maximum price:</label>
            <input type="text" name="max_price" className="form-control" value={this.state.max_price} onChange={this.handleChange} />
            <label id="max_price-error" className="error" htmlFor="max_price" style={maxStyle}>Maximum value cannot be less than minimum value</label>

          </div>
      
          <div className="col-md-2">
            <label htmlFor="level">Level</label>
            <select name="level" className="form-control" value={this.state.level} onChange={this.handleChange}>
              <option value="">Please select value</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
      
          <div className="col-md-2">
            <label htmlFor="author_name">Author Name</label>
            <input type="text" name="author_name" className="form-control" value={this.state.author_name} onChange={this.handleChange} />
          </div>
      
          <div className="col-md-2">
            {/* <input type="submit" name="commit" value="Filter" className="btn btn-primary" data-disable-with="Filter" /> */}
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm
