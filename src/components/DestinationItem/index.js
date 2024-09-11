import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <div className="destbg">
      <img src={imgUrl} alt={name} className="img" />
      <p className="sub-head">{name}</p>
    </div>
  )
}
export default DestinationItem
