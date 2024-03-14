const Contact =() => {
    return (
        <main className="main-contacto">
        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
        <form>
          <label>Correo:</label>
          <input type="email" placeholder="name@example.com" className="input-email" />
          <label>Descripción</label>
          <textarea className="input-text" cols="154" rows="6"></textarea>
          <input type="submit" className="input-button" />
        </form>
      </main>

    )
}

export default Contact;