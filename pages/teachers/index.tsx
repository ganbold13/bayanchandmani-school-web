import TeacherList from '../../components/teacher/TeacherList'
import { data } from '../../data'
function index(props: any) {
  return (
    <div>
      <div className="mx-auto my-4 flex w-11/12 flex-row justify-between">
        <p className="text-3xl">Багш, Ажилчид</p>
        <div className='flex flex-row space-x-5'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-2 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input className="bg-gray-100" onChange={(e) => {
            e.target.value
            console.log(e.target.value)
          }}/>
        </div>
      </div>
      <TeacherList teachers={props.teachers} />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      teachers: data.map((teacher) => ({
        name: teacher.name,
        pos: teacher.position,
        img: teacher.img,
        about: teacher.about,
      })),
    },
    revalidate: 3600,
  }
}

export default index
