import { element } from "prop-types";
import React, { useState } from "react";



function Tarea() {
    const [tarea, setTareas] = useState("")
    const [listaTareas, setListaTareas] = useState([])



    function agregarTareas(e) {
        if (e.key == "Enter") {

            const tasklist = listaTareas.concat(tarea)
            setListaTareas(tasklist)
            setTareas("")

        }


    }

    function borrarTarea(borrarItem) {
        setListaTareas(listaTareas.filter((item) => item !== borrarItem))

    }

    return (
        <div className="estilos">
            <h1>TodoList</h1>
            <button onClick={agregarTareas}></button>
            <input type="text" onChange={(e) => setTareas(e.target.value)} value={tarea} onKeyDown={agregarTareas} />
            <ul>

                {listaTareas.map((item, index) =>
                    <li key={index}>{item}<svg onClick={() => borrarTarea(item)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg></li>
                )}
            </ul>

            <div>Total task {listaTareas.length}</div>
        </div>


    )

}

export default Tarea;