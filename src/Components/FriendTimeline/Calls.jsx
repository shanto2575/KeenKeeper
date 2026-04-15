import calls from '../../assets/call.png'

const Calls = ({ friend }) => {
    console.log(friend)
    return (
            <div  className='flex items-center gap-5 shadow-[0_0_25px_rgba(0,0,0,0.25)] rounded-2xl p-5 my-4'>
                <img src={calls} alt="" />
                <div>
                    <h3><span className='font-bold'>Call</span> with {friend.name}</h3>
                    <p>{friend.next_due_date}</p>
                </div>
            </div>
            
            )
}

            export default Calls