import { useNavigate } from 'react-router-dom'
import ContainedButtons from '../components/Button'


export default function Question () {
    const navigate = useNavigate()
    const pageNumger = 2
    return  <ContainedButtons onClick={() => {
        navigate('/result')
    }}/> 

}

