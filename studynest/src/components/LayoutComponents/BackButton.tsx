import { useNavigate } from 'react-router'

const BackButton = () => {
const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)}>Back</div>
  )
}

export default BackButton