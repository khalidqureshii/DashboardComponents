type InfoType = {
  title: string,
  index: number,
  color1: string,
  color2: string,
  data: string[]
}

const InfoCard = (props:InfoType) => {
  return (
    <div className={`${props.color1} rounded-lg flex items-center px-3 h-[108px] mt-5`}>
        <div className='w-2/12'>
            <div className={`${props.color2} w-16 h-16 rounded-full`}></div>
        </div>

        <div className='w-10/12'>
            <h1 className='text-lg mb-2'>{props.title}</h1>
            <h1 className='text-2xl font-semibold'>{props.data[props.index]}</h1>
        </div>
    </div>
  )
}

export default InfoCard