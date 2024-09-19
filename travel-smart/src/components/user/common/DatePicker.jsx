import React, { useState } from 'react';
import './DatePicker.scss';
import { Icon } from '@iconify-icon/react';

const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthsOfYearShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const DatePicker = ({value, onChange}) => {

    const date = new Date(value);

    const [dateWindow, setDateWindow] = useState(date);
    const [range, setRange] = useState("day");

    let calendayDayStart = new Date(dateWindow.getFullYear(), dateWindow.getMonth(), 1);
    calendayDayStart.setDate(1 - calendayDayStart.getDay());

    function addMonths(months) {
        let newDateWindow = new Date (dateWindow);
        newDateWindow.setMonth(dateWindow.getMonth() + months); 
        setDateWindow(newDateWindow);
    }
    function addYears(years) {
        if (range == "year") years *= 12;
        let newDateWindow = new Date (dateWindow);
        newDateWindow.setFullYear(dateWindow.getFullYear() + years); 
        setDateWindow(newDateWindow);
    }

    return (
        <div class="-date-picker">
            <h6 class="-date-picker-nav d-flex mb-3">
                {range == "day" && <div class="flex-equal d-flex align-items-center">
                    <button class="btn" onClick={() => addMonths(-1)}><Icon icon="ic:outline-keyboard-arrow-left" /></button>
                    <span class="flex-fill text-center" role="button" onClick={() => setRange("month")}>{monthsOfYear[dateWindow.getMonth()]}</span>
                    <button class="btn" onClick={() => addMonths(1)}><Icon icon="ic:outline-keyboard-arrow-right" /></button>
                </div>}
                <div class="flex-equal d-flex align-items-center">
                    <button class="btn" onClick={() => addYears(-1)}><Icon icon="ic:outline-keyboard-arrow-left" /></button>
                    <span class="flex-fill text-center" role="button" onClick={() => { 
                        dateWindow.setFullYear(Math.floor(dateWindow.getFullYear() / 12) * 12); setDateWindow(dateWindow); setRange("year"); 
                    }}>
                        {dateWindow.getFullYear() + (range == "year" ? "-" + (dateWindow.getFullYear() + 11) : "")}
                    </span>
                    <button class="btn" onClick={() => addYears(1)}><Icon icon="ic:outline-keyboard-arrow-right" /></button>
                </div>
            </h6>
            <div class="-date-picker-calendar"> 
                <div class={
                    "-date-picker-day-calendar " +
                    (range == "day" ? "active " : "")
                }> 
                    {daysOfWeek.map((x, i) => (
                        <small class="d-flex align-items-center justify-content-center text-primary" style={{
                            gridColumn: i + 1,
                            gridRow: 1
                        }}>
                            {x}
                        </small>
                    ))}
                    {[...new Array(7 * 6)].map((_, i) => {
                        let day = new Date(calendayDayStart);
                        day.setDate(day.getDate() + i);
                        let sameMonth = dateWindow.getMonth() == day.getMonth();
                        return (
                            <button class={
                                "btn rounded-circle " +
                                (sameMonth ? "" : "opacity-50 ")
                            } style={{
                                gridColumn: i % 7 + 1,
                                gridRow: Math.floor(i / 7) + 2,
                            }}>{day.getDate()}</button>
                        )
                    })}
                </div>
                <div class={
                    "-date-picker-month-calendar " +
                    (range == "month" ? "active " : "")
                }> 
                    {[...new Array(12)].map((_, i) => {
                        return (
                            <button class={
                                "btn"
                            } style={{
                                gridColumn: i % 3 + 1,
                                gridRow: Math.floor(i / 3) + 1,
                            }} onClick={() => {
                                dateWindow.setMonth(i);
                                setDateWindow(dateWindow);
                                setRange("day");
                            }}>{monthsOfYearShort[i]}</button>
                        )
                    })}
                </div>
                <div class={
                    "-date-picker-year-calendar " +
                    (range == "year" ? "active " : "")
                }> 
                    {[...new Array(12)].map((_, i) => {
                        let year = Math.floor(dateWindow.getFullYear() / 12) * 12 + i;
                        return (
                            <button class={
                                "btn"
                            } style={{
                                gridColumn: i % 3 + 1,
                                gridRow: Math.floor(i / 3) + 1,
                            }} onClick={() => {
                                dateWindow.setFullYear(year);
                                setDateWindow(dateWindow);
                                setRange("month");
                            }}>{year}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default DatePicker;