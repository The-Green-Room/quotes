import React from 'react'


class QuoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const MongoClient = require('mongodb').MongoClient;

    // replace the uri string with your connection string.
    const uri = "mongodb+srv://admin:<AcYJ3mlZL5WNo7EB>@cluster0-irqzt.mongodb.net/test?retryWrites=true&w=majority"
    MongoClient.connect(uri, function(err, client) {
      if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
      }
      console.log('Connected...');
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('a quote was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return(
      <div>
        <h1>Please submit a quote!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Quote:
            <input type="text"
                   value={this.state.value}
                   onChange={this.handlechange}
                   />
          </label>
          <input type="submit"
                 value="Submit"
                 />
        </form>
      </div>
    )
  }
}
export default QuoteForm
