import TeacherPage from '../../../components/teacher/TeacherPage'
import { data } from '../../../data'
function index(props: any) {
  return (
    <div className="h-screen">
      <TeacherPage
        name={props.teachers.name}
        pos={props.teachers.position}
        about={props.teachers.about}
        img={props.teachers.img}
        edu={props.teachers.edu}
        links = {props.teachers.links}
      />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: data.map((teacher) => ({
      params: {
        teacherPath: teacher.name,
      },
    })),
  }
}


export async function getStaticProps(context: any) {
  const teacher = context.params.teacherPath.toString();  

  const selectedTeacher = data.find(item => (item.name == teacher))
  return {
    props: {
      teachers: selectedTeacher,
    },
  }
}

export default index
