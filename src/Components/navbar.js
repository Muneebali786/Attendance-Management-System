import React from 'react';
import { NavLink, Link } from "react-router-dom";


const Navbar=()=>{
  return (
      <div className="container-fluid nav_bg ">
      <div className='row'>
        <div className="col-10 mx-auto">
       
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    
      <NavLink exact  className="navbar-brand" to="/">
    
      Appedia</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink activeClassName="menu_active" className="nav-link" to="/">
              Home 
             </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink  activeClassName="menu_active"className="nav-link" to="/about">
              About</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  activeClassName="menu_active"className="nav-link" to="/contact">
            Contact</NavLink>
        </li>
        </ul>
        <button type="button" class="btn btn-outline-primary" ><Link to={"/sign-in"}>Login</Link></button>
        <button type="button" class="btn btn-outline-primary"><Link to={"/sign-up"}>Signup</Link></button>
        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Signup</button> */}
        
        {/* <li className="nav-item">
          <Link className="nav-link" to={"/sign-in"}>Login</Link>
        </li> */}
      </div>
    </nav>
    </div>
    </div>
    </div>
  );
};

export default Navbar;

// export default class Navbar extends Component {
//     render() {
//         return(
//             <>
//             <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={"/sign-in"}>Appedia</Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">             
//                    <Link href="/">Home</Link>
//                 </li>   
//                 <li className="nav-item">           
//                    <Link href="/">About</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-in"}>Login</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>



//    <Navbar bg="dark" variant="dark">
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-info">Search</Button>
//     </Form>
//   </Navbar> 

//   <br></br>

// <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div> 
//    </>
//          )
//      }
//  }






      //  <div class="card">
      //     <div class="card-header">
      //       <h5 class="card-title">Employee List</h5>
      //       <span class="d-block m-t-5">use bootstrap <code>Table</code> component</span>
      //     </div>
      //     <div class="card-body">
      //       <div class="table-responsive">
      //         <table class="table"><thead>
      //           <tr>
      //             <th>#</th>
      //             <th>First Name</th>
      //             <th>Last Name</th>
      //             <th>Username</th>
      //           </tr>
      //           </thead>
      //           <tbody>
      //             <tr>
      //               <th scope="row">1</th>
      //               <td>Mark</td>
      //               <td>Otto</td>
      //               <td>@mdo</td></tr>
      //             <tr>
      //               <th scope="row">2</th>
      //                 <td>Jacob</td>
      //                 <td>Thornton</td>
      //                 <td>@fat</td>
      //             </tr>
      //             <tr>
      //               <th scope="row">3</th>
      //               <td>Larry</td><td>the Bird</td><td>@twitter</td></tr></tbody></table></div></div></div>
                    
                    