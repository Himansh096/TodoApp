import React, { useRef } from 'react'
import "./AccordionItem.css"
function AccordionItem({ faq, active, onToggle }) {
    const contentEl = useRef();
    console.log(active)
    const { question, answer } = faq;
    return (
        <li className={`accordion_item ${active ? "active" : ""}`}>
            <button className="button" onClick={onToggle}>
                {question}
                <span className="control">{active ? "—" : "+"} </span>
            </button>

            <div ref={contentEl} className={`answer_wrapper ${active ? "open" : ""}`} style={
                active
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="answer">{answer}</div>
            </div>
        </li>
    )
}

export default AccordionItem
