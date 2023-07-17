const urlAll = "http://localhost:4000/api/tradingland/all";
const urlAdd = "http://localhost:4000/api/tradingland/add";
const urlDel = "http://localhost:4000/api/tradingland/del";
const urlUpd = "http://localhost:4000/api/tradingland/upd";



export const allTraders = async () => {
    try {
        const traders = await fetch(urlAll);
        const datos = traders.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}


export const addTraders = async (datos) => {
    try {
        await fetch(`${urlAdd}/`, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
};


export const deleteTraders = async (id) => {
    try {
        await fetch(`${urlDel}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
};


export const updateTraders = async (datos, id) => {
    try {
        await fetch(`${urlUpd}/${id}`, {
            method: "PUT",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
}

