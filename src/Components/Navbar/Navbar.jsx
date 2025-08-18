
import icon from './../../assets/icon-72x72.png'
export default function Navbar() {
  return (
    <div className='w-full flex items-center justify-center shadow-md'      style={{
        background: 'linear-gradient(to right, #00A8A8, #40E0D0)'
      }}>
        <img className='pt-2.5 pb-2.5' src={icon} alt="icon" />
    </div>
  )
}
