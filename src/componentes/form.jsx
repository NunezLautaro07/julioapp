import React, { useState, useEffect } from 'react';

export default function Form(){

    return(
        <>
        <div className="estatico-sidebar   margen-arriba-nav-form">
        <div className="w-100 justify-content-center">
        <form action="https://formspree.io/f/moqgzenz" method="post" className=''>
  <label htmlFor="exampleFormControlInput1" className="form-label ">Nombre</label>
  <input type="text" className="form-control " name='Nombre'  placeholder="" />

<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Pregunta</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name='Pregunta' rows="3"></textarea>
  
</div>
<input type="submit" value="Enviar" className=' btn ' />
</form>
</div>

</div>

        </>
    )

}