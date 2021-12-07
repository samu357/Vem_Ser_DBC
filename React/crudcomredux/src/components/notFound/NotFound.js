import giferror from "../../images/giferror.gif";
const NotFound = () => {
  return (
    <div >
      <h1>Pagina nao encontrada</h1>
      <img src={giferror} alt="erro" />
    </div>
  );
}

export default NotFound;