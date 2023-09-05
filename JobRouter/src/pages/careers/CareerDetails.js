import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {
    const {id} = useParams()
    const career = useLoaderData()

  return (
    <div className='career-details'>
        <h2>Careers Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <button><a href={career.url} >Apply Here</a></button>
        <div className="details">
            <p>{career.info}</p>
        </div>
    </div>
  )
}

export default CareerDetails

export const careerDetailsLoader = async ({params}) => {
    const {id } = params
    const res = await fetch('https://job-router-eta.vercel.app/' + id)

    if (!res.ok){
        throw Error('Could not find that career')
    }
    return res.json()
}
