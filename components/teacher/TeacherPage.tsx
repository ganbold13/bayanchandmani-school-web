import Link from 'next/link'

function TeacherPage(props: any) {
  return (
    <div className=" grid grid-cols-3 p-5">
      <div className="flex flex-col">
        <p className="text-4xl font-bold">Info</p>
        <p>{props.about}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold">{props.name}</p>
        <p className="text-xs">{props.pos}</p>
        <img
          src={props.img}
          className="m-4 h-48 w-48 rounded-full bg-gray-200 object-cover"
        />
        <div className="linkHolder">
          <Link href="/teachers">Back</Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold">Education</p>
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
        <p className="text-4xl font-bold">Links</p>
        <ul>
          {props.links.map((item: any, i: any) => {
            return <li key={i}>{item.link}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default TeacherPage
