import React, { useState } from 'react'

function UseKonusu() {
    const [sayi , setsayi] = useState(0);
    function arttirma (e) {
        e.preventDefault();
        setsayi(sayi+1)
    }
    return (
        <div>
            {sayi}
            <div><button onClick={arttirma}>Sayıyı Arttır</button></div>
        </div>
    )
}

export default UseKonusu