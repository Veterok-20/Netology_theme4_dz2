import React from "react";
import { useState } from "react";
import NewRecord from "./NewRecord";
import RecordsList from "./RecordsList";

export default function TrainingRecords() {
    const [form, SetForm] = useState({
        date: '',
        distance: '',
    });
    const [records, SetRecords] = useState([
        {
            id: 0,
            date: '',
            ms: 0,
            distance: '',
        }
    ]);

    const handleChainge = ({ target }) => {
        const { name, value } = target;
        return SetForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        const workDate = new Date(form.date);
        const ms = workDate.getTime();
        SetRecords((prevRecords) => {
            const index = prevRecords.findIndex((obj) => obj.ms === ms);
            if (index === -1)
                return ([...prevRecords, {
                    date: form.date, ms: ms,
                    id: prevRecords[prevRecords.length - 1].id + 1, distance: form.distance
                }])
            else {
                prevRecords[index].distance = Number(prevRecords[index].distance) + Number(form.distance);
                return ([...prevRecords])
            }
        })
        SetForm({ date: '', distance: '' })
        e.target.reset()
    };

    function handleDelete(id) {
        SetRecords((prevRecords) => {
            const newRecordsArray = prevRecords.filter((obj) => obj.id !== id)
            return (newRecordsArray);
        })
    }

    function handleEdit(e,index) {
        console.log("records[index].date=", records[index].date);
        console.log("records[index].distance=", records[index].distance);
        console.log("e.target.value=", e.target.value);
        SetForm(
                { date: records[index].date, 
                  distance: records[index].distance, 
                })
        }
    

    return (
        <div className = "main">
            <NewRecord valueDate={form.date} ValueDistance={form.distance} onChange={handleChainge} onSubmit={handleSubmit} />
            <RecordsList records={records} recordDelete={handleDelete} recordEdit={handleEdit} />
        </div>
    )
}