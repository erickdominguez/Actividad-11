const rutina = (inst, callback, duracion) =>{
    setTimeout(()=>{
        callback(inst);
    }, duracion)
}

rutina("Levantarse", (inst)=>{
    console.log("Haciendo: "+inst);
    rutina("Tender cama", (inst)=>{
        console.log("Haciendo: "+inst);
        rutina("Bañarse", (inst)=>{
            console.log("Haciendo: "+inst);
            rutina("Clase paradigmas", (inst)=>{
                console.log("Haciendo: "+inst);
                rutina("Desayunar", (inst)=>{
                    console.log("Haciendo: "+inst);
                    rutina("Jugar videojuegos", (inst)=>{
                        console.log("Haciendo: "+inst);
                    }, 10000)
                }, 8000)
            }, 5000)
        }, 3000)
    }, 3000)
}, 5000)