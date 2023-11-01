import { useNavigate } from 'react-router-dom'
import ContainedButtons from '../components/Button'
import RainbowLogo from './components/Logo'

export default function Result () {
    const navigate = useNavigate()
    const pageNumger = 7
    return (
        <>
        <RainbowLogo/>
        <ContainedButtons onClick={() => {
        navigate('/result');
    }}/> 
    </>
    ) ;
}