import React, { useState } from 'react'
import moment from 'moment'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export const Info = (props) => {
    const [switchInfo, setSwitchInfo] = useState(3)

    const birthDateCheck = (date) => {
        const stdBD = props.person.BirthDate;
        const inDate = moment(props.birthdate).format("DD/MM/YYYY");

        if (stdBD == inDate) {
            setSwitchInfo(1)
        } else {
            setSwitchInfo(0)
        }

    }

    const showInfo = () => {
        switch (switchInfo) {
            case 1:
                return <div className="display-4 alert alert-success">
                    {props.person.Number}
                </div>
                break;

            case 0:
                return <div className="red">خطأ تأكد من تاريخ الميلاد</div>

            default:
                return <div className="yellow"> ادخل تاريخ الميلاد لتحصل على الرقم السري</div>
                break;
        }
        
    }



    return (
        <div className="box m-3">
            <h3>{props.person.Name}</h3>
            <h5>{props.person.Class}</h5>
            <label> تاريخ الولادة: </label>
            <DatePicker
                selected={props.birthdate}
                onChange={d => props.setBirthDate(d)}
                dateFormat="dd/MM/yyyy"
                
            />
            <button className="btn btn-warning" onClick={birthDateCheck}>بحث</button>
            {showInfo()}
        </div>
    )
}
