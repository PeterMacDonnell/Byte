import React from "react";
import axios from "axios";
// eslint-disable-next-line
// import{ firebase, db } from "../../firebase/index";
import {Col, Container, Row} from '../../Components/Grid/index';
import 'firebase/firestore';
import firebase from 'firebase/app';




class RoomPage extends React.Component {

   state = {
      array_of_places: [],
      place_id: [],
      detailedArray: [],
      places_review: [],
      roomNumber:"",
    }

  generateRoomNumber () {
    let roomNumber = Math.floor(1000 + Math.random() * 9000);
    // return roomNumber
    console.log('rn',roomNumber)
    const db = firebase.firestore();
    const data = {
      roomNumber: roomNumber,
      };
     console.log('data', data)
      // Add a new document in collection "rooms" with ID 'roomNumber'
     const setDoc = db.collection('rooms').doc(`${roomNumber}`).set(data)
     this.setState ({ roomNumber: roomNumber });
    }

  api_call_function () {
    const food_input = "restaurants";
    const location_input = "94607";
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    axios.get("https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?query=+"+food_input+"+in+"+location_input+"+&key="+api_key)
    .then(res => {
      const array_of_places = res.data.results;
      array_of_places.length = 10;
      const places_id = array_of_places.map(place => place.place_id);
      this.setState({array_of_places: array_of_places});
      this.api_places_details(places_id);
      console.log(array_of_places,"AP");
    })
  }

  api_places_details(places_id) {
    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    const place_holder = [];
    // console.log(places_id);
    places_id.forEach(element => {
      axios.get("https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/place/details/json?placeid="+element+"&fields=photo,name,rating,price_level,formatted_address,id,formatted_phone_number,scope,type,opening_hours,website,review&key="+api_key)
      .then(res => {
        console.log(res)
        place_holder.push(res.data.result)
        this.setState({detailedArray: place_holder});
     
        })
      })
    };

    

  addVotes = (place, vote, index) => {
    // REMOVE CARD FROM PAGE:
    console.log('place',place, 'vote', vote, 'index', index)
    // traditional method
    const oldDetailedArray = this.state.detailedArray;
    const newDetailedArray = oldDetailedArray.slice(0, index).concat(oldDetailedArray.slice(index + 1));
    this.setState({detailedArray: newDetailedArray});
    if (newDetailedArray == 0){
      // alert('thanks!')
      // <Route path="/match" component={Matchpage}/>
      // <Redirect to='/match'  />
      this.props.history.push('/match');
    }
    // official advanced method
    // this.setState((prevState) => {
    //   const oldDetailedArray = prevState.detailedArray;
    //   const newDetailedArray = oldDetailedArray.slice(0, index).concat(oldDetailedArray.slice(index + 1));
    //   return {
    //     detailedArray: newDetailedArray,
    //   };
    // });
    // FIREBASE SECTION	   
    const db = firebase.firestore();	 
    let colRef = db.collection('rooms')
   

   /// Batch Thing //	
  const batch = db.batch();
  // const detailedArray = this.statedetailedArray	batch.set(ref, {
    let ref = colRef.doc(`${place.id}`)
    batch.set(ref, {
      vote: `${vote}`,	
    })	

return batch.commit()
  .then(data => {
    console.log('good')
  })
  .catch(error => {
    console.log('there is an error')
  })
 
  // const id = place.id; // "f716a951b4294c0b03a97d4ae1414408dc254ad3"
  // const vote = place.vote; // 'yes' or 'no'



//GET REQUEST SNAPSHOT
// db.collection('rooms').get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.id, '=>', doc.data());
//       console.log('ss', snapshot)
//     });
//   })
//   .catch((err) => {
//     console.log('Error getting documents', err);
//   });
};

    componentWillMount(){
      this.generateRoomNumber();
    }

  componentDidMount() {
    this.api_call_function();
   
  }



  render() {
    
    console.log('in RoomPage, props:', this.props);

    const api_key = "AIzaSyA7KHhrTUzj_S8Vo1hiPjVMsZKdXKfzpv4";
    console.log('this.state.detailedArray:', this.state.detailedArray)
    return (
      
      <div>
        <h1> Welcome to The Byte App!</h1>
        <div>
          <Container>
            <Row>
              {this.state.detailedArray.map((place, index) => (
                <Col size="3">
                   <div className="card wholecard" style={{position: 'relative', width: '18rem', height: '30rem'}} onClick={() => console.log('clicked on:', place.name)}>
                    <img className="card-img-top" style={{position: 'relative', width: '18rem', height: '10rem', borderRadius: 5}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${api_key}`} alt="Restaurant" />
                    <div className="card-body" style={{lineHeight: '1'}}>
                      <h5 className="card-title">{place.name}</h5>
                      <p className="card-text text-center">Rating: {place.rating}/5</p>
                      <p className="card-text text-center">Price: {place.price_level}/4</p>
                      <p className="card-text text-center">Phone: {place.formatted_phone_number}</p>
                      <p className="card-text text-center">Address: {place.formatted_address}</p>
                      <button onClick={() => this.addVotes(place, 1, index)} name="Yes" id={place.place_id} value="1" style={{fontSize: '16px', fontFamily: 'Raleway, sans serif', backgroundColor: '#D0DE4b'}} >Yes</button>
                      <button onClick={() => this.addVotes(place, 0, index)} name="No" id={place.place_id}  value="0" style={{fontSize: '16px', fontFamily: 'Raleway, sans serif', backgroundColor: '#F6422B', float: 'right'}} >No</button>
                    </div>
                  </div>
                </Col>
              ))}
           </Row>
          </Container>
              </div>
      </div>
    )
  }
};

export default RoomPage;