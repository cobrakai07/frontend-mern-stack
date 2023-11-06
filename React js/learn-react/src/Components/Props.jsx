import MyImg from '../assets/Data/download.jpg';
const Props = ({Props="Default Value"}) => {
  return (
    <>
    <img src={MyImg} alt="demopic" />
    <p>This is the prop passed: {Props}</p>
    </>
  )
}

export default Props;