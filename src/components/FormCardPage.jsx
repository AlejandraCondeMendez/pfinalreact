/* eslint-disable react/no-unescaped-entities */

const FormCardPage=(number, email)=>{
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
    disabled
      type="text"
      id="disabledTextInput"
      className="form-control"
      placeholder="Disabled input"
      value={number}
    />
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="disabledTextInput" className="form-label">
      Email
    </label>
    <div className="inputCardPag">
    <input
    disabled
      type="text"
      id="disabledTextInput"
      className="form-control"
      placeholder="Disabled input"
      value={email}
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
       I'm not a robot
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