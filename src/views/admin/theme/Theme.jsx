import { Link } from "react-router-dom"
import plusImg from "./../../../assets/plus-square-svgrepo-com.svg"
import { useQuery } from "@tanstack/react-query"

const Theme = () => {

  const { data, error } = useQuery({
    queryKey: ['templates'],
    queryFn: async () => {
      const response = await fetch('/api/fetch_all_pages')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      console.log(`this is the fetch template response`)
      console.log(response)
      const jsonResponse = await response.json();
      const templates = jsonResponse.pages;
      console.log(`this is the returned templates data: should be a list of strings`)
      console.log(templates)
      return templates
    }
  })
  if (error)
    console.log(error)

  return (
    <div className="w-[80%] h-screen pt-24 pl-8 mx-auto">
      <div>
        {/* <h1>Themes</h1> */}
      </div>
      <div className="grid grid-cols-3 gap-20">
        <button
          className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-purple-400 to-purple-700">
          <Link to='/admin/theme/edit'>
            <div className="flex flex-row">
              <div className="inline-block p-6 text-3xl font-semibold text-center">Nieuw thema maken <img className="inline-block w-10 h-10" src={plusImg} alt="plus icon" /></div>
            </div>
          </Link>
        </button>

        {data !== (undefined) && data.map((template) => {
          const index = Math.random() * 1000
          return (
            <div key={index} className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
              <p className="p-6 text-3xl font-semibold text-center">{template}</p>
            </div>
          )
        })}



        {/* <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 1</p>
        </div>
        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 2</p>
        </div>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 3</p>
        </div>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 4</p>
        </div>

        <div className="flex flex-col w-[16rem] h-[8rem] rounded-md bg-black text-white bg-gradient-to-br from-sky-300 to-blue-700">
          <p className="p-6 text-3xl font-semibold text-center">Previous Theme 5</p>
        </div> */}
      </div>
    </div>
  )
}

export default Theme