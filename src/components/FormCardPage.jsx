

const FormCardPage=()=>{
    return(
        <>
        <form>
  <fieldset disabled="">
    <legend>Contact information</legend>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">
        Phone number
      </label>
      <div className="inputCardPag">
      <input 
        type="text"
        id="disabledTextInput"
        className="form-control"
        placeholder="Disabled input"
      />
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">
        Email
      </label>
      <div className="inputCardPag">
      <input
        type="text"
        id="disabledTextInput"
        className="form-control"
        placeholder="Disabled input"
      />
      </div>
    </div>

    <div className="mb-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="disabledFieldsetCheck"
          disabled=""
        />
        <label className="form-check-label" htmlFor="disabledFieldsetCheck">
         check this
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </fieldset>
</form>

        </>
    )
}
export default FormCardPage