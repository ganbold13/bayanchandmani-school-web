import TeacherCard from './teacherCard'

function TeacherList(props: any) {
  return (
    <div className="mx-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6">
      {props.teachers.map(
        (teacher: { name: any; position: any; img: any }, i: any) => {
          return (
            <TeacherCard
              key={i}
              name={teacher.name}
              pos={teacher.position}
              img={teacher.img}
            />
          )
        }
      )}
    </div>
  )
}

export default TeacherList
