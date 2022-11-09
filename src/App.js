 
import './App.css';

function App() {
  const  etudiants =  
 [
   {firstname : "moha",
  lastname : "belghali",
   image : "https://th.bing.com/th/id/OIP.rZxKAojc5w8Hcb_y_04xAgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=2.5&pid=1.7"
},
{firstname : "imane",
lastname : "guennach" ,
image : "https://th.bing.com/th/id/OIP.l1YJFuRX1j5K1VdDHArUcQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=2.5&pid=1.7"
},
{firstname : "hetem",
lastname : "makosso" , 
image : "https://th.bing.com/th/id/OIP.rZxKAojc5w8Hcb_y_04xAgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=2.5&pid=1.7"
},
]
  return (
    <div className="App">
     { etudiants.map( etudiant =>
      (
      <div className='card'>
        <img src={etudiant.image} alt="" />
        <div>
        <h4>{etudiant.firstname}</h4>
        <h4>{etudiant.lastname}</h4>
        </div>
      </div>
      )
      )}
    </div>
  );
}

export default App;
