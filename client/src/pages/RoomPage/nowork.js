 //   const db = firebase.firestore().collection("rooms")
  // db.settings({
  //   timestampsInSnapshots: true
  // });
  // const data = {
  //   id: place.id, // "f716a951b4294c0b03a97d4ae1414408dc254ad3"
  //   vote: place.vote, // 'yes' or 'no'
  // };

   // const setDoc = db.doc('roomNumber').set(data);
   // const docRef = db.collection('rooms').doc('roomNumber');

// const setRoom = docRef.set({
//   id: {place.id}, // "f716a951b4294c0b03a97d4ae1414408dc254ad3"
//   vote: {place.vote}, // 'yes' or 'no'


    // const db = firebase.firestore();  
    // // db.settings({
    // //   timestampsInSnapshots: true
    // // });
    // const docRef = db.collection("rooms").doc('roomNumber'){
    //   id: place.id, // "f716a951b4294c0b03a97d4ae1414408dc254ad3"
    //   vote: place.vote, // 'yes' or 'no'
    // });


    // increase votes
    // / const voteRef = db.collection('places_id').doc('vote');
// const transaction = db.runTransaction(t => {
//   return t.get(voteRef)
//     .then(doc => {
//       const id = id;
//       const newVote = doc.data().vote + vote;
//       if (newVote <= 1000000) {
//         t.update(voteRef, {vote: newVote});
//         return Promise.resolve('vote increased to ' + newVote);
//       } else {
//         return Promise.reject('Sorry! vote is too big.');
//       }
//     });
// }).then(result => {
//   console.log('Transaction success', result);
// }).catch(err => {
//   console.log('Transaction failure:', err);
// });

//*******GET REQUEST SNAPSHOT
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