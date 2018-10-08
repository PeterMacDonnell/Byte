// import React from 'react';
// import { Button, Container, NavbarBrand, NavbarToggler, Collapse, NavbarNav, NavItem, NavLink } from 'react-bootstrap';



// class NavbarHamburger extends React.Component {
//     constructor(props, context) {
//       super(props, context);

//       this.handleShow = this.handleShow.bind(this);
//       this.handleClose = this.handleClose.bind(this);
  
//       this.state = {
//         show: false
//       };
//     }
  
//     handleClose() {
//       this.setState({ show: false });
//     }
  
//     handleShow() {
//       this.setState({ show: true });
//     }

//     render() {
//         return (
  

// <div>
// <NavbarHamburger show={this.state.show} onHide={this.handleClose}>

// color="green lighten-4" style={{marginTop: '20px'}} light>
//   <Container>
//     <NavbarBrand>
//       Byte
//     </NavbarBrand>
//     <NavbarToggler tag="button" className="aqua-gradient" onClick={this.toggleCollapse('navbarCollapse13')}>
//       <span className="white-text">
//         <React.Fa icon="bars" />
//       </span>
//     </NavbarToggler>
//     <Collapse id="navbarCollapse13" isOpen={this.state.collapseID} navbar>
//       <NavbarNav Right>
//         <NavItem active>
//           <NavLink to="#!">Home</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="#!">Can't Remember</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink to="#!">Meet the Team</NavLink>
//         </NavItem>
//       </NavbarNav>
//     </Collapse>
//   </Container>
// </NavbarHamburger>
// </div>
// )
// }
// };


// export default NavbarHamburger;