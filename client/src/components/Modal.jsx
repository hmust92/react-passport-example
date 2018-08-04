import React from 'react';

const Modal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {props.children}
          

          

<div className="container">
<div className="row">
<div className="col-lg-12">

<p>
Score yourself 0 to 5 on how strong a developer you are with regard to each specific skill. Use the following scale:</p>
<p>0		1		2		3		4		5</p>

<p>Where</p>
<p>0 = (default) declined to answer / don’t use at all</p>
<p>1 = exposure to this technology</p>
<p>2 = could effectively perform a Junior.-level job using this technology</p>
<p>3 = could effectively perform a Mid-level job using this technology</p>
<p>4 = could effectively perform a Senior-level job using this technology</p>
<p>5 = absolute rockstar, could effectively teach a class at a university about this technology</p>



<form>
<div className="form-group">
<label htmlFor="Skills">Skill</label>
<input onChange={props.handleSkillChange} type="text" className="form-control" id="Skill" />
</div>
<div className="form-group">
<label htmlFor="Points">Points</label>
<input onChange={props.handlePointsChange} type="text" className="form-control" id="Points" />
</div>
<div className="form-group">
<label htmlFor="Points">Skill Type</label>
<input onChange={props.handleSkillTypeChange} type="text" className="form-control" id="SkillType" />
</div>
<button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
</form>

</div>

</div>
</div>
          <button onClick={props.handleClose}>close</button>
        </section>
      </div>
    );
  };

export default Modal;