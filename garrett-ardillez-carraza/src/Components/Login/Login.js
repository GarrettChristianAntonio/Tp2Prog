import "./Login.css"

export const Login = () =>{

  

      return(
      <div className="LoginForm"  >
        <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <a href="#" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
        </div>
        <button type="submit" className="login-button"  >Ingresar</button>
      </form>
    </div>)}
