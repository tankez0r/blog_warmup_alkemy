import axios from "axios";
import Swal from "sweetalert2";
import { emptyPost } from "../Context/PostDataContext";
import { types } from "../Context/Reducer";

const url = "https://jsonplaceholder.typicode.com/posts";

const getPOSTS = async (setState) => {
  let res = await axios.get(url);
  let data = res.data;
  setState(data);
};
const getPOST = async (setState, id) => {
  let res = await axios.get(url + "/" + id);
  let data = res.data;
  setState(data);
};
const putPOST = async (setState, id) => {
  let res = await axios.post(url + "/" + id);
  let data = res.data;
  setState(data);
};
const postPOST = async (values) => {
  let res = await axios.post(url, values);
  try {
    let data = res.data;
    console.log("si se postio " + data);
  } catch (error) {
    console.log("no se postio " + error)
  }
 
};

const logInURL = "http://challenge-react.alkemy.org";
const logIn = async (credential, setSpinner, dispatch, setuserCredentials) => {
  setSpinner(true);
  try {
    let res = await axios.post(logInURL, credential);
    setuserCredentials({});
    setSpinner(false);
    let data = res.data;
    let token = data.token;
    localStorage.setItem("token", token);
    dispatch({ type: types.token });
    dispatch({ type: types.vvalid });
    dispatch({ type: types.logon });
  } catch (error) {
    console.log(credential);
    setSpinner(false);
    dispatch({ type: types.verror });
    dispatch({ type: types.logoff });
  }
};

const deletePOST = async (id, setRedirect, setPostData, deleteState) => {
  await Swal.fire({
    title: "Estas seguro?",
    text: "Una vez eliminado, no hay vuelta atras.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, estoy seguro",
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        axios.delete(url + "/" + id);
        setRedirect(true);
        setPostData(emptyPost);
        Swal.fire("Eliminado!", "El post fue eliminado con exito", "success");
      } catch (error) {
        console.log("error");
      }
    } else {
      deleteState(false);
    }
  });
};

export { getPOSTS, getPOST, deletePOST, logIn, postPOST };
