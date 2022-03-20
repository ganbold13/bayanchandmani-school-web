import TeacherCard from "./teacherCard"

function TeacherList(props:any) {
  return (
    <div className="grid grid-cols-4 mx-6">
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