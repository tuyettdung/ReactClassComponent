import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    values:{
        id: "",
        name: "",
        price: "",
        description: "",
        type: "phone",
        image: "",
    },
    errors:{
        id: "(*)",
        name: "(*)",
        price: "(*)",
        description: "(*)",
        type: "(*)",
        image: "(*)",
    },
    invalid: true,

   
  };

  handleCHangeInput = (e) => {
    const { id, value } = e.target;
    //xử lý cho values:
    let newValues = {...this.state.values};
    newValues[id] = value;
    //xử lý cho error

    let dataType = e.target.getAttribute('data-type');
    let minMaxLength = e.target.getAttribute('data-min-max-length');

    let messageError ='';
    if(value.trim() === ''){
        messageError = id + ' can not be blank';
    }else {
        //check validation còn lại
        switch(dataType){
            case 'number' :{
                let regexNumber = /^[0-9]+$/;
                if(!regexNumber.test(value)){
                    messageError = id + ' is number'
                }

            };break;
            case 'letter':{
                let regexLetter = /^[A-Z a-záàạảãăặẵẳằắ]+$/;
                if(!regexLetter.test(value)){
                    messageError = id + ' is letter'

                }
            };break;
        }

        if(minMaxLength) {
            let [min,max] = JSON.parse(minMaxLength);
            if(value.length < min || value.length > max) {
                messageError = id + ` from ${min} - ${max} letter`;
            }
        }

    }
    let newErrors = {...this.state.errors};
    newErrors[id] = messageError;
    //check valid forrm
    let res = this.checkInvalidForm(newErrors);
    //setState
    this.setState({
        values:newValues,
        errors: newErrors,
        invalid: res

    })
  };

/**
     * errors:  id: '(*)',
        name: '(*)',
        image: '(*)',
        price: '(*)',
        description: '(*)'
        //Không hợp lệ là đúng thì return true
    }
     */
checkInvalidForm= (errors) => {
    let output = false;
    for (let key in errors){
        if(errors[key] !== ''){
            output = true;
            break;
        }
    }
    return output

  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const {addItem} = this.props;
    addItem(this.state.values);

  }
 
  render() {
   
    console.log(this.state);
    const {id,name,price,image,description,type} = this.state.values;
    return (
      <form className="card mb-2" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">
          <h3>Product Info</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>id</p>
                <input
                data-min-max-length = '[2,6]'
                data-type='number'
                  className="form-control"
                  id="id"
                  name="id"
                  onInput={this.handleCHangeInput} value={id}
                />
                <p className="text text-danger">{this.state.errors.id}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>image</p>
                <input value={image} className="form-control" id="image" name="image"  onInput={this.handleCHangeInput} />
                <p className="text text-danger">{this.state.errors.image}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>name</p>
                <input value={name} data-type='letter' className="form-control" id="name" name="name"  onInput={this.handleCHangeInput} />
                <p className="text text-danger">{this.state.errors.name}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>ProductType</p>
                <select value={type} className="form-control" id="type" name="type"  onInput={this.handleCHangeInput}>
                  <option value="phone">phone</option>
                  <option value="laptop">laptop</option>
                  <option value="tablet">tablet</option>
                </select>
                <p className="text text-danger">{this.state.errors.type}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>price</p>
                <input value={price} data-type="number" className="form-control" id="price" name="price"  onInput={this.handleCHangeInput} />
                <p className="text text-danger">{this.state.errors.price}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>description</p>
                <input
                value={description}
                  className="form-control"
                  id="description"
                  name="description"  onInput={this.handleCHangeInput}
                />
                 <p className="text text-danger">{this.state.errors.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2" disabled={this.state.invalid} type="submit" >
            Create
          </button>
          <button className="btn btn-primary " type="submit" onClick={()=>{
            this.props.updateItem(this.state.values)
          }}>
            Update
          </button>
        </div>
      </form>
    );
  }
}
