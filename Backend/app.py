from fastapi import FastAPI


app = FastAPI()


@app.get("/reservar")
def verificar_disponibilidad(fecha: str):
    
    if fecha == "2026-07-26":
        return {"status": "ocupado", "mensaje": "Ese día ya está reservado el quincho."}
    else:
        return {"status": "disponible", "mensaje": "¡Podés reservar!"}