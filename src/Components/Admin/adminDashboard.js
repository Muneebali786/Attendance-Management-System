import React from 'react';

function Admin() {
  const Users = [
    {
      id: '01',
      name: 'Muneeb',
      email: 'muneebrashid786@gmail.com',
      phone: '0323-4419040'
    },
    {
      id: '02',
      name: 'Hassan',
      email: 'hassan123@gmail.com',
      phone: '0307-4669290'
    },
  ];

  return (
    <ul>
      {Users.map((data) => (
        <li key={data.id}> 
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </li>
      ))}
    </ul>
  );
}

export default Admin;





// class CardHeader extends React.Component {
//     render() {
//       const { image } = this.props;
//       var style = { 
//           backgroundImage: 'url(' + image + ')',
//       };
//       return (
//         <header style={style} id={image} className="card-header">
//           <h4 className="card-header--title">News</h4>
//         </header>
//       )
//     }
//   }
  
//   class Button extends React.Component {
//     render() {
//       return (
//         <button className="button button-primary">
//           <i className="fa fa-chevron-right"></i> Find out more
//         </button>
//       )
//     }
//   }
  
//   class CardBody extends React.Component {
//     render() {
//       return (
//         <div className="card-body">
//           <p className="date">March 20 2015</p>
          
//           <h2>{this.props.title}</h2>
          
//           <p className="body-content">{this.props.text}</p>
          
//           <Button />
//         </div>
//       )
//     }
//   }
  
//   class Card extends React.Component {
//     render() {
//       return (
//         <article className="card">
//           <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
//           <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
//         </article>
//       )
//     }
//   }