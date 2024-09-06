import { useState, useEffect} from "react";
import axios from "axios";


function UserLIsit() {
  const [usuarios, setususarios] = useState([]);
  const [name ,setname] = useState("")
  const [email ,setemail] = useState("")
  

  const get_data = () => {
    axios
      .get(`http://localhost:3000/usuarios`)
     .then((response) => setususarios(response.data));
  };

  

  useEffect(() => {
    get_data
  },[])
  
  console.log(usuarios)


  const namehandlechange = (e) =>{
    setname(e.target.value)
  }
  const emailhandlechange = (e) =>{
   setemail(e.target.value) 
  }
    const uploadinfo = () =>{
    axios.post(`http://localhost:3000/usuarios`)
  }


  const deleteUsuario = () =>{
    axios.delete(`http://localhost:3000/usuarios/${usuarios.id}`)
  };
  

  return (
    <>
        <input type="text"
        value={name}
        onChange={namehandlechange}></input>
        <input type="text"
        value={email}
        onChange={emailhandlechange}></input>


        <button type="onclick" onClick={uploadinfo}>upload user</button>

      <table>
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">email</th>
            <th scope="col">accion</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => {
            <tr>
              <th scope="row">{usuario.name}</th>
              <td>{usuario.email}</td>
              <td><button value={usuario.id} type="onclick" onClick={deleteUsuario}></button></td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
}

export default UserLIsit;
