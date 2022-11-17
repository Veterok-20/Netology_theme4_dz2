import React from "react";
import Pencil from "./Pencil";
import XMark from "./XMark";
import PropTypes from 'prop-types'; 

export default function RecordsList(prop) {
    const { records, recordDelete, recordEdit } = prop;
    records.sort((prev, next) => prev.ms - next.ms);
    // records.reverse();
    let reverseRecords = [];
    for (let i = 0; i < records.length; i++) {
        reverseRecords[records.length - i - 1] = records[i];
    }

    return (
        <table>
            <caption style={{ marginBottom: "10px", textAlign: "start" }}>
                <span className="captionrow" style={{marginLeft: "0.5em"}}>Дата (ДД.ММ.ГГ)</span>
                <span className="captionrow">Пройдено км</span>
                <span className="captionrow">Действия</span>
            </caption>

            <div className="ramka">
                {reverseRecords.map((obj, index) => {                    
                    if (obj.id === 0) return null;
                    return (
                        <tr key={obj.id}>
                            <td className="celltable">{obj.date}</td>
                            <td className="celltable">{obj.distance}</td>
                            <td className="celltable">
                                <button className="rowbutton" onClick={() => { recordEdit(index)}}>
                                    <Pencil />
                                </button>
                                <button className="rowbutton" onClick={() => { recordDelete(obj.id)}}>
                                    <XMark />
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </div> 
        </table>
    )
}

RecordsList.propTypes = {
    records: PropTypes.arrayOf(PropTypes.object),
    recordDelete: PropTypes.func,
    recordEdit: PropTypes.func,  
}