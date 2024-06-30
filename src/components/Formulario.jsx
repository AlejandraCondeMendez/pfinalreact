const Formulario=()=>{
    return(
        <>
        <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Username</label>
      <input
        type="text"
        className="form-control"
        id="inputEmail4"
        placeholder="Username"
      />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Feedback</label>
      <input
        type="text"
        className="form-control"
        id="inputPassword4"
        placeholder="Feedback"
      />
    </div>
  </div>
  <button type="submit" className="btn btn-primary">
    Send
  </button>
</form>
        </>
    )
}

export default Formulario