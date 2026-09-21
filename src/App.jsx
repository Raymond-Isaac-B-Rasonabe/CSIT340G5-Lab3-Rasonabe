const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <p key={part.name}>
        {part.name} {part.exercises}
      </p>
    ))}
  </div>
)

const Total = ({ parts }) => (
  <p>
    Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
  </p>
)

const App = () => {
  const course = 'CSIT340: Industry Elective 1'
  const parts = [
    {
      name: 'Information Management 2',
      exercises: 3
    },
    {
      name: 'Project Management for IT',
      exercises: 3
    },
    {
      name: 'Industry Elective 1',
      exercises: 3
    },
    {
      name: 'Raymond Isaac B. Rasonabe - CSIT340  - G5',
      exercises: 12
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App