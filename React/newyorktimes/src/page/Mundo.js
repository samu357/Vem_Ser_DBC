import { useEffect, useContext } from "react";
import { api, apiKey } from "../api";
import { Context } from "../context/NewContext";
import Card from "../components/card/Card";
import Loader from "../components/loader/Loader";


const Mundo = () => {

  const { list, setList, loader, setLoader, setActiveLink } = useContext(Context);
  const categoria = "world";


  useEffect(() => {
    setLoader(true);
    (async () => {
      const { data } = await api.get(`/${categoria}.json?api-key=${apiKey}`)
      setList(data.results);
      setLoader(false);
      setActiveLink('world')

    })();
  }, []);

  return (
    <div>
      {loader ? <Loader/> :
      <section>
        <Card list={list} />
      </section>
      }
    </div>
  );

};

export default Mundo;
