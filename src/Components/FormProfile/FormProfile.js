import React from 'react'
import './FormProfile.scss'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

function FormProfile({ labelForm, valueForm, labelLink, link, buttonAdd }) {
  return (
      <div className="formProfile">
        <span className="formProfile__label">{labelForm}</span>
        <p className={valueForm !== "" ? "formProfile__value" : "formProfile__value hide"}>{valueForm}</p>
        <Link to={link} className={labelLink !== "" ? "show" : "hide"}>{labelLink}</Link>
        <div className={buttonAdd ? "formProfile__btn-holder" : "formProfile__btn-holder hide"}>
            <div className="formProfile__box-icon">
                <AddIcon />
            </div>
            <span>Add New</span>
        </div>
      </div>
  )
}

export default FormProfile
