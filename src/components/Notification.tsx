const Notification = (props: {title:string}) => {
  return (
    <div className="mt-2 p-1 flex h-[58px] border-grey-100 border-2">
      <div className="bg-quotedbg h-[48px] w-[48px] grid place-content-center">
        <img src="bell.svg" alt="Icon of Notification" style={{ width: "1rem", height: "auto", objectFit: "contain" }} />
      </div>
      <div className="ml-3">
        <h1>{props.title}</h1>
        <h1 className="text-blue-400">Submit Now</h1>
      </div>
    </div>
  )
}

export default Notification