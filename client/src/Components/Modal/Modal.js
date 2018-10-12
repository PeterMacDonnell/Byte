import React from 'react';
import { Popover, Tooltip, Button, OverlayTrigger } from 'react-bootstrap';

class Modal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      
      return (
        <div>
          <p>Click to get the full modal experience</p>
  
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Launch demo modal
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Give me your details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
            {/* Modal */}
<div className="modal fade" id="reservationModal" tabIndex={-1} role="dialog" aria-labelledby="reservationModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <div className="row">
          <div className="col-lg-12">
            <div className="bg-image" style={{backgroundImage: 'url(images/reservation_1.jpg)'}} />
          </div>
          <div className="col-lg-12 p-5">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <small>CLOSE </small><span aria-hidden="true">×</span>
            </button>
            <h1 className="mb-4">Send a Byte Survey</h1>  
            <form action="#" method="post">
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="m_people">How Many People</label>
                  <select name id="m_people" className="form-control">
                    <option value={1}>2 People</option>
                    <option value={2}>3 People</option>
                    <option value={3}>4 People</option>
                    <option value={4}>>5+ People</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="m_date">Date</label>
                    <input type="text" className="form-control" id="m_date" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="m_time">Time</label>
                    <input type="text" className="form-control" id="m_time" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="food_input">Type of Eating</label>
                    <select name id="m_people" className="form-control">
                      <option value="breakfast">Breakfast</option>
                      <option value="brunch">Brunch</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                      <option value="drinks">Drinks</option>
                      <option value="drinks">Dessert</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="submit" className="btn btn-primary btn-lg btn-block" defaultValue="Get Some Bytes" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  </div></div>
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

  export default Modal;
  
