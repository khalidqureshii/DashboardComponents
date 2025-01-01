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
            <div className={`${props.color2} tc:w-16 tc:h-16 w-10 h-10 rounded-full`}></div>
        </div>

        <div className='w-10/12 ml-2'>
            <h1 className='tc:text-lg text-md mb-2'>{props.title}</h1>
            <h1 className='tc:text-2xl text-xl font-semibold'>{props.data[props.index]}</h1>
        </div>
    </div>
  )
}

export default InfoCard