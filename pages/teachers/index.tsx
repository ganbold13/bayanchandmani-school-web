import TeacherList from '../../components/teacher/TeacherList'
import { data } from '../../data'
function index(props: any) {
  return <TeacherList teachers={props.teachers} />
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
