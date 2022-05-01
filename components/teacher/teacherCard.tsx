import Link from 'next/link'
import { useRouter } from 'next/router'

function TeacherCard(props: any) {
  const router = useRouter()

  function handler() {
    router.push('/teachers/' + props.name)
  }

  return (
    <div
      onClick={handler}
      className="m-2 flex cursor-pointer flex-col items-center hover:scale-105"
    >
      <img
        className="h-64 w-48 rounded-md overflow-hidden object-cover"
        src={props.img}
      />
      <p className="mt-1 text-lg">{props.name}</p>
      <p className="text-xs">{props.pos}</p>
    </div>
  )
}

export default TeacherCard
