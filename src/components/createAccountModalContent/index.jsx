import { 
Checkbox, 
FormControl, 
FormControlLabel, 
IconButton, 
InputAdornment
} from "@mui/material";
import React, { 
useContext, 
useState, 
useEffect, 
Fragment 
} from "react";
import CustomOutlinedInput from "../customOutlinedInput";
import { EmailOutlined, PersonOutlined, PhoneOutlined } from "@mui/icons-material";
import PasswordOutlinedInput from "../passwordOutlinedInput";
import PrimaryGradientButton from "../primaryGrandientButton";
import "./index.css";
import { AuthContext } from "../../contexts/AuthContext";
import FlashMessage from "../flashMessage";

function CreateAccountModalContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, SetBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [flashMessage, setFlashMessage] = useState('');

  const showFlashMessage = (message) => {
    setFlashMessage(message);
    setTimeout(() => {
      setFlashMessage("");
    }, 3000); // Hide the flash message after 3 seconds
  };

  const { register } = useContext(AuthContext);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn);
    }
  }, [isLoggedIn]);

  const handleSignUp = async() => {
    if(!name || !email || !password ||!phone ||!confirmPassword){
       return showFlashMessage("Preencha todos os campos")
    }
    
    try {
      await register(name, email, password, phone, birthDate, confirmPassword);
    } catch (error) {
      console.error("Registration error:", error);
      showFlashMessage("Erro ao cadastrar usuário. Por favor, tente novamente.");
    }
  };

  return (
    <>
    { !isLoggedIn ? (
      <div className="createAccountModalContent">
        <div className="flashMessageContainer">
          {flashMessage && (
            <FlashMessage message={flashMessage} onClose={() => setFlashMessage("")} />
          )}
        </div>
        <Fragment>
          <div className="firstSection">
            <span>Crie sua conta</span>
            <FormControl sx={{ m: 1, width: "366px" }}>
              <div className="inputContainer" style={{ marginTop: "56px" }}>
                <label className="inputLabel">Nome</label>
                <CustomOutlinedInput
                  setValue={setName}
                  onChange={e => setName(e.target.value)}
                  placeholder="Nome"
                  type="text"
                  startAdornment={
                    <InputAdornment>
                      <IconButton>
                        <PersonOutlined sx={{ color: "#EEEEEE" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div className="inputContainer" style={{ marginTop: "46px" }}>
                <label className="inputLabel">E-mail</label>
                <CustomOutlinedInput
                  setValue={setEmail}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="E-mail"
                  type="text"
                  startAdornment={
                    <InputAdornment>
                      <IconButton>
                        <EmailOutlined sx={{ color: "#EEEEEE" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div className="inputContainer" style={{ marginTop: "46px" }}>
                <label className="inputLabel">Celular</label>
                <CustomOutlinedInput
                  setValue={setPhone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="Celular"
                  type="text"
                  startAdornment={
                    <InputAdornment>
                      <IconButton>
                        <PhoneOutlined sx={{ color: "#EEEEEE" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div className="inputContainer" style={{ marginTop: "46px" }}>
              </div>
            </FormControl>
          </div>
          <div className="secondSection">
            <FormControl sx={{ m: 1, width: "366px" }}>
              <div className="inputContainer" style={{ marginTop: "152px" }}>
                <label className="inputLabel">Senha</label>
                <PasswordOutlinedInput setValue={setPassword} onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className="inputContainer" style={{ marginTop: "46px" }}>
                <label className="inputLabel">Confirmar Senha</label>
                <PasswordOutlinedInput setValue={setConfirmPassword} onChange={e => setConfirmPassword(e.target.value)}placeholder="Confirmar Senha" />
              </div>
              <FormControlLabel
                sx={{ marginBottom: "-25px", marginTop:"20px" }}
                control={<Checkbox style={{ color: "#404040" }} defaultChecked />}
                label="Aceito os termos de uso da plataforma"
              />
              <div className="buttonsSection">
                <PrimaryGradientButton text="Entrar" onClick={handleSignUp} />
              </div>
            </FormControl>
          </div>
        </Fragment>
    </div>
    ): null}

  </>
  )
}

export default CreateAccountModalContent;
