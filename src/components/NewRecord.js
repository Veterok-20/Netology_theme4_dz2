import React from "react";
import PropTypes from 'prop-types';

export default function NewRecord(prop) {

    return (

        <form style={{width: "45vw"}} onSubmit={prop.onSubmit}>
            <div className="container">
                <div className="inputlabel">
                    <label className="forlabel">Дата (ДД.ММ.ГГ)</label>
                    <input className="forinput" type='text' name='date' value={prop.valueDate} onChange={prop.onChange} />
                </div>
                <div className="inputlabel">
                    <label className="forlabel">Пройдено км</label>
                    <input className="forinput" type='text' name='distance' value={prop.valueDistance} onChange={prop.onChange} />
                </div>
                <div className="inputlabel">
                    <button className="button" type='submit'>ОК</button>
                </div>
            </div>
        </form >

    )
}

NewRecord.propTypes = {
    valueDate: PropTypes.string,
    valueDistance: PropTypes.number,
    onChange: PropTypes.func,       
}
