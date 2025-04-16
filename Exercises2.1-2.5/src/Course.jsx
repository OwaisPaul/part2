
import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = ({course}) => {
        
const totalExercises = course.parts.reduce((sum,parts) => sum + parts.exercises, 0)
console.log(course.parts);
    return (
        <div>
        <Header title={course.name} />
        <Content parts={course.parts} />        
        <Total allExercises={totalExercises}  />
        </div>
    )
}

export default Course