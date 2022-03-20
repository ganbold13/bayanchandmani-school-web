import Link from 'next/link'

function TeacherPage(props: any) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <p className="my-4 text-4xl">{props.name}</p>
        <p className="text-s">{props.pos}</p>
      </div>
      <div className=" mt-5 grid grid-cols-3 p-5">
        <div className="flex flex-col">
          <p className="text-2xl">Намтар</p>
          <p>{props.about}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={props.img}
            className="m-4 h-48 w-48 rounded-full object-cover"
          />
          <div className="linkHolder">
            <Link href="/teachers">Back</Link>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="flex flex-col">
            <p className="text-2xl">Боловсрол</p>
            <ul>
              {props.edu.map((item: any, i: any) => {
                return (
                  <li key={i}>
                    {' '}
                    <p>
                      {item.title} ({item.date})
                    </p>{' '}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl">Холбоосууд</p>
            <ul>
              {props.links.map((item: any, i: any) => {
                return <li key={i}>{item.link}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherPage
