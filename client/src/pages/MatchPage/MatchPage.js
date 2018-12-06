import {Col, Container, Row} from '../../Components/Grid/index';
import React from "react";
import axios from "axios";
import 'firebase/firestore';
import firebase from 'firebase/app';

export default class roomPage extends React.Component{

    state = {
        matchArray: [],
    }
// *******GET REQUEST SNAPSHOT
componentDidMount(){
    // this.getSnapshotBeforeUpdate();
}

getSnapshot(){

const db = firebase.firestore();
db.collection('rooms').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
    //   const matchArray = {
    //         place_id: doc.id,
    //         vote: doc.data(),
        }
    //   console.log(doc.id, '=>', doc.data());
      console.log('ma', matchArray);
    //   this.setState({matchArray: matchArray});
    });
  
  .catch((err) => {
    console.log('Error getting documents', err);

})
  });
  
}
    render() {
    return(
    <Container>
        <Row>
            <Col size="12">
                <div className="card wholecard" style={{width: '18rem', height: '30rem'}}>
                    <img className="card-img-top" style={{width: '18rem', height: '30rem'}} src={"https://www.cornerstoneberkeley.com/files/2017/05/Cornerstone-Berkeley15.jpg"} alt="Restaurant" />
                    <div className="card-body">
                    <h5 className="card-title">{"CornerStone"}</h5>
                    <p className="card-text text-center">Rating: {"4/5"}</p>
                    <p className="card-text text-center">Price: {"2/4"}</p>
                    <p className="card-text text-center">Phone: {"(510) 214-8600"}</p>
                    <p className="card-text text-center">Address: {"2367 Shattuck Ave, Berkeley, CA 94704"}</p>
                    <p className="card-text text-center">Reviews: {"Very cool venue for music. Great lighting & acoustics. Perfect size allowing for great interaction between artist and audience. Will definitely be going to more shows here 💯😎"}</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    )}
}