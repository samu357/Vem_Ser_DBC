// import { connect } from 'formik';
// import { api } from '../../api';

// const CardPessoa = ({ setIdEditar, pessoas }) => {

//   const removerPessoa = async (idPessoa) => {
//     await api.delete(`/pessoa/${idPessoa}`);
//     await atualizarLista();
//   }

//   const editarPessoa = (idPessoa) => {
//     setIdEditar(idPessoa);
//   }

//   return (
//     <>
//       <div>
//         <p>Nome: {pessoas.nome}</p>
//         <p>CPF: {pessoas.cpf}</p>
//         <p>Data Nasc: {pessoas.dataNascimento}</p>
//         <p>E-mail: {pessoas.email}</p>
//       </div>

//       <div>
//         <button onClick={() => removerPessoa(pessoas.idPessoa)}>Excluir</button>
//         <button onClick={() => editarPessoa(pessoas.idPessoa)}>Editar</button>
//       </div>
//     </>
//   )

// }

// export default connect(mapStateTopProps)(CardPessoa);