import TeacherCard from "./teacherCard"

function TeacherList(props:any) {
  return (
    <div className="flex items-center mx-6 h-screen">
      {props.teachers.map((teacher: { name: any; position: any; img: any }, i: any) => {
        return(
        <TeacherCard
          key={i}
          name={teacher.name}
          pos={teacher.position}
          img={teacher.img}
        />
        )
      })}
    </div>
  )
}

export default TeacherList