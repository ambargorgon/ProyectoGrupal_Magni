import { useEffect, useState } from "react"
import Item from "./Item"
import { ResponseData } from "../types/ResponseData"

const List = () => {
  const [listaInstrumentos, setListaInstrumentos] = useState<ResponseData | null>(null)

  //Traemos los datos del JSON
  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const response = await fetch("/instrumentos.json")

        if (!response.ok) {
          throw new Error(`Status ${response.status}`)
        }

        const responseJSON: ResponseData = await response.json()

        if (responseJSON) {
          setListaInstrumentos(responseJSON)
        } else {
          setListaInstrumentos(null)
        }

      } catch (error: unknown) {
        console.log("Hubo un error al realizar el fetch: ", error)
      }
    }

    getData()
  }, [])

  return (
    <div className="w-[100vw] flex justify-center">
      {listaInstrumentos ?
      (<ul className="list-none mt-10 flex flex-col gap-10">
        {listaInstrumentos.instrumentos.map(instrumento => (
          <li key={instrumento.id}> <Item instrumento={instrumento}/> </li>
        ))}
      </ul>) : (<p>No hay instrumentos disponibles</p>)}
    </div>
  )
}

export default List