import React from 'react';
import { Redirect } from 'react-router-dom';
// import api from '../../services/api_login';
import Alert from '../../components/sweet-alert/Alert';
import './../../assets/scss/styles.scss';
import imgLogin from '../../assets/img/gcm_350_b.66864f85.png';

class Login extends React.Component {

  state = {
    user: '',
    pass: '',
    redirect: '',
  };

  //Metodo para realizar o login do usuário
  handleSubmit = e => {
    e.preventDefault();

    const { user, pass } = this.state;

    if (!pass || !user) {
      this.changeStateRight();
    } else {
      if (pass.length < 6 || user.length < 4) {
        this.changeStateRight();
      } else {
        this.login(user, pass);
      }
    }
  }

  //Metodo para buscar as informações para realizar o login 
  login(user, pass) {

    if (user === 'admin' && pass === 'teste123') {
      let token ='aBCE123!@DDD';
      localStorage.setItem('session_token', token);
      this.setState({
        redirect: '/home',
      });
    } else {
      Alert('error-login', `Usuário ou senha errados`);
    }
    // try {
    //   const res = await api.getApiGlpi(user, pass);
    //   let error_login = res.data.resultado[0];
    //   let error_login_message = res.data.resultado[1];

    //   if (res.status === 200) {
    //     if(error_login === 'ERROR_GLPI_LOGIN'){
    //       Alert('error-login', `${error_login_message}`);      
    //     }else{
    //       let token = res.data.resultado.session_token;
    //       localStorage.setItem('session_token', token);
    //       this.setState({
    //         redirect:'/home',
    //       });
    //       // let red = this.state.redirect;
    //     }
    //   }
    // } catch (err) {
    //   Alert('error-server', 'Por favor verificar conexão com o servidor...');
    // }
  }

  //Metodo para realizar as validações dos campos usuário e senha quando clicado no botão de acesso
  handleChange = e => {
    const { name, value } = e.target;
    if ((name === 'user' && value.length >= 1)
      || (name === 'pass' && value.length >= 1)) {
      this.setState({
        messageError: {
          isValidUser: false,
          isValidPass: false,
        }
      });
    }
    this.setState({
      [name]: value
    }, () => { this.validFields(name, value) });
  }

  //Metodo para validar os campos usuario e senha e realizar as animações do painel de avisos
  validFields(name, value) {
    let messageError = { ...this.state.messageError };
    let userValid = messageError.isValidUser;
    let passValid = messageError.isValidPass;
    switch (name) {
      case 'user':
        userValid = value.length >= 1;
        this.rightSide.classList.add("left");
        break;
      case 'pass':
        passValid = value.length >= 1;
        this.rightSide.classList.add("left");
        break;
      default:
        break;
    }
    this.setState({
      messageError: messageError,
      isValidUser: userValid,
      isValidPass: passValid
    });

  }

  componentDidMount() {
    this.rightSide.classList.add("left");
  }

  //Metodo para setar o painel a direita
  changeStateRight = () => {
    this.rightSide.classList.remove("left");
    this.rightSide.classList.add("right");
  }

  //Metodo para setar o painel a esquerda
  changeStateLeft = () => {
    this.rightSide.classList.remove("right");
    this.rightSide.classList.add("left");
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <>
        <div className="auth-wrapper">
          <RightSide
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeStateLeft}
          />
          <div className="auth-content">
            <div className="card">

              <div className="card-header">
                <h3 className="title mb-2">Login</h3>
              </div>
              <div className="card-icon">
                <img className="img-login" src={imgLogin} alt="Logo"></img>
              </div>
              <div className="card-body text-center">
                <form onSubmit={this.handleSubmit}>
                  <label>Glpi Ticket Express</label>
                  <div className="input-group mb-4">
                    <input
                      name="user"
                      type="text"
                      className="form-control"
                      placeholder="Usuário"
                      value={this.state.user}
                      onChange={this.handleChange}
                    />
                    <span className="fa fa-user" ></span>
                  </div>
                  <div className="input-group mb-4">
                    <input name="pass" type="password" className="form-control" placeholder="Senha" value={this.state.pass} onChange={this.handleChange} />
                    <span className="fa fa-lock"></span>
                  </div>
                  <button className="btn btn-accent shadow-4 mb-6 float-right">Entrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

//Evento para mostrar o aviso no login da esquerda para direita
const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}>
      <div className="inner-container">
        <span className="icon-back-slide fa fa-angle-left"
          onClick={props.onClick}></span>
        <div className="text-container">
          <span className="fa fa-exclamation-triangle"></span>
          <label className="text">Aviso!</label>
          <div className="view-container"></div>
        </div>
        <div className="container-info">
          <span className="text-limit fa fa-circle">  Limite minímo permitido de caracter: </span>
          <span className="text-limit-user"> Usuário: 4;</span>
          <span className="text-limit-pass"> Senha: 6;</span>
          <span className="text-null fa fa-circle">  Os campos não podem ficar sem ser preenchidos.</span>
        </div>
      </div>
    </div>
  );
};

export default Login;