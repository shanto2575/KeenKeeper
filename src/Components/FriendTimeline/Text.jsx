import texts from '../../assets/text.png'

const Text = ({ friend }) => {
    return (
        <div>
            <div>
                <div className='flex items-center gap-5 border rounded-2xl p-5 my-4'>
                    <img src={texts} alt="" />
                    <div>
                        <h3><span className='font-bold'>Call</span> with {friend.name}</h3>
                        <p>{friend.next_due_date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Text
